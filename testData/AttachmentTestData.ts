import path from 'path';

const currentDir = __dirname;

export const data = {
    toAddress: "faiyazpasha001@proton.me",
    subject: `send email for validation attachment ${Date.now()}`,
    cc: "cc1@gmail.com",
    bcc: "bcc1@gmail.com",
    body: "This is the first test email.",
    fileLocation: path.join(currentDir, "AttachmentFile.pdf"),
    fileName: "AttachmentFile.pdf"
};