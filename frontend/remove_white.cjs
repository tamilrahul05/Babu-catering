const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.resolve(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.jsx')) {
      let content = fs.readFileSync(file, 'utf8');
      if (content.match(/white\/\d+/)) {
        results.push(file);
        let newContent = content.replace(/\s?\bborder-white\/\d+\b/g, '')
                                .replace(/\s?\btext-white\/\d+\b/g, ' text-white')
                                .replace(/\s?\bbg-white\/\d+\b/g, '');
        fs.writeFileSync(file, newContent);
      }
    }
  });
  return results;
}

const modified = walk('d:/Frontend/Project/catering/frontend/src');
console.log('Modified files:', modified.join(', '));
