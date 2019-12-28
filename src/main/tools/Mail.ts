import * as nodemailer from 'nodemailer';

export class Mail {
    private _transporter: nodemailer.Transporter;
    constructor() {
        this._transporter = nodemailer.createTransport(
            `smtps://<username>@gmail.com:<password>@smtp.gmail.com` //créer un compte fictif au besoin
        );
    }
    sendMail(to: string, subject: string, content: string) {
        let options = {
            from: 'mediatheque@gmail.com',
            to: to,
            subject: subject,
            text: content
        };

        this._transporter.sendMail(
            options, (error, info) => {
                if (error) {
                    return console.log(`error: ${error}`);
                }
                console.log(`Message Sent ${info.response}`);
            });
    }
}