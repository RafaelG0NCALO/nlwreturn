import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from './../mail-adapter';


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "eba94b769d8abd",
      pass: "73ee2b65881b63"
    }
  });

export class NodemailerMailAdapter implements MailAdapter{
    async sendMail({subject, body}: SendMailData) {
         transport.sendMail({
             from:'Feedback<oi@feedget.com',
             to: 'Rafael Gonçalo <rafael.gonalo@gmail.com>',
             subject,
             html:body,
         })
    };
}