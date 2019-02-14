var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'https://mail.google.com/mail/u/0/',
  auth: {
    user: 'sibsankarb4@gmail.com',
    pass: '************'
  }
});

var mailOptions = {
  from: 'sibsankarb4@gmail.com',
  to: 'sibsankar166@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});