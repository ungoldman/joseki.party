import html from 'choo/html'

const themes = ['blank', 'sizzurp']

function renderThemeButton (theme) {
  function click (e) {
    e.preventDefault()
    var body = document.querySelector('body')
    body.className = 'theme-' + theme
  }

  return html`
    <a href="#" class="menu-item ${theme}-marker" onclick=${click}>⬤</a>
  `
}

export default (state, prev, send) => html`
  <nav class="theme-switcher menu">
    <input type="checkbox" class="menu-open" name="menu-open" id="menu-open"/>
    <label class="menu-open-button" for="menu-open">◐</label>
    ${themes.map(renderThemeButton)}
  </nav>
`
