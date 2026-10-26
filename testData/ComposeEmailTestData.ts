const invalidToAddress = "xyzabc";

export const ComposeEmailtestData = {
    // Existing test data
    toAddress: "faiyazpasha001@proton.me",
    subject: "Just random email sending",
    cc: "cc@gmail.com",
    bcc: "bcc@gmail.com",
    body: "This is a test email sent using Playwright automation.",

    //Errors
    RecipientMissing: "Recipient missing",
    invalidRecipientError: `The following address is not valid: ${invalidToAddress}`,

    // Multiple test data for successful email sending
    emailTestData: [
        {
            toAddress: "faiyazpasha001@proton.me",
            subject: `Send email Test 001 ${crypto.randomUUID()}`,
            cc: "cc1@gmail.com",
            bcc: "bcc1@gmail.com",
            body: "This is the first test email.",
            RecipientMissing: "Recipient missing",
            invalidToAddress: "xyzabc",
            invalidRecipientError: "The following address is not valid: xyzabc"
        },
        {
            toAddress: "faiyazpasha001@proton.me",
            subject: `Send email Test 002 ${crypto.randomUUID()}`,
            cc: "cc2@gmail.com",
            bcc: "bcc2@gmail.com",
            body: "This is the second test email.",
            RecipientMissing: "Recipient missing",
            invalidToAddress: "xyzabc",
            invalidRecipientError: "The following address is not valid: xyzabc"
        },
        {
            toAddress: "faiyazpasha001@proton.me",
            subject: `Send email Test 003 ${crypto.randomUUID()}`,
            cc: "cc3@gmail.com",
            bcc: "bcc3@gmail.com",
            body: "This is the third test email.",
            RecipientMissing: "Recipient missing",
            invalidToAddress: "xyzabc",
            invalidRecipientError: "The following address is not valid: xyzabc"
        },
        {
            toAddress: "faiyazpasha001@proton.me",
            subject: `Send email Test 004 ${crypto.randomUUID()}`,
            cc: "cc4@gmail.com",
            bcc: "bcc4@gmail.com",
            body: "This is the fourth test email.",
            RecipientMissing: "Recipient missing",
            invalidToAddress: "xyzabc",
            invalidRecipientError: "The following address is not valid: xyzabc"
        }
    ]
};