const {createTransport} = require('nodemailer');
const checkEnv = require('check-env');

module.exports = function (payload) {
  // Makes sure that all required environment variables are set.
	checkEnv(['SEND_EMAIL_SERVICE_PROVIDER', 'SEND_EMAIL_AUTH_USER', 'SEND_EMAIL_AUTH_PASS']);

  // Config for NodeMailer
	const config = {
		service: process.env.SEND_EMAIL_SERVICE_PROVIDER,
		secure: true, // Use SSL
		auth: {
			user: process.env.SEND_EMAIL_AUTH_USER,
			pass: process.env.SEND_EMAIL_AUTH_PASS
		}
	};

	return new Promise((resolve, reject) => {
		const transporter = createTransport(config);
		return transporter.sendMail(payload, (err, info) => {
			if (err) {
				reject(err);
			}
			resolve(info);
		});
	});
};
