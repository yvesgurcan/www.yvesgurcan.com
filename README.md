# www.yvesgurcan.com

This is my personal website.

The UI was written in HTML and CSS (with the help of the SASS pre-processor) and a dash of JavaScript.

This project also contains a lambda function that handles the data from the contact form and sends emails automatically. This lambda function is integrated with other AWS services: API Gateway and Simple Email Service (SES). These services require additional configuration that is not documented below.

## User Interface

### Development

    npm install
    npm start

This will run a webpack server with hot reload enabled.

### Deployment

It is not necessary to run `npm install` to deploy this website on GitHub Pages, as the HTML and JS files do not require any compilation.

However, the stylesheets are compiled from SASS to CSS. If you want to update the `.scss` files, you must install `sass` globally.

    npm install -g sass

Then, you can watch any change on the stylesheet files.

    npm compile:sass

## API

The commands related to the API should be executed in `/api/contactMe`.

### Configuration

    $ cd /api/contactMe
    $ cp config.example.json config.json
    $ vi config.json

### Deployment

    $ vi serverless.yml
    $ serverless deploy -v
