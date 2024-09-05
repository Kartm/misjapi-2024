1.  **Developing**

    ```shell
    npm run develop
    ```
    
    You might need to run it a couple of times, as the website sometimes fails to deliver all images.

    Visit http://localhost:8000/__graphql to access the GraphQL playground.

2.  **Building**

    ```shell
    npm run build
    ```
    
    You can test it via `npx serve public`

3.  **Publishing**

    Build the app. Connect to misjapi FTP and put the assets into the `gatsby_dist` directory.

    Make sure `.htaccess` contains a redirect:

    ```
    <IfModule mod_rewrite.c>
        RewriteEngine On
        RewriteBase /
    
        # Redirect / to Gatsby index.html
        RewriteRule ^/?$ /gatsby_dist/index.html [L]
        RewriteRule ^static/(.*)$ /gatsby_dist/static/$1 [L]
        RewriteRule ^page-data/(.*)$ /gatsby_dist/page-data/$1 [L]
        RewriteRule ^app-(.*)\.js$ /gatsby_dist/app-$1.js [L]
        RewriteRule ^framework-(.*)\.js$ /gatsby_dist/framework-$1.js [L]
        RewriteRule ^webpack-runtime-(.*)\.js$ /gatsby_dist/webpack-runtime-$1.js [L]
        RewriteRule ^component-(.*)\.js$ /gatsby_dist/component-$1.js [L]
        RewriteRule ^commons-(.*)\.js$ /gatsby_dist/commons-$1.js [L]
        RewriteRule ^731-(.*)\.js$ /gatsby_dist/731-$1.js [L]
        RewriteRule ^843-(.*)\.js$ /gatsby_dist/843-$1.js [L]
    </IfModule>
    ```
    
    todo: make menu updates trigger https://github.com/SamKirkland/FTP-Deploy-Action to automatically build and deploy.

    I had to expand the rewrite rules to make sure Gatsby is able to access everything. There has to be a simpler way.