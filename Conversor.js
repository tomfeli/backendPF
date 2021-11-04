import axios from 'axios'
import { validarNumero } from './Validacion'
import { crearErrorDeAPI } from './ApiError'

const key = '11452|ZRFVjGE4qFO5A0*p_2G2Jd8Aj0Ns0Wn5';

function realizarConversion(from,to,q){

    q = validarNumero(q);

    try {
        let conversion = await axios.get('https://api.cambio.today/v1/quotes/{ from }/{ to }/json?quantity={ q }&key={key}')
        conversion = JASON.parse(conversion);
        return conversion
    } catch (error) {
        throw crearErrorDeAPI('Fallo en la conexion a la API')
    }









}