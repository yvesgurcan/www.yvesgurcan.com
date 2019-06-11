# yvesgurcan.com

This is my personal website.

The UI was written from scratch in HTML and CSS (with the help of the SASS pre-processor) and a dash of JavaScript.

## User Interface

### Development

    npm install
    npm start

This will run a webpack server with hot reload enabled.

### Deployment

It is not necessary to run `npm install` to deploy this website to GitHub Pages, as the HTML and JS files do not require any compilation.

However, the stylesheets are compiled from SASS to CSS. If you want to update the `.scss` files, you must use `sass`. You can watch any change on the stylesheet files.

    npm compile:sass
