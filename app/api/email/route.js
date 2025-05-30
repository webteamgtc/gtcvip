import { NextResponse } from 'next/server';
import { transporter, mailOptions } from '../../../config/nodemailer';

export async function POST(req) {
  const reqBody = await req.json();
  const mailData = {
    from: 'service@mx.gtcmail.com',
    to: reqBody.email,
    subject: '🎉You are In! Welcome to GTC VIP',
    html: `
   <!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Your Live Trading Account is Now Active</title>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap" rel="stylesheet">
</head>
<body style="margin: 0; padding: 0; background-color: #F7F7F7; font-family: 'Outfit', Arial, sans-serif; color: #1e2158; text-align: left; line-height: 22px;">
<table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" style="border-spacing: 0; width: 100%;">
    <tr>
        <td align="center" bgcolor="#F7F7F7">
            <div class="container" style="max-width: 650px; margin: 0 auto; background-color: #192055; padding: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="border-radius: 36px; padding: 20px 0px; background-color: #fff; width: 100%;">
                    <tr>
                        <td class="header" style="padding: 20px; text-align: center;">
                            <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/email-test.png" alt="GTC Global Capital Trade Logo" style="max-width: 165px; height: auto;">
                        </td>
                    </tr>
                   
                    <tr>
                          <td class="content" style="font-family: Arial, sans-serif; color: #192055; font-size: 15px; line-height: 1.6; padding: 0px 0px;">
                            <h3 style="font-size: 16px; color: #192055; margin-bottom: 16px; padding: 0px 20px;">
                              Dear  ${reqBody.firstName || ''},
                            </h3>
                            <p style="margin-bottom: 16px; padding: 0px 20px;">
                              Thank you for signing up with <b style="color: #b68756;">GTC VIP</b> – we’re thrilled to have you on board!
                            </p>
                             <p style="margin-bottom: 16px; padding: 0px 20px;">
                              User Name: <b style="color: #b68756;">${reqBody?.userName}</b>
                            </p>
                              <p style="margin-bottom: 16px; padding: 0px 20px;">
                              Password: <b style="color: #b68756;">${reqBody?.password}</b>
                            </p>
                            <p style="margin-bottom: 16px; padding: 0px 20px;">
                              You're now one step closer to experiencing a smarter, faster, and more powerful way to trade. Our team is reviewing your submission and will get back to you shortly with the next steps.
                            </p>
                            <p style="margin-bottom: 16px; padding: 0px 20px;">
                              In the meantime, here’s what you can expect as a <a href="https://my.gtcvip.com/v2/app/login" style="color: blue; text-decoration:underline;"><b style="color: #b68756;">GTC VIP</b></a> member:
                            </p>
                            <ul style="padding: 0px 40px 0px 40px; margin-bottom: 16px;">
                              <li style="margin-bottom: 10px;">💡 VIP trading tips straight from the experts</li>
                              <li style="margin-bottom: 10px;">🚀 Special trading signals to help you make smarter moves</li>
                              <li style="margin-bottom: 10px;">💬 Personal support whenever you need it (just shoot us a message)</li>
                            </ul>
                            <p style="margin-bottom: 16px; padding: 0px 20px;">
                              🔒 Your information is safe with us. We respect your privacy and are committed to protecting your data.
                            </p>
                            <p style="margin-bottom: 16px; padding: 0px 20px;">
                              Stay tuned – your trading evolution starts now.
                            </p>
                            <p style="padding: 0px 20px; margin-bottom: 0;">
                              Best regards,<br/>
                              <strong style="color: #192055;">Your GTC Family</strong>
                            </p>
                          </td>
                        </tr>

                    
                    <tr>
                      <td class="footer" style="padding: 20px 20px; font-size: 10px; color: #000; background-color: #f7f7f736; border-radius: 0 0 36px 36px; text-align: left;">
                            <div class="social-icons" style="padding-bottom: 10px; text-align: center;">
                                <a href="https://www.facebook.com/gtcfxofficial" style="text-decoration: none;" target="_blank">
                                    <img alt="Facebook" src="https://d3k81ch9hvuctc.cloudfront.net/assets/email/buttons/default/facebook_96.png" style="width: 24px; height: 24px; margin: 0 5px;">
                                </a>
                                <a href="https://twitter.com/GTC_fx" style="text-decoration: none;" target="_blank">
                                    <img alt="Twitter" src="https://d3k81ch9hvuctc.cloudfront.net/assets/email/buttons/default/twitter_96.png" style="width: 24px; height: 24px; margin: 0 5px;">
                                </a>
                                <a href="https://linkedin.com/company/gtcfx-official" style="text-decoration: none;" target="_blank">
                                    <img alt="LinkedIn" src="https://d3k81ch9hvuctc.cloudfront.net/assets/email/buttons/default/linkedin_96.png" style="width: 24px; height: 24px; margin: 0 5px;">
                                </a>
                                <a href="https://www.youtube.com/channel/UCnKWakjm1b9Bm63xgwNFXHA" style="text-decoration: none;" target="_blank">
                                    <img alt="YouTube" src="https://d3k81ch9hvuctc.cloudfront.net/assets/email/buttons/default/youtube_96.png" style="width: 24px; height: 24px; margin: 0 5px;">
                                </a>
                                <a href="https://www.instagram.com/gtcfxofficial" style="text-decoration: none;" target="_blank">
                                    <img alt="Instagram" src="https://d3k81ch9hvuctc.cloudfront.net/assets/email/buttons/default/instagram_96.png" style="width: 24px; height: 24px; margin: 0 5px;">
                                </a>
                                <a href="https://www.tiktok.com/@gtcgroup_official" style="text-decoration: none;" target="_blank">
                                    <img alt="TikTok" src="https://d3k81ch9hvuctc.cloudfront.net/assets/email/buttons/default/tiktok_96.png" style="width: 24px; height: 24px; margin: 0 5px;">
                                </a>
                            </div>
                            <p>
                                Company name: GTC FX / Website: www.gtcfx.com / Email:
                                support@gtcfx.com
                              </p>
                              <p>
                                Disclaimers: The information in this email is for general
                                purposes only and does not constitute personal financial
                                advice. Please assess the relevance of this information to
                                your financial goals and situation before making any
                                financial decisions.
                              </p>
                              <p>
                                Note: Our products and services are not available in
                                restricted countries.
                              </p>
                        </td>
                    </tr>
                </table>
            </div>
        </td>
    </tr>
</table>
</body>
</html>
    `
  };
  try {
    await transporter.sendMail(mailData);

    return NextResponse.json({ message: "Success", test: reqBody?.email }, { status: 200 })
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}