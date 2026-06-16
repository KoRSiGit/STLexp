import fs from 'fs';
import path from 'path';

const htmPath = path.resolve('extracted_site/https@sibtehlit.ru/default.htm');

const html = fs.readFileSync(htmPath, 'utf8');

// The menu is usually in an element like <ul class="nav" or inside some sidebar div.
// Let's search inside the HTML for list items enclosing links.
// Let's find index of some known text like "Смеситель вихревой" or "Оборудование ПГС" and trace backwards to see the menu container.
const idx = html.indexOf('Оборудование ПГС');
if (idx !== -1) {
  const segment = html.substring(idx - 2000, idx + 4000);
  console.log('--- Segment Around "Оборудование ПГС" ---');
  console.log(segment);
} else {
  console.log('Could not find "Оборудование ПГС" text');
}
