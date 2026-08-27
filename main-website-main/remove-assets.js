const fs = require('fs');
const path = require('path');

const tagsToRemove = [
  'GlobeWrapper', 'GlobalGlobe', 'PlanetHorizon', 'MatrixGraphic', 'Image', 'img'
];

const importsToMatch = [
  'GlobeWrapper', 'GlobalGlobe', 'PlanetHorizon', 'MatrixGraphic', 'next/image'
];

function processTSX(content) {
  // 1. Remove Imports
  let lines = content.split('\n');
  lines = lines.filter(line => {
    if (line.trim().startsWith('import ')) {
      for (const matchStr of importsToMatch) {
        if (line.includes(matchStr)) {
          return false; // remove this line
        }
      }
    }
    return true;
  });
  content = lines.join('\n');

  // 2. Remove Tags
  for (const tag of tagsToRemove) {
    // Block tags: <Tag ...> ... </Tag>
    // We use [\s\S]*? to match across newlines non-greedily
    const blockRegex = new RegExp(`<${tag}\\b[^>]*>[\\s\\S]*?<\\/${tag}\\s*>`, 'g');
    content = content.replace(blockRegex, '');

    // Self-closing tags: <Tag ... />
    // To properly match a self closing tag that might span multiple lines, we match up to />
    // However, [^>]*? might stop early if there's a > inside a prop like: fn={() => {}}.
    // Since these tags usually don't have complex inline functions in this codebase (they are mostly UI images), 
    // we can use a simple regex, but to be safer we can match up to />.
    const selfClosingRegex = new RegExp(`<${tag}\\b[^>]*?\\/>`, 'g');
    content = content.replace(selfClosingRegex, '');
  }

  return content;
}

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.resolve(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      results.push(file);
    }
  });
  return results;
}

const targetDir = path.join(__dirname, 'src', 'app');
const files = walk(targetDir);

let tsxCount = 0;

for (const file of files) {
  if (file.endsWith('.tsx')) {
    const content = fs.readFileSync(file, 'utf8');
    const newContent = processTSX(content);
    if (content !== newContent) {
      fs.writeFileSync(file, newContent, 'utf8');
      tsxCount++;
    }
  }
}

console.log(`Processed ${tsxCount} TSX files to remove assets.`);
