import Sendgrid from '@sendgrid/mail';

Sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  const { name, email, message } = req.body;

  try {
    // console.log("REQ.BODY", req.body);
    await Sendgrid.send({
      to: 'cleber@cgbordin.com', // Your email where you'll receive emails
      from: 'cleber@cgbordin.com', // your website email address here
      subject: '[cgbordin.com] - Hi! Message from contact form.',
      text: `${name} - ${email} - ${message}`,
      html: `
      <p>${name} - ${email}</p>
      <p>${message}</p>
      `,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.json({ message: 'Message sent successfully!' });
}

export default sendEmail;
