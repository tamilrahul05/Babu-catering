const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else {
      if (dirFile.endsWith('.jsx')) {
        filelist.push(dirFile);
      }
    }
  });
  return filelist;
};

const files = walkSync(path.join(__dirname, 'src'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Fix the syntax errors left by the previous regex
  content = content.replace(/key=\{([^}]+)\}\}/g, 'key={$1}');
  content = content.replace(/\}\}\}/g, '}}');
  
  // In case there are `}}` standing alone before className:
  content = content.replace(/\}\n\s*className="/g, '\n            className="');
  
  fs.writeFileSync(file, content);
});
console.log('Fixed syntax errors');
