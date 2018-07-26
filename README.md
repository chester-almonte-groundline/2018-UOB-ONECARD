# UOB One Card Microsite

This boilerplate wraps [Hugo](gohugo.io) with [Gulp](https://gulpjs.com/) as your local development build pipeline.

## Prerequisites
To use Gulp, you must have [Node](https://nodejs.org/en/download/) and [NPM](https://www.npmjs.com/get-npm) installed.

## Setup

Once the prerequisites are installed, clone the repository to your local machine, and then run:

```
npm install
```

## Local Development

Local development is powered by BrowserSync, you will be able to develop sites rapidly through:

- A local development server at `http://localhost:3000/`.
- Automatic CSS updates without reloading the page
- Automatic page reloads when content is changed

Running the local development server is as simple as running:

```
npm start
```

Compiling SASS and watch for changes. You will usually need to run this while 'npm start' is also running in the background:

```
npm run watch-sass
```

*This will display all draft, future-dated, or expired content, which is not included in your production build.*

If you'd like to develop with the site as it will appear in production, run:

```
npm run preview
```

## Production Build

To generate a final production build on your local machine you can run:

```
npm run build
```
*The fresh production build of your site will end up in the `dist/` directory.* The production build assumes that you upload your files to the root folder of your server.

# Project Structure
```
.
├── .tmp/                  // Temporary directory for development server
├── dist/                  // The production build
├── site/                  // The Hugo project; content, data and static files
|   ├── .forestry/         // Contains Forestry.io configuration files
|   ├── content/           // Where all site content is stored 
|   ├── data/              // TOML, YAML or JSON files containing site data 
|   ├── layouts/           // Your site's layouts
|   |   ├── partials/      // Your site's partials
|   |   └── shortcodes/    // Your site's shortcodes
|   ├── static/            // Where all static files live
|   |   ├── css/           // Where compiled CSS files live
|   |   ├── js/            // Where compiled JS files live
|   |   └── uploads/       // Where user uploads are stored
|   |   └── img/       	   // Where site image assets are stored
|   |   └── fonts/         // Where fonts are stored
|   |   └── csv/           // Where CSV files are stored
|   └── config.toml        // The Hugo configuration file
└─── src/
     ├── css               // CSS source files to be compiled to site/static/css/
     ├── scss              // SCSS source files to be compiled to /css/
     └── js                // JS source files to be compiled to site/static/js/
     └── img               // Images to be copied to site/static/img
```

### Notes:
* To make changes to the site's design structure and layouts, go to site/layouts
* Change CSS styling in src/scss. Make sure you are running **npm run watch-sass** in the background 
* Change Javascript in src/js.
* Do not edit css and js inside site/static because this is being compiled and copied from src/ directory
* Add or edit menu links inside site/config.toml 
* Do not add or change images inside site/static/img directory. Do it inside src/img instead and re-run the start or build command to take effect
* Add or modify _deals_ contents by editing the CSV file in site/static/csv/deals.csv

