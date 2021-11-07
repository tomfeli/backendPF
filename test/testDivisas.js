import Conversor from './Conversor.js'

const cv = new Conversor();

 cv.getDato('ARS','USD',2).then(r=>{console.log(r)})

