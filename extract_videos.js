const fs = require('fs');
const path = require('path');

const dir = 'src/app/solutions';
const folders = fs.readdirSync(dir);

folders.forEach(folder => {
  const filePath = path.join(dir, folder, 'page.tsx');
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    let videoMatch = content.match(/<source[^>]*src="([^"]+)"/);
    if (!videoMatch) {
      videoMatch = content.match(/<video[^>]*src="([^"]+)"/);
    }
    console.log(`-- ${folder} --`);
    console.log(`Video: ${videoMatch ? videoMatch[1] : 'Not found'}`);
  }
});
