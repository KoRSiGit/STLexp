import fs from 'fs';
import path from 'path';

function listDir(dir: string) {
  try {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      if (file === 'node_modules' || file === '.git' || file === 'dist') continue;
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      console.log(`${fullPath} (${stat.isDirectory() ? 'dir' : 'file, ' + stat.size + ' B'})`);
      if (stat.isDirectory()) {
         listDir(fullPath);
      }
    }
  } catch (e) {
    console.error(e);
  }
}

console.log('--- Workspace Files (excluding node_modules) ---');
listDir('.');
