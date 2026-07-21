import { NextResponse } from "next/server";
import { getCurrentKeyPair } from "@/lib/pqc/keyManager";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const { publicKey, version } = getCurrentKeyPair();

    if (!publicKey || publicKey.length === 0) {
      return NextResponse.json({ error: "Public key not configured on server" }, { status: 500 });
    }

    // Convert Uint8Array to hex for safe transport
    const pubHex = Array.from(publicKey)
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");

    return NextResponse.json({
      algorithm: "ML-KEM-768",
      keyVersion: version,
      expires: "2027-01-01", // Hardcoded for demo/platform architecture showcase
      publicKey: pubHex,
    });
  } catch (error) {
    console.error("Error retrieving public key:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
