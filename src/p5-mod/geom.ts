import p5 from 'p5'
import Utils from 'Utils'

export const geom = (p: p5) => {
  let t = 0

  p.setup = () => {
    p.createCanvas(600, 600)
  }

  p.draw = () => {
    p.background(p.color('grey'))
      .translate(p.width / 2, p.height / 2)
      .rotate(p.radians(t))

    for (let i of Utils.range(0, 12)) {
      p.push()
      p.translate(225, 25)
      p.rotate(p.radians(t))
      p.rect(-25, -25, 50, 50)
      p.pop()
      p.rotate(p.radians(360 / 12))
    }

    t += 1
  }
}
