# send-email

Send a email using any major email service provider.

It's a [Nodemailer](https://nodemailer.com) wrapper. You can see support for several [well-known providers](https://nodemailer.com/smtp/well-known/)

## Install

```sh
npm install send-email
```
## Environment Variables

```
SEND_EMAIL_SERVICE_PROVIDER=gmail
SEND_EMAIL_AUTH_USER=you@example.com
SEND_EMAIL_AUTH_PASS=YourPassword
```

## Usage

```js
const { sendEmail } = require('send-email')

let payload = {
    "to": "test@email.com",
    "subject": "sending emails using send-email",
    // "text": "hello world!",
    "html": "hello <b>world</b>!",
    "from": "Myself <myself@domain.com>" // optional
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

const { sendEmail } = require('send-email')
```
## TODO
- [ ] Handle Errors properly.
- [x] Support for Environment variables

## Author

[Ashik Nesin](http://ashiknesin.com)

## License

- **MIT** : http://opensource.org/licenses/MIT

## Contributing

Contributions are highly welcome!

## Inspiration

[Now Emails](https://emails.now.sh/)
