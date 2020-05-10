import p5 from 'p5'
import { paperSketch } from 'paper-mod'
import { sketch } from 'p5-mod'

const runP5 = () => new p5(sketch)
const runPaper = () => (window.onload = () => paperSketch())

runP5()
