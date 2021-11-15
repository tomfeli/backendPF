import MailSender from "./mailSender.js";
import { configMail } from "../../config/config.js";
const em= new MailSender(configMail());

export function getEnviadorMails(){
    return em;
}