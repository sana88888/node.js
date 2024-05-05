const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port:587,
    secure:false,
    auth:{
        user:
        pass:
    },
});
async function main(){
    const info = await transporter.sendMail({
        from: ` `,
        to: " " ,
        subject: " ",
        text: " ",
        html: " ",

    });
    console.log("message send: %s" , info.messageId);

}
main().catch(console.error);