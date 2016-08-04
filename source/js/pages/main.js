import html from 'choo/html'

export default (state, prev, send) => html`
  <section class="banner table">
    <div class="banner-copy">
      <h1 class="banner-title">Joseki Party</h1>
      <h2 class="banner-tagline">play go online with friends, party time 🎉</h2>
      <a href="/new" class="btn btn-large">Start New Game</a>
    </div>
  </section>
`
