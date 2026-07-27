const fs = require('fs');
const path = require('path');

const propsToRemove = [
  'initial', 'animate', 'transition', 'variants', 
  'whileInView', 'whileHover', 'whileTap', 'viewport', 'style'
];

function processTSX(content) {
  let idx = 0;
  
  while (idx < content.length) {
    let foundProp = null;
    let foundAt = -1;
    
    // Find the next occurrence of a property
    for (let prop of propsToRemove) {
      // Must be bounded by word boundaries, and not part of a string (simplistic check)
      const regex = new RegExp(`\\b${prop}\\s*=`, 'g');
      regex.lastIndex = idx;
      const match = regex.exec(content);
      if (match && (foundAt === -1 || match.index < foundAt)) {
        foundAt = match.index;
        foundProp = prop;
      }
    }
    
    if (foundAt === -1) {
      break; // No more properties found
    }
    
    // Now we need to parse the value
    let equalsIndex = content.indexOf('=', foundAt);
    let valueStart = equalsIndex + 1;
    while (valueStart < content.length && /\s/.test(content[valueStart])) {
      valueStart++;
    }
    
    let valueEnd = valueStart;
    
    if (content[valueStart] === '{') {
      let braceCount = 1;
      valueEnd++;
      while (valueEnd < content.length && braceCount > 0) {
        if (content[valueEnd] === '{') braceCount++;
        else if (content[valueEnd] === '}') braceCount--;
        valueEnd++;
      }
    } else if (content[valueStart] === '"' || content[valueStart] === "'") {
      let quote = content[valueStart];
      valueEnd++;
      while (valueEnd < content.length) {
        if (content[valueEnd] === quote && content[valueEnd - 1] !== '\\') {
          valueEnd++;
          break;
        }
        valueEnd++;
      }
    } else {
      // Something like prop=value, rare in JSX unless numeric but valid
      while (valueEnd < content.length && !/\s|>/.test(content[valueEnd])) {
        valueEnd++;
      }
    }
    
    // Remove the chunk
    content = content.substring(0, foundAt) + content.substring(valueEnd);
    idx = foundAt; // Continue searching from here
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

console.log(`Processed ${tsxCount} TSX files.`);
