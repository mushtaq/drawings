import p5 from 'p5'
import { sketch } from './sketch'
import { geom } from './geom'
import { hGraph } from 'p5-mod/harmonograph'
import { mandleBrot } from 'p5-mod/mandlebrot'

export const runP5 = () => {
  // new p5(sketch)
  // new p5(geom)
  // new p5(hGraph)
  new p5(mandleBrot)
}
