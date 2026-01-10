import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // Validate
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // ---------------------------------------------------------
    // ADMIN EMAIL TEMPLATE (HTML)
    // ---------------------------------------------------------
    const adminTemplate = `
<!DOCTYPE html>
<html>
<body style="margin:0; padding:0; background:#f3f4f6; font-family:Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="padding:40px 0;">

        <table width="600" style="background:#ffffff; border-radius:10px; padding:40px; box-shadow:0 4px 20px rgba(0,0,0,0.08);">

          <tr>
            <td align="center" style="padding-bottom:10px;">
              <h1 style="margin:0; color:#111827; font-size:24px;">📩 New Message Received</h1>
            </td>
          </tr>

          <tr>
            <td align="center" style="color:#6b7280; font-size:14px; padding-bottom:25px;">
              A visitor submitted a message through your portfolio website.
            </td>
          </tr>

          <tr>
            <td style="color:#111827; font-size:16px; font-weight:bold; padding-bottom:10px;">
              Sender Details
            </td>
          </tr>

          <tr>
            <td style="color:#374151; font-size:15px; padding-bottom:20px; line-height:1.6;">
              <strong>Name:</strong> {{name}} <br>
              <strong>Email:</strong> {{email}} <br>
              <strong>Subject:</strong> {{subject}}
            </td>
          </tr>

          <tr>
            <td style="color:#111827; font-size:16px; font-weight:bold; padding-bottom:10px;">
              Message
            </td>
          </tr>

          <tr>
            <td style="color:#374151; font-size:15px; padding-bottom:30px; line-height:1.7; white-space:pre-line;">
              {{message}}
            </td>
          </tr>

          <tr>
            <td style="text-align:center; color:#9ca3af; font-size:12px; padding-top:20px;">
              This email was automatically generated from your portfolio contact form.
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
</body>
</html>
    `;

    // Fill admin template
    const adminHtml = adminTemplate
      .replace(/{{name}}/g, name)
      .replace(/{{email}}/g, email)
      .replace(/{{subject}}/g, subject)
      .replace(/{{message}}/g, message);

    // Email to YOU (admin)
    const adminMail = {
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `📩 New Message from ${name}`,
      html: adminHtml,
      text: `New message from ${name} (${email})\nSubject: ${subject}\n\n${message}`,
    };

    // ---------------------------------------------------------
    // USER EMAIL TEMPLATE (HTML)
    // ---------------------------------------------------------
    const userTemplate = `
<!DOCTYPE html>
<html>
<body style="margin:0; padding:0; background:#f3f4f6; font-family:Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="padding:40px 0;">

        <table width="600" style="background:#ffffff; border-radius:10px; padding:40px; box-shadow:0 4px 20px rgba(0,0,0,0.08);">

          <tr>
            <td align="center" style="padding-bottom:10px;">
              <h1 style="margin:0; color:#111827; font-size:24px;">Thank You for Contacting Me!</h1>
            </td>
          </tr>

          <tr>
            <td align="center" style="color:#6b7280; font-size:14px; padding-bottom:25px;">
              Hello {{name}}, I appreciate you reaching out.
            </td>
          </tr>

          <tr>
            <td style="color:#111827; font-size:16px; font-weight:bold; padding-bottom:10px;">
              Your Message Summary
            </td>
          </tr>

          <tr>
            <td style="color:#374151; font-size:15px; padding-bottom:20px; line-height:1.6;">
              <strong>Subject:</strong> {{subject}}
            </td>
          </tr>

          <tr>
            <td style="color:#374151; font-size:15px; padding-bottom:30px; line-height:1.7; white-space:pre-line;">
              {{message}}
            </td>
          </tr>

          <tr>
            <td style="padding-bottom:25px; color:#374151; font-size:15px;">
              I will get back to you shortly.  
              You can reply to this email if you want to add more details.
            </td>
          </tr>

          <tr>
            <td style="text-align:center; color:#6b7280; font-size:13px; padding-top:10px; line-height:1.5;">
              — Regards,<br>
              <strong style="color:#111827;">Hammad ul Haq</strong><br>
              Software Engineer • Next.js & MERN Developer
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
</body>
</html>
    `;

    // Fill user template
    const userHtml = userTemplate
      .replace(/{{name}}/g, name)
      .replace(/{{subject}}/g, subject)
      .replace(/{{message}}/g, message);

    // Email to USER
    const userMail = {
      from: `"Hammad ul Haq" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "Thank You for Contacting Me ✔",
      html: userHtml,
      text: `Hello ${name}, we received your message.\nSubject: ${subject}\n\n${message}`,
    };

    // Send both emails
    await transporter.sendMail(adminMail);
    await transporter.sendMail(userMail);

    return NextResponse.json({
      success: true,
      message: "Emails sent successfully!",
    });

  } catch (error: any) {
    console.error("Mail API Error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
