# yvesgurcan.com

Yves' personal website. Written from scratch in HTML and CSS (with the help of the SASS pre-processor) and a dash of JavaScript.

### Development

    npm install
    npm start

This will run a webpack server with hot reload enabled.

### Deployment

The HTML and JavaScript do not need to be compiled. Pushing updates will publish the new version on GitHub Pages.

However, the stylesheets must be compiled from SASS to CSS. You can watch any change on the stylesheet files.

    npm compile:sass
