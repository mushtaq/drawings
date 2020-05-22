import p5 from 'p5'
import Utils from 'Utils'

export const mandleBrot = (p: p5) => {
  const factor = 2
  const xmin = -factor
  const xmax = factor

  const ymin = -factor
  const ymax = factor

  const rangex = xmax - xmin
  const rangey = ymax - ymin

  const width = 600
  const height = 600

  const xscl = width / rangex
  const yscl = -height / rangey

  p.setup = () => {
    p.createCanvas(width, height)
    p.colorMode(p.HSB)
    p.background('black')
    p.noStroke()
    p.noLoop()
  }

  p.draw = () => {
    p.translate(width / 2, height / 2)
    let count = 0
    for (const x of Utils.range(xmin, xmax, 0.005)) {
      for (const y of Utils.range(ymin, ymax, 0.005)) {
        count += 1
        if (count % 40000 == 0) {
          console.log(x, y)
        }
        const z = new Complex(x, y)
        const c = new Complex(-0.4, 0.6)
        const col = z.julia(c, 100, factor)
        if (col == 100) {
          p.fill(0)
        } else {
          p.fill(6 * col, 255, 255)
          p.rect(x * xscl, y * yscl, 1, 1)
        }
      }
    }
  }
}

class Complex {
  constructor(readonly re: number, readonly im: number) {}

  add(that: Complex): Complex {
    return new Complex(this.re + that.re, this.im + that.im)
  }

  multiply(that: Complex): Complex {
    return new Complex(
      this.re * that.re - this.im * that.im,
      this.im * that.re + this.re * that.im,
    )
  }

  magnitude(): number {
    return Math.sqrt(this.re ** 2 + this.im ** 2)
  }

  mandelbrot(num: number, factor: number): number {
    return this.julia(this, num, factor)
  }

  julia(c: Complex, num: number, factor: number): number {
    let count = 0
    let z: Complex = this
    while (count <= num) {
      if (z.magnitude() > factor) {
        return count
      }
      z = z.multiply(z).add(c)
      count += 1
    }
    return num
  }
}
