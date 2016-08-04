import html from 'choo/html'
import serialize from 'form-serialize'
import blanks from '../lib/blanks'
import generateName from '../lib/generate-name'

export default (state, prev, send) => {
  function submit (e) {
    e.preventDefault()
    let game = serialize(e.target, {hash: true})
    game.komi = parseInt(game.komi)
    game.size = parseInt(game.size)
    game.name = generateName()
    send('game:create', game)
  }

  return html`
    <section class="table table-purple">
      <div class="table-cell">
        <div class="panel text-center">
          <h2 class="leader-0">New Game</h2>
          <form onsubmit=${submit} class="text-left">
            <label class="flex">
              <span class="flex-1">Komi:</span>
              <select name="komi">
                <option value="0" selected="">No Komi</option>
                <option value=".5">½</option>
                <option value="4">Four</option>
                <option value="4.5">Four ½</option>
                <option value="5">Five</option>
                <option value="5.5">Five ½</option>
                <option value="6">Six</option>
                <option value="6.5">Six ½</option>
                <option value="7">Seven</option>
                <option value="7.5">Seven ½</option>
                <option value="8">Eight</option>
              </select>
            </label>
            <label class="flex">
              <span class="flex-1">Size:</span>
              <select name="size">
                <option value="9">9x9</option>
                <option value="13" selected>13x13</option>
                <option value="19">19x19</option>
              </select>
            </label>
            <label class="flex">
              <span class="flex-1">Color:</span>
              <select name="color">
                <option value="white" selected>White</option>
                <option value="black">Black</option>
              </select>
            </label>
            <button type="submit" class="btn btn-large btn-center leader-1">Create Game</button>
          </form>
        </div>
      </div>
    </section>
  `
}
