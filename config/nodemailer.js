import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"hassanjarko55@gmail.com",
        pass:"pyarcqtqtztjbigo"
    }
});

export const mailOptions = {
    from:"hassanjarko55@gmail.com",
    to:'zeeshan@gtcfx.com'
}
