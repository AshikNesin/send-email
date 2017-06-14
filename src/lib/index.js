const { createTransport } = require('nodemailer')

const config = {
    service: process.env.SEND_EMAIL_SERVICE_PROVIDER,
    secure: true, // use SSL
    auth: {
        user: process.env.SEND_EMAIL_AUTH_USER,
        pass: process.env.SEND_EMAIL_AUTH_PASS
    }
}

/**
 * Send email using any email delivery service
 * @param  {object} payload
 * @param  {object} config
 * @return {object}
 */
export const sendEmail = (payload) => {
    return new Promise(function(resolve, reject) {
        let transporter = createTransport(config);
        return transporter.sendMail(payload, function(err, info) {
            if (err) {
                reject(err)
            }
            resolve(info);
        });
    });
}
export default sendEmail;
