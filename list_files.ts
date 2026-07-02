import fs from 'fs';
import path from 'path';

const BASE_DIR = './markdown-sibtehlit.ru-20260629';

function walkDir(dir: string, fileList: string[] = []): string[] {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const absolutePath = path.join(dir, file);
    if (fs.statSync(absolutePath).isDirectory()) {
      walkDir(absolutePath, fileList);
    } else {
      fileList.push(absolutePath);
    }
  }
  return fileList;
}

const allFiles = walkDir(BASE_DIR);
const mdFiles = allFiles.filter(f => f.endsWith('.md')).map(f => path.relative(BASE_DIR, f));

console.log('=== LIST OF 45 MARKDOWN FILES ===');
mdFiles.forEach((f, i) => {
  console.log(`${i + 1}. ${f}`);
});
