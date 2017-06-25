# send-email

> Easily send email using any major email service provider like AWS SES, SendGrid or Gmail

It uses [Nodemailer](https://nodemailer.com) to send email. They've support for several [well-known providers](https://nodemailer.com/smtp/well-known/)

## Install

```sh
npm install send-email
```

## Environment Variables

```
SEND_EMAIL_SERVICE_PROVIDER=SES-US-EAST-1
SEND_EMAIL_AUTH_USER=AKIAJLQWEFTYNLFGRQDIG
SEND_EMAIL_AUTH_PASS=Arfk/T8SgGvCtY7Rdq7VOsdjhjDHHOD4F8p36HEWhZl
```

## Usage

```js
const sendEmail = require('send-email')

let payload = {
    "to": "test@email.com",
    "subject": "sending emails using send-email",
    // "text": "hello world!",
    "html": "hello <b>world</b>!",
    "from": "Myself <myself@domain.com>"
}
sendEmail(payload)
    .then((res) => {
        console.log(res);
    })
```
## Note

If you are using [dotenv](https://www.npmjs.com/package/dotenv) to set environment variables dynamically then you need to call `require('dotenv').config()` before importing send-email.

```js
const dotenv = require('dotenv');
dotenv.config();

const sendEmail = require('send-email')
```

Since we are using **SMTP protocol** its little bit slower than using service provider API

## Todo
- [x] Credentials in Environment variables & check it
- [ ] SES API ?
- [ ] Handle Errors properly.

## Inspiration

[Now Emails](https://emails.now.sh/)

## License

MIT © [Ashik Nesin](https://ashiknesin.com)