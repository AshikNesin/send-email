# send-email

Send a quick email using node app :)

It uses [Nodemailer](https://nodemailer.com) to send email.
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

## Author

[Ashik Nesin](http://ashiknesin.com)

## License

- **MIT** : http://opensource.org/licenses/MIT

## Contributing

Contributions are highly welcome!
