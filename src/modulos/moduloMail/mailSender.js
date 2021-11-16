import nodemailer from 'nodemailer'
import {PATH_FOR_REPORTS} from "../../config/config.js"

export default class MailSender{
  constructor(config) {
    this.transporter=nodemailer.createTransport(
      config
    )
  }
  async sendFile(to,subject,text,filename){
    let info = await this.transporter.sendMail({
      from: 'tomucho99@hotmail.com', 
      to:to, 
      subject: subject, 
      text: text, 
      attachments:[
        {
          filename:filename,
          path:`${PATH_FOR_REPORTS}/${filename}`
        }
      ]
    });
    console.log("Mail enviado con exito a: %s", to);
  }

  async send(to,subject,text){


    let info = await this.transporter.sendMail({
      from: 'tomucho99@hotmail.com', 
      to:to, 
      subject: subject, 
      text: text, 
    });

    console.log("Mail enviado con exito a: %s", to);
  }
}

