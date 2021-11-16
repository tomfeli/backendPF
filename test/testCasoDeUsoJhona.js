// import Servidor from '../src/server.js';
// import axios from 'axios';
import RegistroDeUsuario from '../src/casoDeUso/RegistroDeUsuario.js';
// const server = new Servidor()
const notified = new RegistroDeUsuario()
// try {
//     const PORT = await server.conectar()
//     const URLGET = `http://localhost:${PORT}/api/login`;
//     const URLVERIFY = `http://localhost:${PORT}/api/admin`;
    try {
        const user ={
            email: "ajhonatan27@gmail.com",
            password:"123456"
        }
        const res = await notified.ejecutar(user);
        console.log(res);
        // const token = await axios.post(URLGET,user) 1º Entrega
        // console.log(token.data)
        
        // const verify = await axios.post(URLVERIFY,token.data); 1º Entrega
    } catch (error) {
        console.log(error)
    }
    //  finally {
    //     await server.desconectar()
    // }
// } catch (error) {
//     console.log('Hubo un error al conectar al servidor',error)
// }