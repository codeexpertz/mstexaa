// import nodemailer from "nodemailer";
// import { NextResponse } from "next/server";

// export const POST = async (request) => {
//   const { name, email, phone, country, message } = request.body;
//   try {
//     const transporter = nodemailer.createTransport({
//       host: "smtp.hostinger.com",
//       port: 465,
//       auth: {
//         user: "info@infolatch.com",
//         pass: process.env.SMTP_PASS,
//       },
//     });

//     // Define email options for the admin
//     const adminMailOptions = {
//       from: "Info Latch <info@infolatch.com>",
//       to: "info@infolatch.com",
//       subject: "Contact Form Submission",
//       text: `Hello,

// You have received a new message from Info Latch:

// Name: ${name}
// Email: ${email}
// Phone: ${phone}
// Country: ${country}
// Message: ${message}

// Best regards,`,
//     };

//     // Send the email to the admin
//     await transporter.sendMail(adminMailOptions);
//     return NextResponse.json({ message: "Email sent successfully!" });
//   } catch (err) {
//     console.log(err);
//     throw new Error("Failed to send Email!");
//   }
// };
