## Explore all the ways of writing css.

- Normal Css
- Styled Component
- Styling library(MUI,Bootstrap etc.)

## How do we configure tailwind?

- Install tailwindcss and its peer dependencies via npm, and then run the init command to generate tailwind.config.js.
- Add the paths to all of your template files in your tailwind.config.js file.

## In tailwind.config.js, what does all the keys mean (content, theme, extend, plugins)?

- The Content contains where we will use the css class(like it will include file extension ex: html,js,jsx,ts,tsx etc.)
- The content section of your tailwind.config.js file is where you configure the paths to all of your HTML templates, JavaScript components, and any other source files that contain Tailwind class names.
- The theme object contains keys for screens, colors, and spacing, as well as a key for each customizable core plugin.
- If you’d like to preserve the default values for a theme option but also add new values, add your extensions under the theme.extend key in your configuration file. Values under this key are merged with existing theme values and automatically become available as new classes that you can use.
- Plugins let you register new styles for Tailwind to inject into the user’s stylesheet using JavaScript instead of CSS.

## Why do we have .postcssrc file?

- Because Tailwind adds some new non-standard keywords to CSS (like @tailwind , @apply , theme() , etc.), you often have to write your CSS in annoying, unintuitive ways to get a preprocessor to give you the expected output. Working exclusively with PostCSS avoids this.
