import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { after } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ success: false, error: "All fields are required." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // --- 1. INTERACTIVE ADMIN TEMPLATE ---
    // Includes a "Reply Now" button and a stylized lead card
    const adminHtml = `
      <div style="background-color:#EFF0F4; padding:30px; font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
        <table style="max-width:600px; margin:0 auto; background:#ffffff; border-radius:24px; border:1px solid #e0e0e0; box-shadow: 12px 12px 24px #bebebe;">
          <tr>
            <td style="padding:40px; text-align:center;">
              <div style="display:inline-block; padding:12px 24px; background:#f59e0b; color:white; border-radius:50px; font-weight:bold; font-size:12px; margin-bottom:20px; text-transform:uppercase; letter-spacing:1px;">New Portfolio Lead</div>
              <h1 style="color:#111827; margin:0; font-size:28px;">${name} wants to connect!</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:0 40px 30px 40px;">
              <div style="background:#f9fafb; border-radius:16px; padding:25px; border:1px solid #f3f4f6;">
                <p style="margin:0 0 10px 0; color:#6b7280; font-size:14px;">SUBJECT</p>
                <p style="margin:0 0 20px 0; font-weight:bold; color:#111827; font-size:18px;">${subject}</p>
                <p style="margin:0 0 10px 0; color:#6b7280; font-size:14px;">MESSAGE</p>
                <p style="margin:0; color:#374151; line-height:1.6; white-space:pre-line;">${message}</p>
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding:0 40px 40px 40px; text-align:center;">
              <a href="mailto:${email}" style="display:inline-block; background:#111827; color:#ffffff; padding:16px 32px; border-radius:12px; text-decoration:none; font-weight:bold; font-size:16px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">Reply to ${name} Now</a>
            </td>
          </tr>
        </table>
      </div>`;

    // --- 2. INTERACTIVE USER TEMPLATE ---
    // Includes social links and a "What's Next" section
    const userHtml = `
      <div style="background-color:#EFF0F4; padding:30px; font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
        <table style="max-width:600px; margin:0 auto; background:#ffffff; border-radius:24px; box-shadow: 12px 12px 24px #bebebe; border:1px solid #e0e0e0; overflow:hidden;">
          <tr style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);">
            <td style="padding:40px; text-align:center; color:white;">
              <h1 style="margin:0; font-size:32px;">Message Received!</h1>
              <p style="margin-top:10px; opacity:0.9; font-size:18px;">Thanks for reaching out, ${name}.</p>
            </td>
          </tr>
          <tr>
            <td style="padding:40px; color:#374151; line-height:1.8;">
              <p style="font-size:16px;">I've received your inquiry regarding <strong>"${subject}"</strong>. My AI agent has notified me, and I'll personally review your message shortly.</p>
              
              <div style="margin:30px 0; border-left:4px solid #f59e0b; padding-left:20px; font-style:italic; color:#6b7280;">
                "Expected Response Time: Within 24 Hours"
              </div>

              <p>While you wait, let's connect on these platforms:</p>
              <div style="text-align:center; margin:30px 0;">
                <a href="https://github.com/HAMMADKHANLODHI" style="text-decoration:none; margin:0 10px;"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" width="30" height="30" alt="GitHub"></a>
                <a href="https://www.linkedin.com/in/hammad-ul-haq-07b62a357/" style="text-decoration:none; margin:0 10px;"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="30" height="30" alt="LinkedIn"></a>
                <a href="https://wa.me/923110599159" style="text-decoration:none; margin:0 10px;"><img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" width="30" height="30" alt="WhatsApp"></a>
              </div>
            </td>
          </tr>
          <tr style="background:#f9fafb; border-top:1px solid #f3f4f6;">
            <td style="padding:30px; text-align:center;">
              <p style="margin:0; font-weight:bold; color:#111827;">Hammad Ul Haq</p>
              <p style="margin:5px 0 0 0; color:#6b7280; font-size:14px;">Software Engineer | MERN & Next.js Specialist</p>
              <p style="margin:10px 0 0 0; color:#9ca3af; font-size:12px;">Lahore, Pakistan • <a href="https://hammadulhaq.dev" style="color:#f59e0b; text-decoration:none;">Portfolio</a></p>
            </td>
          </tr>
        </table>
      </div>`;

    const adminMail = {
      from: `"Portfolio Alerts" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `🔥 New Lead: ${name} - ${subject}`,
      html: adminHtml,
    };

    const userMail = {
      from: `"Hammad Ul Haq" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `Re: ${subject} - I've received your message!`,
      html: userHtml,
    };

    after(async () => {
      try {
        await transporter.sendMail(adminMail);
        await transporter.sendMail(userMail);
      } catch (err) {
        console.error("Background Mail Error:", err);
      }
    });

    return NextResponse.json({ success: true, message: "Emails queued!" });

  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}