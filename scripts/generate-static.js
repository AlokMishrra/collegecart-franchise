import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, '..', 'dist', 'client');
const assetsPath = path.join(distPath, 'assets');

// Find the main client JS and CSS files
const files = fs.readdirSync(assetsPath);
const clientJs = files.find(f => f.startsWith('client-') && f.endsWith('.js'));
const stylesCSS = files.find(f => f.startsWith('styles-') && f.endsWith('.css'));

if (!clientJs) {
  console.error('❌ Could not find client JS file!');
  process.exit(1);
}

console.log(`Found client JS: ${clientJs}`);
console.log(`Found styles CSS: ${stylesCSS}`);

// Create index.html with the correct asset paths
const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Start your own CollegeCart franchise in your college campus with zero investment. Build a profitable student delivery business and earn up to ₹1 lakh/month.">
  <title>CollegeCart Franchise Opportunity | Start Campus Delivery Business</title>
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  ${stylesCSS ? `<link rel="stylesheet" crossorigin href="/assets/${stylesCSS}">` : ''}
</head>
<body>
  <div id="root"></div>
  <script type="module" crossorigin src="/assets/${clientJs}"></script>
</body>
</html>`;

// Write index.html to dist/client
fs.writeFileSync(path.join(distPath, 'index.html'), indexHtml);

console.log('✅ Static index.html generated successfully!');
console.log(`   Client JS: /assets/${clientJs}`);
if (stylesCSS) console.log(`   Styles CSS: /assets/${stylesCSS}`);
