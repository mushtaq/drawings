import p5 from 'p5'
import { sketch } from './sketch'
import { geom } from './geom'
import { hGraph } from 'p5-mod/harmonograph'

export const runP5 = () => {
  // new p5(sketch)
  // new p5(geom)
  new p5(hGraph)
}
