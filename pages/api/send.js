import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "reignskalai76@gmail.com",  // Replace with your email
      pass: "cysz oqwk hvrx igqv",   // Use an App Password if using Gmail
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "reignskalai76@gmail.com",  // Your email to receive messages
      subject: subject,
      text: `From: ${email}\n\n${message}`,
    });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Error sending email" });
  }
}
