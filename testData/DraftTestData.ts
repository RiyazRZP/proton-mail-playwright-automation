export const DraftTestData = {
    emailTestData: [
        {
            toAddress: "faiyazpasha001@proton.me",
            subjectForDraftVerify:  `Draft test ${crypto.randomUUID()}`,
            cc: "cc@gmail.com",
            bcc: "bcc@gmail.com",
            body: "This is a test email sent using Playwright automation.",
            subjectForDraftEditSend: `Draft test ${crypto.randomUUID()}`
        },
        {
            toAddress: "faiyazpasha001@proton.me",
            subjectForDraftVerify: `Draft test ${crypto.randomUUID()}`,
            cc: "cc2@gmail.com",
            bcc: "bcc2@gmail.com",
            body: "This is the second test email for draft verification using Playwright automation.",
            subjectForDraftEditSend: `Draft test ${crypto.randomUUID()}`
        }
    ]
};