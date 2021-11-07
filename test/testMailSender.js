import MailSender from "./mailSender.js";
const mailS = new MailSender();
let to=prompt('Ingrese a quien desea enviar el mail:');
mailS.send(to).catch(console.error); 




