import p5 from 'p5'
import { Color } from 'p5'

export const geom = (p: p5) => {
  let t = 0

  p.setup = () => {
    p.createCanvas(600, 600)
  }

  p.draw = () => {
    p.background(p.color('grey'))
      .translate(p.width / 2, p.height / 2)
      .rotate(p.radians(t))

    for (let i in Array.from(Array(12).keys())) {
      p.rect(200, 0, 50, 50).rotate(p.radians(360 / 12))
    }

    t += 1
  }
}
