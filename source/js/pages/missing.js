import html from 'choo/html'

export default (state, prev, send) => html`
  <section class="banner table">
    <div class="banner-copy">
      <h1 class="banner-title">404</h1>
      <h2 class="banner-tagline">Bad link, sad link</h2>
      <a href="/" class="btn btn-large">Go Home</button>
    </div>
  </section>
`
