import MailSender from "./mailSender";
import { configMail } from "../../config/config";
const em= new MailSender(configMail);

export default function getEnviadorMails(){
    return em;
}