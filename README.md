# Kévin Rocher - Front-End Documentation

This is the Front-End documentation for the project “Kévin Rocher.”

## CSS Format

All SCSS/CSS files must be validated with the csslisible.com tool. A Sublime Text extension is available and a local install is easy.

This tool ensure every file use the same indentation and CSS properties are in a correct order.

## CSSCommon

CSSCommon is a Sass framework which speeds up front-end development. You can choose which modules are loaded in your main CSS file "main.scss".

Please check its official website : https://www.csscommon.com/

## Gulp

Gulp is used to compile Sass files, merge & minify JS files & generate a font-icon.

## How to install

Go to the folder containing the package.json file, and launch the following command :

`npm install && gulp default;`

## JS

All JS files added to the src/js folder will be watched and merged into a single assets/js/app.js file.

## Font Icons

Gulp will generate an icon font. This icon font allows us to insert a vectorized graphic anywhere in the project without editing the layout, with customizations like color, shadows, size or transitions, with a good front-end performance impact.

### Adding a new icon to the fonticon :

Please add a SVG file in the folder icons/. The filename will be used as the icon name. Then launch the following command :

`gulp default;`

### Inserting an icon in the project

You can put anywhere you want the following HTML ( for an icon named test.svg ) :

`<i class="icon icon_test"></i>`

You can also insert it directly in Sass :

```
.my-selector:before {
    @extend .icon;
    @extend .icon_test;
}
 ```

## Watch

If you launch the following command, Gulp will automatically check for modified Sass files, js files & new icons :

`gulp watch`

A browser-sync instance is also available. Please ensure there is a correct project_hostname value in your package.json to enable proxying.

