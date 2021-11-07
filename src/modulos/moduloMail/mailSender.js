import nodemailer from 'nodemailer'


export default class MailSender{
  constructor() {
    this.nodemailer=nodemailer.createTransport(
      {
      host: "smtp-mail.outlook.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
          user: "tomucho99@hotmail.com",
          pass: "losfis",
        },
        tls: {
          // do not fail on invalid certs
          rejectUnauthorized: false,
        },
      }
    )
  }

  async send(mail){


    let info = await this.transporter.sendMail({
      from: 'tomucho99@hotmail.com', // sender address
      to:mail, // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }
}

