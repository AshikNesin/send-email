const { createTransport } = require('nodemailer')
/**
 * Send email using any email delivery service
 * @param  {object} payload
 * @param  {object} config
 * @return {object}
 */
export const sendEmail = (payload, config) => {
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
