const fs = require('fs');
const file = 'config/content.ts';
let content = fs.readFileSync(file, 'utf8');

const regex = /name: "(Embroidered patches|Chenille patches|PVC patches|Silicone patches|Leather patches|Woven patches|Sublimated patches|Iron-on patches)",/g;

content = content.replace(regex, (match, p1) => {
  const slug = p1.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  return `slug: "${slug}",\n      name: "${p1}",`;
});

fs.writeFileSync(file, content);
console.log("Done");
