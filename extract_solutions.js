const fs = require('fs');
const path = require('path');

const dir = 'src/app/solutions';
const folders = fs.readdirSync(dir);

folders.forEach(folder => {
  const filePath = path.join(dir, folder, 'page.tsx');
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    const titleMatch = content.match(/<h1 className=\{styles\.heroTitle\}>\s*(.+?)\s*<\/h1>/);
    const subTextMatch = content.match(/<p className=\{styles\.heroSubText\}>\s*(.+?)\s*<\/p>/);
    console.log(`-- ${folder} --`);
    console.log(`Title: ${titleMatch ? titleMatch[1].trim() : 'Not found'}`);
    console.log(`SubText: ${subTextMatch ? subTextMatch[1].trim() : 'Not found'}`);
    console.log('---');
  }
});
