const hljs = require('highlight.js')
function formatterCodeBlock (md) {

  md.renderer.rules.code_block = (tokens, idx, options, env, slf) => {
    const token = tokens[idx]

    const code_block = token.content.split('\n').map((item) => {
      return item ? `<li><code class="hljs">${hljs.highlightAuto(item).value}</code></li>` : ''
    }).join('')

    return `<pre><ol>${code_block}</ol></pre>`
  }
}

module.exports = formatterCodeBlock