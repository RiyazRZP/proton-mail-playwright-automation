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
            subject: `Send email Test 002 ${Date.now()}`,
            cc: "cc1@gmail.com",
            bcc: "bcc1@gmail.com",
            body: "This is the first test email.",
            RecipientMissing: "Recipient missing",
            invalidToAddress: "xyzabc",
            invalidRecipientError: "The following address is not valid: xyzabc"
            
        }
    ]
};