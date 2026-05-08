import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Create a simple index.html that loads the app
const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Start your own CollegeCart franchise in your college campus with zero investment. Build a profitable student delivery business and earn up to ₹1 lakh/month.">
  <title>CollegeCart Franchise Opportunity | Start Campus Delivery Business</title>
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
</head>
<body>
  <div id="root"></div>
  <script type="module">
    // Redirect to handle client-side routing
    window.addEventListener('load', () => {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = '/assets/client-BoEH3RoR.js';
      document.body.appendChild(script);
      
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '/assets/styles-BWH0IgyV.css';
      document.head.appendChild(link);
    });
  </script>
</body>
</html>`;

// Write index.html to dist/client
const distPath = path.join(__dirname, '..', 'dist', 'client');
fs.writeFileSync(path.join(distPath, 'index.html'), indexHtml);

console.log('✅ Static files generated successfully!');
