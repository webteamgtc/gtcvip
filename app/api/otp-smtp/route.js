import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import otpGenerator from 'otp-generator';

export async function POST(req) {
  const { email } = await req.json();
  const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false, digits: true, lowerCaseAlphabets: false });
  const transporter = nodemailer.createTransport({
    host: 'smtp.sendgrid.net',
    port: 465,
    secure: true,
    auth: {
      user: 'apikey',
      pass: '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'
    }
  });
  const mailData = {
    from: '"GTCFX" <no-reply@gtcfxmail.com>',
    to: email,
    subject: "Your GTCFX OTP",
    text: `Your OTP is ${otp}`,
    html: `
        <!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head>
<!--[if gte mso 15]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
<meta charset="UTF-8"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>*|MC:SUBJECT|*</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i,900,900i"/><style>          img{-ms-interpolation-mode:bicubic;} 
          table, td{mso-table-lspace:0pt; mso-table-rspace:0pt;} 
          .mceStandardButton, .mceStandardButton td, .mceStandardButton td a{mso-hide:all !important;} 
          p, a, li, td, blockquote{mso-line-height-rule:exactly;} 
          p, a, li, td, body, table, blockquote{-ms-text-size-adjust:100%; -webkit-text-size-adjust:100%;} 
          @media only screen and (max-width: 480px){
            body, table, td, p, a, li, blockquote{-webkit-text-size-adjust:none !important;} 
          }
          .mcnPreviewText{display: none !important;} 
          .bodyCell{margin:0 auto; padding:0; width:100%;}
          .ExternalClass, .ExternalClass p, .ExternalClass td, .ExternalClass div, .ExternalClass span, .ExternalClass font{line-height:100%;} 
          .ReadMsgBody{width:100%;} .ExternalClass{width:100%;} 
          a[x-apple-data-detectors]{color:inherit !important; text-decoration:none !important; font-size:inherit !important; font-family:inherit !important; font-weight:inherit !important; line-height:inherit !important;} 
            body{height:100%; margin:0; padding:0; width:100%; background: #ffffff;}
            p{margin:0; padding:0;} 
            table{border-collapse:collapse;} 
            td, p, a{word-break:break-word;} 
            h1, h2, h3, h4, h5, h6{display:block; margin:0; padding:0;} 
            img, a img{border:0; height:auto; outline:none; text-decoration:none;} 
            a[href^="tel"], a[href^="sms"]{color:inherit; cursor:default; text-decoration:none;} 
            li p {margin: 0 !important;}
            .ProseMirror a {
                pointer-events: none;
            }
            @media only screen and (max-width: 480px){
                body{width:100% !important; min-width:100% !important; } 
                body.mobile-native {
                    -webkit-user-select: none; user-select: none; transition: transform 0.2s ease-in; transform-origin: top center;
                }
                body.mobile-native.selection-allowed a, body.mobile-native.selection-allowed .ProseMirror {
                    user-select: auto;
                    -webkit-user-select: auto;
                }
                colgroup{display: none;}
                img{height: auto !important;}
                .mceWidthContainer{max-width: 660px !important;}
                .mceColumn{display: block !important; width: 100% !important;}
                .mceColumn-forceSpan{display: table-cell !important; width: auto !important;}
                .mceColumn-forceSpan .mceButton a{min-width:0 !important;}
                .mceBlockContainer{padding-right:16px !important; padding-left:16px !important;} 
                .mceBlockContainerE2E{padding-right:0px; padding-left:0px;} 
                .mceSpacing-24{padding-right:16px !important; padding-left:16px !important;}
                .mceImage, .mceLogo{width: 100% !important; height: auto !important;} 
                .mceFooterSection .mceText, .mceFooterSection .mceText p{font-size: 16px !important; line-height: 140% !important;}
                .mceText, .mceText p{font-size: 16px !important; line-height: 140% !important;}
                h1{font-size: 30px !important; line-height: 120% !important;}
                h2{font-size: 26px !important; line-height: 120% !important;}
                h3{font-size: 20px !important; line-height: 125% !important;}
                h4{font-size: 18px !important; line-height: 125% !important;}
            }
            @media only screen and (max-width: 640px){
                .mceClusterLayout td{padding: 4px !important;} 
            }
            div[contenteditable="true"] {outline: 0;}
            .ProseMirror .empty-node, .ProseMirror:empty {position: relative;}
            .ProseMirror .empty-node::before, .ProseMirror:empty::before {
                position: absolute;
                left: 0;
                right: 0;
                color: rgba(0,0,0,0.2);
                cursor: text;
            }
            .ProseMirror .empty-node:hover::before, .ProseMirror:empty:hover::before {
                color: rgba(0,0,0,0.3);
            }
            .ProseMirror h1.empty-node:only-child::before,
            .ProseMirror h2.empty-node:only-child::before,
            .ProseMirror h3.empty-node:only-child::before,
            .ProseMirror h4.empty-node:only-child::before {
                content: 'Heading';
            }
            .ProseMirror p.empty-node:only-child::before, .ProseMirror:empty::before {
                content: 'Start typing...';
            }
            a .ProseMirror p.empty-node::before, a .ProseMirror:empty::before {
                content: '';
            }
            .mceText, .ProseMirror {
                white-space: pre-wrap;
            }
body, #bodyTable { background-color: rgb(244, 244, 244); }.mceText, .mceLabel { font-family: "Helvetica Neue", Helvetica, Arial, Verdana, sans-serif; }.mceText, .mceLabel { color: rgb(0, 0, 0); }.mceText p { margin-bottom: 0px; }.mceText label { margin-bottom: 0px; }.mceText input { margin-bottom: 0px; }.mceSpacing-12 .mceInput + .mceErrorMessage { margin-top: -6px; }.mceText p { margin-bottom: 0px; }.mceText label { margin-bottom: 0px; }.mceText input { margin-bottom: 0px; }.mceSpacing-24 .mceInput + .mceErrorMessage { margin-top: -12px; }.mceText p { margin-bottom: 0px; }.mceText label { margin-bottom: 0px; }.mceText input { margin-bottom: 0px; }.mceSpacing-60 .mceInput + .mceErrorMessage { margin-top: -30px; }.mceInput { background-color: transparent; border: 2px solid rgb(208, 208, 208); width: 60%; color: rgb(77, 77, 77); display: block; }.mceInput[type="radio"], .mceInput[type="checkbox"] { float: left; margin-right: 12px; display: inline; width: auto !important; }.mceLabel > .mceInput { margin-bottom: 0px; margin-top: 2px; }.mceLabel { display: block; }.mceText p { color: rgb(0, 0, 0); font-family: "Helvetica Neue", Helvetica, Arial, Verdana, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.5; text-align: center; letter-spacing: 0px; direction: ltr; }.mceText a { color: rgb(0, 0, 0); font-style: normal; font-weight: normal; text-decoration: underline; direction: ltr; }
@media only screen and (max-width: 480px) {
            .mceText p { font-size: 16px !important; line-height: 1.5 !important; }
          }
@media only screen and (max-width: 480px) {
            .mceBlockContainer { padding-left: 16px !important; padding-right: 16px !important; }
          }
#dataBlockId-9 p, #dataBlockId-9 h1, #dataBlockId-9 h2, #dataBlockId-9 h3, #dataBlockId-9 h4, #dataBlockId-9 ul { text-align: center; }
@media only screen and (max-width: 480px) {
        .mobileClass-9 {padding-left: 12 !important;padding-top: 0 !important;padding-right: 12 !important;}.mobileClass-9 {padding-left: 12 !important;padding-top: 0 !important;padding-right: 12 !important;}.mobileClass-9 {padding-left: 12 !important;padding-top: 0 !important;padding-right: 12 !important;}.mobileClass-9 {padding-left: 12 !important;padding-top: 0 !important;padding-right: 12 !important;}
      }</style></head>
<body>
<!--*|IF:MC_PREVIEW_TEXT|*-->
<!--[if !gte mso 9]><!----><span class="mcnPreviewText" style="display:none; font-size:0px; line-height:0px; max-height:0px; max-width:0px; opacity:0; overflow:hidden; visibility:hidden; mso-hide:all;">*|MC_PREVIEW_TEXT|*</span><!--<![endif]-->
<!--*|END:IF|*-->
<center>
<table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable" style="background-color: rgb(244, 244, 244);">
<tbody><tr>
<td class="bodyCell" align="center" valign="top">
<table id="root" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody data-block-id="13" class="mceWrapper"><tr><td align="center" valign="top" class="mceWrapperOuter"><!--[if (gte mso 9)|(IE)]><table align="center" border="0" cellspacing="0" cellpadding="0" width="660" style="width:660px;"><tr><td><![endif]--><table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:660px" role="presentation"><tbody><tr><td style="background-color:#ffffff;background-position:center;background-repeat:no-repeat;background-size:cover" class="mceWrapperInner" valign="top"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation" data-block-id="12"><tbody><tr class="mceRow"><td style="background-position:center;background-repeat:no-repeat;background-size:cover" valign="top"><table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation"><tbody><tr><td style="padding-top:0;padding-bottom:0" class="mceColumn" data-block-id="-13" valign="top" colspan="12" width="100%"><table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation"><tbody><tr><td style="padding-top:12px;padding-bottom:12px;padding-right:0;padding-left:0" class="mceBlockContainerE2E" align="full" valign="top"><img data-block-id="4" width="660" height="auto" style="width:660px;height:auto;max-width:7921px !important;display:block" alt="" src="https://mcusercontent.com/7eb08bbd4cb544fe0debea98e/images/82617110-286e-0490-2810-6164bdd70842.png" role="presentation" class="imageDropZone mceImage"/></td></tr><tr><td style="padding-top:12px;padding-bottom:12px;padding-right:24px;padding-left:24px" class="mceBlockContainer" valign="top"><div data-block-id="15" class="mceText" id="dataBlockId-15" style="width:100%"><p style="line-height: 2; text-align: justify;"><strong><span style="color:#19446e;"><span style="font-size: 14px"><span style="font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif">Dear Valued Client,</span></span></span></strong></p><p style="text-align: left;"><br/></p><p style="text-align: left;"><span style="color:#19446e;"><span style="font-size: 14px"><span style="font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif">Thank you for choosing GTCFX. </span></span></span></p><p style="text-align: left;"><br/></p><p style="text-align: left;"><span style="color:#19446e;"><span style="font-size: 14px"><span style="font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif">Please use the following One-Time Password (OTP) to complete your sign-up process.<br/><br/></span></span></span><strong><span style="color:#19446e;"><span style="font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif">${otp}</span></span></strong><span style="color:#19446e;"><span style="font-size: 14px"><span style="font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif"><br/><br/></span></span></span></p><p style="text-align: left;" class="last-child"><strong><span style="color:#19446e;"><span style="font-size: 14px"><span style="font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif">Warm regards,<br/>Customer Support | GTCFX</span></span></span></strong></p></div></td></tr><tr><td style="background-color:transparent;padding-top:20px;padding-bottom:20px;padding-right:24px;padding-left:24px" class="mceBlockContainer" valign="top"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:transparent" role="presentation" data-block-id="46"><tbody><tr><td style="min-width:100%;border-top:2px solid #19446e" valign="top"></td></tr></tbody></table></td></tr><tr><td style="padding-top:12px;padding-bottom:12px;padding-right:0;padding-left:0" class="mceLayoutContainer" valign="top"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation" data-block-id="70"><tbody><tr class="mceRow"><td style="background-position:center;background-repeat:no-repeat;background-size:cover" valign="top"><table border="0" cellpadding="0" cellspacing="24" width="100%" role="presentation"><tbody><tr><td style="margin-bottom:24px" class="mceColumn" data-block-id="-12" valign="top" colspan="12" width="100%"><table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation"><tbody><tr><td align="center" valign="top"><table border="0" cellpadding="0" cellspacing="0" width="" role="presentation" class="mceClusterLayout" data-block-id="-11"><tbody><tr><td style="padding-left:30px;padding-top:0;padding-right:30px" data-breakpoint="9" valign="top" class="mobileClass-9"><a href="https://www.facebook.com/gtcfxofficial" style="display:block" target="_blank" data-block-id="-7"><img width="24" height="auto" style="border:0;width:24px;height:auto;max-width:40px !important;display:block" alt="Facebook icon" src="https://cdn-images.mailchimp.com/icons/social-block-v3/block-icons-v3/facebook-filled-color-40.png" class="mceImage"/></a></td><td style="padding-left:30px;padding-top:0;padding-right:30px" data-breakpoint="9" valign="top" class="mobileClass-9"><a href="https://www.instagram.com/gtc.forex/" style="display:block" target="_blank" data-block-id="-8"><img width="24" height="auto" style="border:0;width:24px;height:auto;max-width:40px !important;display:block" alt="Instagram icon" src="https://cdn-images.mailchimp.com/icons/social-block-v3/block-icons-v3/instagram-filled-color-40.png" class="mceImage"/></a></td><td style="padding-left:30px;padding-top:0;padding-right:30px" data-breakpoint="9" valign="top" class="mobileClass-9"><a href="https://twitter.com/GTC_fx" style="display:block" target="_blank" data-block-id="-9"><img width="24" height="auto" style="border:0;width:24px;height:auto;max-width:40px !important;display:block" alt="Twitter icon" src="https://cdn-images.mailchimp.com/icons/social-block-v3/block-icons-v3/twitter-filled-color-40.png" class="mceImage"/></a></td><td style="padding-left:30px;padding-top:0;padding-right:30px" data-breakpoint="9" valign="top" class="mobileClass-9"><a href="https://www.linkedin.com/company/69742739" style="display:block" target="_blank" data-block-id="-10"><img width="24" height="auto" style="border:0;width:24px;height:auto;max-width:40px !important;display:block" alt="LinkedIn icon" src="https://cdn-images.mailchimp.com/icons/social-block-v3/block-icons-v3/linkedin-filled-color-40.png" class="mceImage"/></a></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td style="background-color:#f9c617;padding-top:12px;padding-bottom:12px;padding-right:0;padding-left:0" class="mceLayoutContainer" valign="top"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation" data-block-id="33" id="section_e8113ba852a0e64cd7a733aea17e4e98" class="mceLayout"><tbody><tr class="mceRow"><td style="background-position:center;background-repeat:no-repeat;background-size:cover" valign="top"><table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation"><tbody><tr><td class="mceColumn" data-block-id="-14" valign="top" colspan="12" width="100%"><table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation"><tbody><tr><td align="center" valign="top"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation" data-block-id="-5"><tbody><tr class="mceRow"><td style="background-position:center;background-repeat:no-repeat;background-size:cover" valign="top"><table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation"><tbody><tr><td class="mceColumn" data-block-id="-15" valign="top" colspan="12" width="100%"><table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation"><tbody><tr><td valign="top"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation" data-block-id="38"><tbody><tr class="mceRow"><td style="background-position:center;background-repeat:no-repeat;background-size:cover;padding-top:0px;padding-bottom:0px" valign="top"><table border="0" cellpadding="0" cellspacing="24" width="100%" style="table-layout:fixed" role="presentation"><colgroup><col span="1" width="8.333333333333332%"/><col span="1" width="8.333333333333332%"/><col span="1" width="8.333333333333332%"/><col span="1" width="8.333333333333332%"/><col span="1" width="8.333333333333332%"/><col span="1" width="8.333333333333332%"/><col span="1" width="8.333333333333332%"/><col span="1" width="8.333333333333332%"/><col span="1" width="8.333333333333332%"/><col span="1" width="8.333333333333332%"/><col span="1" width="8.333333333333332%"/><col span="1" width="8.333333333333332%"/></colgroup><tbody><tr><td style="padding-top:0;padding-bottom:0" class="mceColumn" data-block-id="35" valign="top" colspan="6" width="50%"><table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation"><tbody><tr><td style="background-color:#f9c617;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0" class="mceBlockContainer" valign="top"><div data-block-id="39" class="mceText" id="dataBlockId-39" style="width:100%"><p style="line-height: 1; text-align: center;" class="last-child"><a href="http://www.gtcfx.com/" target="_blank" style="color: #19446e; text-decoration: none;"><strong><span style="font-size: 12px"><span style="font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif"> www.gtcfx.com</span></span></strong></a></p></div></td></tr></tbody></table></td><td style="padding-top:0;padding-bottom:0;margin-bottom:24px" class="mceColumn" data-block-id="37" valign="top" colspan="6" width="50%"><table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation"><tbody><tr><td style="background-color:#f9c617;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0" class="mceBlockContainer" valign="top"><div data-block-id="40" class="mceText" id="dataBlockId-40" style="width:100%"><p style="line-height: 1; text-align: center;" class="last-child"><a href="mailto:support@gtcfx.com?subject=&body=" target="_blank" style="color: #19446e; text-decoration: none;"><strong><span style="font-size: 12px"><span style="font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif">support@gtcfx.com</span></span></strong></a></p></div></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td style="background-color:transparent;padding-top:0;padding-bottom:12px;padding-right:24px;padding-left:24px" class="mceBlockContainer" valign="top"><div data-block-id="41" class="mceText" id="dataBlockId-41" style="width:100%"><p style="text-align: justify;" class="last-child"><span style="color:#19446e;"><span style="font-size: 12px"><span style="font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif">Disclaimer: Over-the-counter margined derivative contracts, including contracts for difference and spot foreign exchange, are complex instruments and come with a high risk of losing money rapidly due to leverage. You should consider whether you understand how these products work and whether you can afford to take the high risk of losing your money. Independent professional advice is highly recommended before investing.</span></span></span></p></div></td></tr><tr><td style="padding-top:12px;padding-bottom:12px;padding-right:0;padding-left:0" class="mceBlockContainerE2E" align="full" valign="top"><img data-block-id="42" width="660" height="auto" style="width:660px;height:auto;max-width:5500px !important;display:block" alt="" src="https://mcusercontent.com/7eb08bbd4cb544fe0debea98e/images/30c47c92-957f-9977-edf0-7d8ae3ff6a46.jpg" role="presentation" class="imageDropZone mceImage"/></td></tr><tr><td style="padding-top:8px;padding-bottom:8px;padding-right:8px;padding-left:8px" class="mceLayoutContainer" valign="top"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation" data-block-id="11" id="section_df7d4783705beaf31623a8dccfd1a928" class="mceFooterSection"><tbody><tr class="mceRow"><td style="background-position:center;background-repeat:no-repeat;background-size:cover" valign="top"><table border="0" cellpadding="0" cellspacing="12" width="100%" role="presentation"><tbody><tr><td style="padding-top:0;padding-bottom:0;margin-bottom:12px" class="mceColumn" data-block-id="-3" valign="top" colspan="12" width="100%"><table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation"><tbody><tr><td style="padding-top:12px;padding-bottom:12px;padding-right:16px;padding-left:16px" class="mceBlockContainer" align="center" valign="top"><div data-block-id="9" class="mceText" id="dataBlockId-9" style="display:inline-block;width:100%"><p class="last-child"><span style="font-size: 12px">Want to change how you receive these emails?</span><br/><span style="font-size: 12px">You can </span><a href="*|UPDATE_PROFILE|*"><span style="font-size: 12px">update your preferences</span></a><span style="font-size: 12px"> or </span><a href="*|UNSUB|*"><span style="font-size: 12px">unsubscribe</span></a></p></div></td></tr><tr><td class="mceLayoutContainer" align="center" valign="top"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation" data-block-id="-2"><tbody><tr class="mceRow"><td style="background-position:center;background-repeat:no-repeat;background-size:cover;padding-top:0px;padding-bottom:0px" valign="top"><table border="0" cellpadding="0" cellspacing="24" width="100%" role="presentation"><tbody></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]--></td></tr></tbody></table>
</td>
</tr>
</tbody></table>
</center>
</body></html>
        `
  };
  try {
    await transporter.sendMail(mailData);
    return NextResponse.json({ message: otp }, { status: 200 })
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Error Sending OTP' }, { status: 500 })
  }
}