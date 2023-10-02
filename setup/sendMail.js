const mailer = require('nodemailer');
const smtp = mailer.createTransport({
  host: 'mailbox',
  port: '1025',
  auth: {
    user: 'user',
    pass: 'password',
  },
});
const mailOptions = {
  from: 'amazon@id.apple.com',
  to: '0dfh3131@mail.u-tokai.ac.jp',
  subject: '【Amazon】お客様のアカウント認証に関する重要なお知らせ',
  html: 'Amazonをご利用いただき誠にありがとうございます。システムによる定期的なチェックの結果、お客様のアカウントについて再認証が必要となりました。こちらのリンクからログインしてください。: <a href="http://localhost:80/αmazon.co.jp">リンクはこちら</a>',
};
smtp.sendMail(mailOptions, function (err, info) {
  if (!err) {
    console.log('Mail success: ' + info.response);
  } else {
    console.log('Mail err', err);
  }
  smtp.close();
});
