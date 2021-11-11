import nodemailer from 'nodemailer'


export default class MailSender{
  constructor(config) {
    this.transporter=nodemailer.createTransport(
      config
    )
  }
  async sendFile(to,subject,text,file){
    let info = await this.transporter.sendMail({
      from: 'tomucho99@hotmail.com', // sender address
      to:to, // list of receivers
      subject: subject, // Subject line
      text: text, // plain text body
//      html: "<b>Hello world?</b>", // html body
      attachments:[
        {
          filename:file["filename"],
          path:file["path"]
        }
      ]
    });
    console.log("Message sent: %s", info.messageId);
  }

  async send(to,subject,text){


    let info = await this.transporter.sendMail({
      from: 'tomucho99@hotmail.com', // sender address
      to:to, // list of receivers
      subject: subject, // Subject line
      text: text, // plain text body
//      html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
  }
}

