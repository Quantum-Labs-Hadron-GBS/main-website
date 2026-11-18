// Development-only stand-in for the D1 database, used by `next dev` (no Cloudflare runtime needed).
// Backed by Node's built-in SQLite, stored in .wrangler/ (gitignored). Never used in production.

// Minimal typings for node:sqlite (not in @types/node 20)
interface StatementSync {
  get(...v: Value[]): unknown;
  all(...v: Value[]): unknown[];
  run(...v: Value[]): { changes: number | bigint };
}
interface DatabaseSync {
  prepare(sql: string): StatementSync;
  exec(sql: string): void;
}

type Value = string | number | null;

interface Result<T> {
  results: T[];
  meta?: { changes?: number };
}

class Stmt {
  constructor(private db: DatabaseSync, private sql: string, private values: Value[] = []) {}
  private get s(): StatementSync {
    return this.db.prepare(this.sql);
  }
  bind(...values: unknown[]) {
    return new Stmt(this.db, this.sql, values as Value[]);
  }
  async first<T>(): Promise<T | null> {
    return (this.s.get(...this.values) as T | undefined) ?? null;
  }
  async all<T>(): Promise<Result<T>> {
    return { results: this.s.all(...this.values) as T[] };
  }
  async run(): Promise<Result<unknown>> {
    const info = this.s.run(...this.values);
    return { results: [], meta: { changes: Number(info.changes) } };
  }
}

let instance: { prepare(q: string): Stmt; batch(s: Stmt[]): Promise<Result<unknown>[]> } | null = null;

export async function getDevDb() {
  if (instance) return instance;
  // Specifier kept in a variable so bundlers never try to include node:sqlite
  const sqliteModule = "node:sqlite";
  const { DatabaseSync } = (await import(/* webpackIgnore: true */ /* turbopackIgnore: true */ sqliteModule)) as {
    DatabaseSync: new (path: string) => DatabaseSync;
  };
  const { mkdirSync } = await import("node:fs");
  mkdirSync(".wrangler/state", { recursive: true });
  const db = new DatabaseSync(".wrangler/state/careers-dev.sqlite");
  console.warn("[careers] Dev mode: careers jobs stored in local SQLite at .wrangler/state/careers-dev.sqlite");
  instance = {
    prepare: (q: string) => new Stmt(db, q),
    batch: async (stmts: Stmt[]) => {
      db.exec("BEGIN");
      try {
        const out: Result<unknown>[] = [];
        for (const s of stmts) out.push(await s.run());
        db.exec("COMMIT");
        return out;
      } catch (e) {
        db.exec("ROLLBACK");
        throw e;
      }
    },
  };
  return instance;
}
