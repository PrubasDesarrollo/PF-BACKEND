const nodemailer = require('nodemailer');
const templatePostUser = require('../templates/postUser.js');
const nodemailerSendgrid = require('nodemailer-sendgrid');
require('dotenv').config();
const { KEY_SENDGRID_EMAIL } = process.env;

const transporter = () => {
    // ! Host para hacer pruebas, el real solo deja 100 correos por dia
   // const transport = nodemailer.createTransport({
    //    host: "sandbox.smtp.mailtrap.io",
    //    port: 2525,
     //   auth: {
         //   user: "f8abc67a0c6ce7",
          //  pass: "c7d84ef0bda9ee"
       // }
   // });

    // ! Host real, restrinje correos masivos o con cantidad mayor a 100 destinatarios por dia
    const transport = nodemailer.createTransport(
    nodemailerSendgrid({
    apiKey: KEY_SENDGRID_EMAIL
         })
     )

    return transport;
};


const sendEmail = async (toEmail) => {
    const transporterConection = transporter();
    const info = await transporterConection.sendMail({
        from: '"FoodBook" <sierrabolanosmiguel@gmail.com>',
        to: `${toEmail}`,
        subject: "FoodBook!!!!!",
        html: templatePostUser
    });
    return;
};

module.exports = sendEmail;
