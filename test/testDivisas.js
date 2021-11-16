import {getConversor} from '../src/modulos/moduloConversor/index.js'

const cv = getConversor();

 cv.getDato('ARS','USD',2).then(r=>{console.log(r)})

