# send-email

Send a email using any major email service provider.

It's a [Nodemailer](https://nodemailer.com) wrapper. You can see support for several [well-known providers](https://nodemailer.com/smtp/well-known/)

## Install

```sh
npm install send-email
```

## Usage

```js
const { sendEmail } = require('send-email')

const config = {
    service: 'gmail',
    auth: {
        user: 'you@example.com',
        pass: '😀🔥🚀'
    }
}

let payload = {
    "to": "test@email.com",
    "subject": "sending emails using send-email",
    "text": "hello world!",
    "html": "hello <b>world</b>!",
    "from": "Myself <myself@domain.com>" // optional
}
sendEmail(payload, config)
    .then((res) => {
        console.log(res);
    })
```

## TODO
- [ ] Handle Errors properly.
- [ ] Support for Environment variables

## Author

[Ashik Nesin](http://ashiknesin.com)

## License

- **MIT** : http://opensource.org/licenses/MIT

## Contributing

Contributions are highly welcome!

## Inspiration

[Now Emails](https://emails.now.sh/)
