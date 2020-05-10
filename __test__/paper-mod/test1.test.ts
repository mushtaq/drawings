import { Color, Path, Point } from 'paper'
import { Geometry } from 'paper-mod/Geometry'

const pc = require('paper-jsdom-canvas')

test('loads and displays greeting', async () => {
  pc.setup(new pc.Size(500, 500))
  const path = new Path()
  path.strokeColor = new Color('grey')

  const start = new Point(500, 500)
  path.moveTo(start)

  const smallerSide = 100

  path.lineBy(new Point(0, -smallerSide * Math.sqrt(3)))
  path.lineBy(new Point(-smallerSide, 0))
  path.closePath()
  console.log(path.segments.map(x => x))
})

test('reflect', async () => {
  pc.setup(new pc.Size(500, 500))
  const path = new Path()
  path.strokeColor = new Color('grey')

  path.add(new Point(3.96, -1.41))
  path.add(new Point(2.78, -3.47))
  path.add(new Point(10.08, -3.55))
  path.closePath()

  let path1 = Geometry.reflect(path, 2)
  // console.log(path1)
  console.log(path1.segments.map(x => [x.point.x, x.point.y]))
})

test('angle', async () => {
  pc.setup(new pc.Size(500, 500))

  let p0 = new Point(0, 0)
  let p1 = new Point(10, 10)
  let p2 = new Point(20, 40)

  console.log(p1.angle)
  console.log(p2.angle)
  console.log(p2.subtract(p1).angle)
  console.log(Geometry.angle(p2, p1))
})
