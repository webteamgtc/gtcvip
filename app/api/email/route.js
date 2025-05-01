import { NextResponse } from 'next/server';
import { transporter, mailOptions } from '../../../config/nodemailer';
const CONTACT_MESSAGE_FIELDS = {
  first_name: "First Name",
  last_name: "Last Name",
  email: "Email",
  country: "Country",
  gender: "Gender",
  terms: "Accepted Terms and Conditions",
  subject: "Subject",
  message: "Message",
};

const generateEmailContent = (data) => {
  console.log({ data })
  const stringData = Object.entries(data).reduce(
    (str, [key, val]) =>
      (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${val} \n \n`),
    ""
  );
  const htmlData = Object.entries(data).reduce((str, [key, val]) => {
    return (str += `<h3 class="form-heading" align="left">${CONTACT_MESSAGE_FIELDS[key]}</h3><p class="form-answer" align="left">${val}</p>`);
  }, "");

  return {
    // text: stringData,
    html: `
      <html>  
  <head>    
    <meta charset="utf-8"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <title>
      We&rsquo;ve extended the video feedback submission date 📅
    </title>
  </head>
  <body>    
    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-spacing: 0; width: 100%;">      
      <tr>        
        <td align="center" bgcolor="#F7F7F7">          
          <div class="container" style="max-width: 600px; margin: 0 auto; background-color: #192055; padding: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">            
            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-radius: 36px; background-color: #fff; width: 100%;">              
              <tr>                
                <td class="header" style="padding: 20px; text-align: center;">                  
                  <img alt="GTC Global Capital Trade Logo" src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/email-test.png" style="max-width: 165px; height: auto;"/>
                </td>
              </tr>
             <tr>
  <td class="content" style="font-family: Arial, sans-serif; color: #192055; font-size: 15px; line-height: 1.6; padding: 0px 0px;">
    <h3 style="font-size: 16px; color: #192055; margin-bottom: 16px; padding: 0px 20px;">
      Hi {% if first_name %}{{ first_name }}{% else %}Valued Client{% endif %},
    </h3>
    <p style="margin-bottom: 16px; padding: 0px 20px;">
      Thank you for signing up with <b style="color: #b68756;">GTC VIP</b> – we’re thrilled to have you on board!
    </p>
    <p style="margin-bottom: 16px; padding: 0px 20px;">
      You're now one step closer to experiencing a smarter, faster, and more powerful way to trade. Our team is reviewing your submission and will get back to you shortly with the next steps.
    </p>
    <p style="margin-bottom: 16px; padding: 0px 20px;">
      In the meantime, here’s what you can expect as a <b style="color: #b68756;">GTC VIP</b> member:
    </p>
    <ul style="margin-bottom: 16px; padding: 0px 40px;">
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
    <p style="margin-bottom: 0; padding: 0px 20px;">
      Best regards,<br/>
      <strong style="color: #192055;">Your GTC Family</strong>
    </p>
  </td>
</tr>

              <tr>                
                <td class="footer" style="padding: 16px 20px; font-size: 10px; color: #000; background-color: #f7f7f736; border-radius: 0 0 36px 36px; text-align: left;">                  
                  <div class="social-icons" style="padding-bottom: 10px; text-align: center;">                    
                    <a href="https://www.facebook.com/gtcfxofficial" style="text-decoration: none;" target="_blank">
                      <img alt="Facebook" src="https://d3k81ch9hvuctc.cloudfront.net/assets/email/buttons/default/facebook_96.png" style="width: 24px; height: 24px; margin: 0 5px;"/>
</a>
                    <a href="https://twitter.com/GTC_fx" style="text-decoration: none;" target="_blank">
                      <img alt="Twitter" src="https://d3k81ch9hvuctc.cloudfront.net/assets/email/buttons/default/twitter_96.png" style="width: 24px; height: 24px; margin: 0 5px;"/>
</a>
                    <a href="https://linkedin.com/company/gtcfx-official" style="text-decoration: none;" target="_blank">
                      <img alt="LinkedIn" src="https://d3k81ch9hvuctc.cloudfront.net/assets/email/buttons/default/linkedin_96.png" style="width: 24px; height: 24px; margin: 0 5px;"/>
</a>
                    <a href="https://www.youtube.com/channel/UCnKWakjm1b9Bm63xgwNFXHA" style="text-decoration: none;" target="_blank">
                      <img alt="YouTube" src="https://d3k81ch9hvuctc.cloudfront.net/assets/email/buttons/default/youtube_96.png" style="width: 24px; height: 24px; margin: 0 5px;"/>
</a>
                    <a href="https://www.instagram.com/gtcfxofficial" style="text-decoration: none;" target="_blank">
                      <img alt="Instagram" src="https://d3k81ch9hvuctc.cloudfront.net/assets/email/buttons/default/instagram_96.png" style="width: 24px; height: 24px; margin: 0 5px;"/>
</a>
                    <a href="https://www.tiktok.com/@gtcgroup_official" style="text-decoration: none;" target="_blank">
                      <img alt="TikTok" src="https://d3k81ch9hvuctc.cloudfront.net/assets/email/buttons/default/tiktok_96.png" style="width: 24px; height: 24px; margin: 0 5px;"/>
</a>
                  </div>
                  <p>
                    Company name: GTC FX / Website: www.gtcfx.com / Email: support@gtcfx.com
                  </p>
                  <p style="line-height: 16px;">
                    Disclaimers: The information in this email is for general purposes only and does not constitute personal financial advice. Please assess the relevance of this information to your own financial goals and situation. Investing in contract for difference products carries significant risks and may not be suitable for all investors. Losses may exceed the initial deposit. You do not have ownership rights to the underlying assets of the contract. We advise seeking professional guidance to fully understand the risks before trading. Please review our user terms, risk warnings, privacy policy, and other relevant documents before making financial decisions.
                                    Note that our products and services are not available in restricted countries.
                  </p>
                  <p>
                    Note: Our products and services are not available in
                                    restricted countries.
                  </p>
                  <p style="text-align:center; font-size: 12px;">
                    {% unsubscribe %}
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
      
      `,
  };
};



export async function POST(req) {
  const reqBody = await req.json();
  try {
    await transporter.sendMail(mailData);

    return NextResponse.json({ message: "Success", test: reqBody?.email }, { status: 200 })
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}