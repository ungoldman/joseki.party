import choo from 'choo'
import html from 'choo/html'
import gameModel from './models/game'
import main from './pages/main'
import create from './pages/create'
import missing from './pages/missing'
import play from './pages/play'
import watch from './pages/watch'
import theme from './elements/theme'

const app = choo()

app.model(gameModel)

app.router('/404', (route) => [
  route('/', main),
  route('/new', create),
  route('/404', missing),
  route('/:game', watch, [
    route('/:color', play)
  ])
])

const tree = app.start()
document.body.appendChild(tree)
// document.body.appendChild(theme())
