const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

// Function to generate .htaccess rules
const generateHtaccessRules = (publicDir) => {
    const rules = [];

    // Add basic rewrite rules for Gatsby assets
    rules.push('<IfModule mod_rewrite.c>');
    rules.push('RewriteEngine On');
    rules.push('RewriteBase /');

    // Handle index.html (root page)
    rules.push('RewriteRule ^/?$ /gatsby_dist/index.html [L]');

    // General rules for JS, CSS, and asset files
    rules.push('RewriteRule ^(.*)\\.js$ /gatsby_dist/$1.js [L]');
    rules.push('RewriteRule ^(.*)\\.js\\.map$ /gatsby_dist/$1.js.map [L]');
    rules.push('RewriteRule ^(.*)\\.js\\.LICENSE\\.txt$ /gatsby_dist/$1.js.LICENSE.txt [L]');

    // General rule for static assets (images, videos, etc.)
    rules.push('RewriteRule ^static/(.*)$ /gatsby_dist/static/$1 [L]');

    // General rule for page-data (JSON files)
    rules.push('RewriteRule ^page-data/(.*)\\.json$ /gatsby_dist/page-data/$1.json [L]');

    // Specific rules for 404 page
    rules.push('RewriteRule ^404/index\\.html$ /gatsby_dist/404/index.html [L]');
    rules.push('RewriteRule ^404\\.html$ /gatsby_dist/404.html [L]');

    rules.push('</IfModule>');

    // Output rules to the terminal
    console.log(rules.join('\n'));
};

// Function to execute npm build and generate htaccess
const runBuildAndGenerateRules = () => {
    // Uncomment the build process if needed
    // exec('npm run build', (error, stdout, stderr) => {
    //     if (error) {
    //         console.error(`Error during build: ${error}`);
    //         return;
    //     }
    //
    //     console.log(stdout);
    //     console.error(stderr);

    // Path to the public directory
    const publicDir = path.join(__dirname, 'public');

    if (fs.existsSync(publicDir)) {
        // Generate .htaccess rules
        generateHtaccessRules(publicDir);
    } else {
        console.error('Error: Public directory not found.');
    }
    // });
};

// Start the process
runBuildAndGenerateRules();