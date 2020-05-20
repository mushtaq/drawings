import p5 from 'p5'
import Utils from 'Utils'

type Complex = [number, number]

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
        const z: Complex = [x, y]
        const col = mandelbrot(z, 100)
        if (col == 100) {
          p.fill(0)
        } else {
          p.fill(255 - 25 * col, 255, 255)
          p.rect(x * xscl, y * yscl, 1, 1)
        }
      }
    }
  }

  const mandelbrot = (z: Complex, num: number) => {
    let count = 0
    let z1 = z
    while (count <= num) {
      if (magnitude(z1) > factor) {
        return count
      }
      z1 = cAdd(cMult(z1, z1), z)
      count += 1
    }
    return num
  }

  const cAdd = (a: Complex, b: Complex): Complex => {
    return [a[0] + b[0], a[1] + b[1]]
  }

  const cMult = (u: Complex, v: Complex): Complex => {
    return [u[0] * v[0] - u[1] * v[1], u[1] * v[0] + u[0] * v[1]]
  }

  const magnitude = (z: Complex): number => {
    return p.sqrt(z[0] ** 2 + z[1] ** 2)
  }
}
