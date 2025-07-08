Basic setup with TailwindCSS and VSCode settings.

## .vscode/settings.json

```json
{
  "tailwindCSS.includeLanguages": {
    "html": "html"
  },
  "tailwindCSS.experimental.classRegex": [
    ["class\\s*=\\s*\"([^\"]*)\"", 1]
  ],
  "editor.quickSuggestions": {
    "strings": true
  }
}
```

## tailwind.config.js

```js
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```