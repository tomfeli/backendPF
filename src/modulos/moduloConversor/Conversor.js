import axios from 'axios'

const key = '11452|ZRFVjGE4qFO5A0*p_2G2Jd8Aj0Ns0Wn5';

export default class Conversor{

    async getDato(from, to, q) {

        let { data: datoConversion } = await axios.get(`https://api.cambio.today/v1/quotes/${from}/${to}/json?quantity=${q}&key=${key}`)

        return datoConversion
    }
}

