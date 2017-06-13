'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _require = require('nodemailer'),
    createTransport = _require.createTransport;

var config = {
    service: process.env.SEND_EMAIL_SERVICE_PROVIDER,
    auth: {
        user: process.env.SEND_EMAIL_AUTH_USER,
        pass: process.env.SEND_EMAIL_AUTH_PASS
    }
};

/**
 * Send email using any email delivery service
 * @param  {object} payload
 * @param  {object} config
 * @return {object}
 */
var sendEmail = exports.sendEmail = function sendEmail(payload) {
    return new Promise(function (resolve, reject) {
        var transporter = createTransport(config);
        return transporter.sendMail(payload, function (err, info) {
            if (err) {
                reject(err);
            }
            resolve(info);
        });
    });
};
exports.default = sendEmail;