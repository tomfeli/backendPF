import MailSender from "./mailSender.js";
const mailS = new MailSender();
let to="fiszsontom@gmail.com";
mailS.send(to).catch(console.error); 




