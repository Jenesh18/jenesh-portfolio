import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    const start = Date.now(); // Start time

    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }

    const { firstName, lastName, email, phone, message } = req.body;

    if (!firstName || !lastName || !email || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: process.env.SMTP_PORT === '465',
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    const mailOptions = {
        from: `"${firstName} ${lastName}" <${process.env.SMTP_USER}>`,
        to: process.env.SMTP_USER,
        subject: `New Contact Form Submission`,
        text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
        replyTo: email,
    };

    try {
        const emailStart = Date.now(); // Start time for email sending
        await transporter.sendMail(mailOptions);
        const emailDuration = Date.now() - emailStart; // Duration for email sending
        console.log(`Email sent in ${emailDuration}ms`);

        const totalDuration = Date.now() - start; // Total duration
        console.log(`Total API response time: ${totalDuration}ms`);

        return res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ error: 'Failed to send message' });
    }
}
