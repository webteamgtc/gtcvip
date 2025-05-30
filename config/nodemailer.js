import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    host: 'smtp.eu.mailgun.org', // SMTP host
    port: 465, // Port for secure connection (usually 465 for SSL/TLS)
    secure:true,
    auth: {
        user: 'portal@mx1.gtcmail.com', // SMTP username
        pass: '48490f5c91f63ae6e470633d79aa10fb-7c5e3295-a24fb77e', // SMTP password
    },
});

export const mailOptions = {
    from: "service@mx.gtcmail.com",
    to:"zeeshan@gtcfx.com", 
    bcc: 'mohammad.zeeshan@gtcfx.com',
}


export const mailOptionsJobs = {
    from: "service@mx.gtcmail.com",
    to:"careers@gtcfx.com",
    bcc: 'zeeshan@gtcfx.com',
}


