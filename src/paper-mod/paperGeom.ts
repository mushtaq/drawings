import paper from 'paper'
import { Path, Point, Size, Color } from 'paper'
import Utils from 'Utils'

const setup = () => {
  const canvas = <HTMLCanvasElement>document.getElementById('myCanvas')
  canvas.height = 300
  canvas.width = 300
  paper.setup(canvas)
}

export const paperGeom = () => {
  setup()

  let center = paper.view.center
  let r = new Path.Circle(center, 300)
  r.fillColor = new Color('grey')

  let rectCenter = center.add(new Point(100, 0))
  let rect = new Path.Rectangle(rectCenter, new Size(25, 25))
  rect.fillColor = new Color('white')
  rect.onFrame = () => rect.rotate(1, center)

  Utils.rangeArray(1, 12).forEach(i => {
    let item = <paper.Path.Rectangle>rect.clone()
    item.rotate((360 / 12) * i, center)
    item.onFrame = () => item.rotate(1, center)
  })
}
