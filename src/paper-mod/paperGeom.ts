import paper from 'paper'
import { Path, Point, Size, Color, view } from 'paper'
import Utils, { FrameEvent } from 'Utils'

const setup = () => {
  const canvas = <HTMLCanvasElement>document.getElementById('myCanvas')
  canvas.height = 600
  canvas.width = 600
  paper.setup(canvas)
}

export const paperGeom = () => {
  setup()

  let r = new Path.Rectangle(view.bounds)
  r.fillColor = new Color('grey')

  let rectCenter = view.center.add(new Point(200, 0))
  let rect = new Path.Rectangle(rectCenter, new Size(50, 50))
  rect.fillColor = new Color('white')
  setEvents(rect)

  for (let i of Utils.range(1, 12)) {
    let item = <paper.Path.Rectangle>rect.clone()
    item.rotate((360 / 12) * i, view.center)
    setEvents(item)
  }
}

const setEvents = (r: paper.Path.Rectangle) => {
  r.onClick = (e: MouseEvent) => {
    r.fillColor = new Color('red')
  }
  r.onFrame = (e: FrameEvent) => {
    r.rotate(1, view.center)
    r.rotate(1, r.position)
  }
}
