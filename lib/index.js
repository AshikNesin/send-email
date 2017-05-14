'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _require = require('nodemailer'),
    createTransport = _require.createTransport;
/**
 * Send email using any email delivery service
 * @param  {object} payload
 * @param  {object} config
 * @return {object}
 */


var sendEmail = exports.sendEmail = function sendEmail(payload, config) {
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