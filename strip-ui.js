const fs = require('fs');
const path = require('path');

const cssPropsToRemove = [
  'color',
  'background',
  'background-color',
  'background-image',
  'background-size',
  'background-position',
  'background-repeat',
  'background-clip',
  '-webkit-background-clip',
  '-webkit-text-fill-color',
  'border',
  'border-top',
  'border-right',
  'border-bottom',
  'border-left',
  'border-radius',
  'border-color',
  'border-width',
  'box-shadow',
  'text-shadow',
  'font-family',
  'font-size',
  'font-weight',
  'line-height',
  'letter-spacing',
  'text-transform',
  'text-decoration',
  'text-align',
  'opacity',
  'filter',
  'backdrop-filter',
  '-webkit-backdrop-filter',
  'transition',
  'transition-property',
  'transition-duration',
  'transition-timing-function',
  'transition-delay',
  'animation',
  'animation-name',
  'animation-duration',
  'animation-timing-function',
  'animation-delay',
  'animation-iteration-count',
  'animation-direction',
  'transform',
  'transform-origin',
  'outline',
  'cursor',
  'fill',
  'stroke',
  'clip-path'
];

function processCSS(content) {
  for (let prop of cssPropsToRemove) {
    // Regex matches the property name, followed by colon, 
    // followed by anything that isn't a semicolon or closing brace, 
    // followed by an optional semicolon.
    const regex = new RegExp(`(^|[{\\;])\\s*${prop}\\s*:[^;}]*;?`, 'gi');
    content = content.replace(regex, '$1');
  }
  return content;
}

function processTSX(content) {
  content = content.replace(/\b(initial|animate|transition|variants|whileInView|whileHover|whileTap|viewport)=\{.*?\}/gs, '');
  content = content.replace(/\b(initial|animate|transition|variants|whileInView|whileHover|whileTap|viewport)=".*?"/gs, '');
  content = content.replace(/\bstyle=\{\{.*?\}\}/gs, '');
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

let cssCount = 0;

for (const file of files) {
  if (file.endsWith('.css')) {
    const content = fs.readFileSync(file, 'utf8');
    const newContent = processCSS(content);
    if (content !== newContent) {
      fs.writeFileSync(file, newContent, 'utf8');
      cssCount++;
    }
  }
}

console.log(`Processed ${cssCount} CSS files.`);
