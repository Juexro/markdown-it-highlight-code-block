# markdown-it-highlight-code-block

rewrite default_rules.code_block for [markdown-it](https://github.com/markdown-it/markdown-it) in nodejs.


## install

```
yarn add markdown-it-highlight-code-block -D
```

## usage

```js
const fs = require('fs')
let fileContent = fs.readFileSync('markdown.md', 'utf8')
const style = fs.readFileSync('node_modules/highlight.js/styles/github.css')

const MarkdownIt = require('markdown-it')
const codeBlockPlugin = require('markdown-it-highlight-code-block')
const md = new MarkdownIt().use(codeBlockPlugin)

fs.writeFileSync('markdown.html', `<style>${style}</style>` + md.render(fileContent))
```
