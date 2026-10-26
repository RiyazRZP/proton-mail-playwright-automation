# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: InboxTestCases.spec.ts >> Send email from another account and Open an email and verify its read state at reciever account
- Location: tests\InboxTestCases.spec.ts:33:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('//span[@data-testid="message-row:subject"]/span[text()="Send email Test 01 ab5b6f44-c1eb-41ca-9465-44cba6143b29"]')
Expected: "Send email Test 01 ab5b6f44-c1eb-41ca-9465-44cba6143b29"
Timeout: 30000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" locator('//span[@data-testid="message-row:subject"]/span[text()="Send email Test 01 ab5b6f44-c1eb-41ca-9465-44cba6143b29"]') with timeout 30000ms
  - waiting for locator('//span[@data-testid="message-row:subject"]/span[text()="Send email Test 01 ab5b6f44-c1eb-41ca-9465-44cba6143b29"]')

```

```yaml
- img:
  - img
  - img
- img
- heading "Proton Mail" [level=1]
- link "Proton Mail":
  - /url: /u/1/inbox
  - img "Proton Mail"
- button "Proton applications"
- button "New message"
- navigation "Main":
  - heading "Navigation" [level=2]
  - list:
    - listitem:
      - link "Inbox 105 unread conversations":
        - /url: /u/1/inbox#category=primary
        - text: Inbox 105
    - listitem:
      - link "Drafts":
        - /url: /u/1/all-drafts
    - listitem:
      - link "Sent":
        - /url: /u/1/all-sent
    - listitem:
      - link "Starred":
        - /url: /u/1/starred
    - listitem:
      - heading "More" [level=3]
      - button "More"
    - listitem:
      - heading "Views" [level=3]
      - button "Views" [expanded]
    - listitem:
      - link "Mailing lists":
        - /url: /u/1/views/newsletters
    - listitem:
      - heading "Folders" [level=3]
      - button "Folders"
      - button "Create a new folder"
      - link "Manage your folders":
        - /url: https://account.proton.me/u/1/mail/folders-labels
    - listitem:
      - heading "Labels" [level=3]
      - button "Labels" [expanded]
      - button "Create a new label"
      - link "Manage your labels":
        - /url: https://account.proton.me/u/1/mail/folders-labels
    - listitem:
      - link "FilterCheck":
        - /url: /u/1/-OTapaBo7cvI5e5ToLxDkvJVThR3RLb5huZ9VCHopyJkY5gvfFBdebLQ3y3XXJdGvyStLXhUYcw3xoOMaACwgg==
    - separator
    - listitem:
      - heading "Get storage bonus" [level=3]
      - button "Get storage bonus" [expanded]
      - text: 1/3
    - text: Complete this checklist within 18 days to double your storage for free.
    - list:
      - listitem:
        - button "Discover privacy features"
      - listitem:
        - button "Review import options"
      - listitem:
        - button "Download apps"
  - button "Show navigation bar" [pressed]
- meter: "Your current storage: 13.15 MB / 500.00 MB"
- link "13.15 MB / 500.00 MB":
  - /url: https://account.proton.me/u/1/mail/upgrade?ref=upsell_mail-button-storage
- button "Proton Mail 5.0.137.7"
- banner:
  - search:
    - button "Search"
    - textbox "Search messages"
  - list:
    - button "Upgrade for US$ 0.99"
    - listitem:
      - button "Toggle settings"
    - listitem:
      - button "riyazpasha001 riyazpasha001@proton.me"
- main:
  - navigation "Toolbar":
    - checkbox "Select all messages"
    - text: Select all messages
    - button
    - heading "Inbox" [level=2]
    - button "More"
    - button "Unread"
    - button "Filter"
    - button "Previous page" [disabled]
    - button "1/3"
    - button "Next page"
  - tab "Primary" [selected]
  - tab "Social"
  - tab "Promotions"
  - tab "Newsletters"
  - region "Message list":
    - heading "Conversation list 105 unread messages" [level=1]
    - text: You can use Proton VPN for free, today.
    - link "Learn more":
      - /url: https://account.proton.me/vpn/vpn-apps
    - button "Close"
    - region "73 messages in conversation Undelivered Mail Returned to Sender":
      - checkbox
      - button "Star conversation"
      - text: Unread email MAILER-DAEMON@proton.me Official
      - heading "73 messages in conversation Undelivered Mail Returned to Sender" [level=2]
      - text: Has 73 attachments (281.46 KB) Monday, October 26th, 2026 at 10:24 PM
      - button "email-1.3.eml":
        - img
      - button "email-1.3.eml":
        - img
      - button "email-1.3.eml":
        - img
      - text: "+7"
    - region "Send email Test 01 cc35a79f-d80a-40cf-ae39-43f465ee620d":
      - checkbox
      - button "Star conversation"
      - text: Unread email faiyazpasha001@proton.me
      - heading "Send email Test 01 cc35a79f-d80a-40cf-ae39-43f465ee620d" [level=2]
      - text: Monday, October 26th, 2026 at 9:51 PM
    - region "Send email Test 01 7c96802b-610e-45dd-8840-cec5e410e4a7":
      - checkbox
      - button "Star conversation"
      - text: Unread email faiyazpasha001@proton.me
      - heading "Send email Test 01 7c96802b-610e-45dd-8840-cec5e410e4a7" [level=2]
      - text: Monday, October 26th, 2026 at 9:35 PM
    - region "Send email Test 034 39d39bf1-240b-4a8e-8f6a-6ae14b60d692":
      - checkbox
      - button "Star conversation"
      - text: Unread email faiyazpasha001@proton.me
      - heading "Send email Test 034 39d39bf1-240b-4a8e-8f6a-6ae14b60d692" [level=2]
      - text: Monday, October 26th, 2026 at 8:49 PM
    - region "Send email Test 034 e155070b-529f-4517-9207-976062efd394":
      - checkbox
      - button "Star conversation"
      - text: Unread email faiyazpasha001@proton.me
      - heading "Send email Test 034 e155070b-529f-4517-9207-976062efd394" [level=2]
      - text: Monday, October 26th, 2026 at 8:49 PM
    - region "Send email Test 034 cd7d499d-8c47-42a3-919e-fdabd1200750":
      - checkbox
      - button "Star conversation"
      - text: Unread email faiyazpasha001@proton.me
      - heading "Send email Test 034 cd7d499d-8c47-42a3-919e-fdabd1200750" [level=2]
      - text: Monday, October 26th, 2026 at 8:49 PM
    - region "Send email Test 034 eb2254d2-74b6-4b17-8204-4b94a109f60c":
      - checkbox
      - button "Star conversation"
      - text: Unread email faiyazpasha001@proton.me
      - heading "Send email Test 034 eb2254d2-74b6-4b17-8204-4b94a109f60c" [level=2]
      - text: Monday, October 26th, 2026 at 8:39 PM
    - region "Send email Test 034 1ff14feb-a7de-4680-a068-e57ec9274a7f":
      - checkbox
      - button "Star conversation"
      - text: faiyazpasha001@proton.me
      - heading "Send email Test 034 1ff14feb-a7de-4680-a068-e57ec9274a7f" [level=2]
      - text: Monday, October 26th, 2026 at 8:38 PM
    - region "Send email Test 034 ad949b72-d155-46d2-a19e-7c6962f9352d":
      - checkbox
      - button "Star conversation"
      - text: Unread email faiyazpasha001@proton.me
      - heading "Send email Test 034 ad949b72-d155-46d2-a19e-7c6962f9352d" [level=2]
      - text: Monday, October 26th, 2026 at 8:37 PM
    - region "Send email Test 034 1793025582556":
      - checkbox
      - button "Star conversation"
      - text: Unread email faiyazpasha001@proton.me
      - heading "Send email Test 034 1793025582556" [level=2]
      - text: Monday, October 26th, 2026 at 8:10 PM
    - region "Send email Test 034 1793025506678":
      - checkbox
      - button "Star conversation"
      - text: Unread email faiyazpasha001@proton.me
      - heading "Send email Test 034 1793025506678" [level=2]
      - text: Monday, October 26th, 2026 at 8:09 PM
    - region "Send email Test 034 1793025386417":
      - checkbox
      - button "Star conversation"
      - text: faiyazpasha001@proton.me
      - heading "Send email Test 034 1793025386417" [level=2]
      - text: Monday, October 26th, 2026 at 8:07 PM
    - region "Send email Test 034 1793016504302":
      - checkbox
      - button "Star conversation"
      - text: Unread email faiyazpasha001@proton.me
      - heading "Send email Test 034 1793016504302" [level=2]
      - text: Monday, October 26th, 2026 at 5:38 PM
    - region "Send email Test 034 1793016447279":
      - checkbox
      - button "Star conversation"
      - text: Unread email faiyazpasha001@proton.me
      - heading "Send email Test 034 1793016447279" [level=2]
      - text: Monday, October 26th, 2026 at 5:37 PM
    - region "Send email Test 034 1793016390409":
      - checkbox
      - button "Star conversation"
      - text: Unread email faiyazpasha001@proton.me
      - heading "Send email Test 034 1793016390409" [level=2]
      - text: Monday, October 26th, 2026 at 5:37 PM
    - region "Send email Test 034 1793016333203":
      - checkbox
      - button "Star conversation"
      - text: Unread email faiyazpasha001@proton.me
      - heading "Send email Test 034 1793016333203" [level=2]
      - text: Monday, October 26th, 2026 at 5:36 PM
    - region "Send email Test 034 1793016279127":
      - checkbox
      - button "Star conversation"
      - text: Unread email faiyazpasha001@proton.me
      - heading "Send email Test 034 1793016279127" [level=2]
      - text: Monday, October 26th, 2026 at 5:35 PM
    - region "Send email Test 034 1793016225603":
      - checkbox
      - button "Star conversation"
      - text: Unread email faiyazpasha001@proton.me
      - heading "Send email Test 034 1793016225603" [level=2]
      - text: Monday, October 26th, 2026 at 5:34 PM
    - region "Send email Test 034 1793016171775":
      - checkbox
      - button "Star conversation"
      - text: Unread email faiyazpasha001@proton.me
      - heading "Send email Test 034 1793016171775" [level=2]
      - text: Monday, October 26th, 2026 at 5:33 PM
    - region "Send email Test 034 1793016117623":
      - checkbox
      - button "Star conversation"
      - text: Unread email faiyazpasha001@proton.me
      - heading "Send email Test 034 1793016117623" [level=2]
      - text: Monday, October 26th, 2026 at 5:32 PM
    - region "Send email Test 034 1793016061173":
      - checkbox
      - button "Star conversation"
      - text: Unread email faiyazpasha001@proton.me
      - heading "Send email Test 034 1793016061173" [level=2]
      - text: Monday, October 26th, 2026 at 5:31 PM
    - region "Send email Test 034 1793014463917":
      - checkbox
      - button "Star conversation"
      - text: Unread email faiyazpasha001@proton.me
      - heading "Send email Test 034 1793014463917" [level=2]
      - text: Monday, October 26th, 2026 at 5:05 PM
    - region "Secure your schedule with Proton Calendar":
      - checkbox
      - button "Star conversation"
      - text: Unread email Proton Official
      - heading "Secure your schedule with Proton Calendar" [level=2]
      - text: Has 12 attachments (227.69 KB) Monday, October 26th, 2026 at 4:21 PM
    - region "Send email Test 034 1793009699261":
      - checkbox
      - button "Star conversation"
      - text: Unread email faiyazpasha001@proton.me
      - heading "Send email Test 034 1793009699261" [level=2]
      - text: Monday, October 26th, 2026 at 3:45 PM
    - region "Send email Test 034 1793009630260":
      - checkbox
      - button "Star conversation"
      - text: Unread email faiyazpasha001@proton.me
      - heading "Send email Test 034 1793009630260" [level=2]
      - text: Monday, October 26th, 2026 at 3:44 PM
    - region "Send email Test 034 1793009546386":
      - checkbox
      - button "Star conversation"
      - text: Unread email faiyazpasha001@proton.me
      - heading "Send email Test 034 1793009546386" [level=2]
      - text: Monday, October 26th, 2026 at 3:43 PM
    - region "Send email Test 034 1793009453049":
      - checkbox
      - button "Star conversation"
      - text: Unread email faiyazpasha001@proton.me
      - heading "Send email Test 034 1793009453049" [level=2]
      - text: Monday, October 26th, 2026 at 3:42 PM
    - region "Send email Test 034 1793006861179":
      - checkbox
      - button "Star conversation"
      - text: Unread email faiyazpasha001@proton.me
      - heading "Send email Test 034 1793006861179" [level=2]
      - text: Monday, October 26th, 2026 at 2:58 PM
    - region "Send email Test 034 1793006803372":
      - checkbox
      - button "Star conversation"
      - text: Unread email faiyazpasha001@proton.me
      - heading "Send email Test 034 1793006803372" [level=2]
      - text: Monday, October 26th, 2026 at 2:57 PM
    - region "Send email Test 034 1793006784781":
      - checkbox
      - button "Star conversation"
      - text: Unread email faiyazpasha001@proton.me
      - heading "Send email Test 034 1793006784781" [level=2]
      - text: Monday, October 26th, 2026 at 2:56 PM
    - region "Send email Test 034 1793006747463":
      - checkbox
      - button "Star conversation"
      - text: Unread email faiyazpasha001@proton.me
      - heading "Send email Test 034 1793006747463" [level=2]
      - text: Monday, October 26th, 2026 at 2:56 PM
    - region "Send email Test 034 1793006728429":
      - checkbox
      - button "Star conversation"
      - text: Unread email faiyazpasha001@proton.me
      - heading "Send email Test 034 1793006728429" [level=2]
      - text: Monday, October 26th, 2026 at 2:55 PM
    - region "Send email Test 034 1793006691602":
      - checkbox
      - button "Star conversation"
      - text: Unread email faiyazpasha001@proton.me
      - heading "Send email Test 034 1793006691602" [level=2]
      - text: Monday, October 26th, 2026 at 2:55 PM
    - region "Send email Test 034 1793006671870":
      - checkbox
      - button "Star conversation"
      - text: Unread email faiyazpasha001@proton.me
      - heading "Send email Test 034 1793006671870" [level=2]
      - text: Monday, October 26th, 2026 at 2:55 PM
    - region "Send email Test 034 1793006630735":
      - checkbox
      - button "Star conversation"
      - text: Unread email faiyazpasha001@proton.me
      - heading "Send email Test 034 1793006630735" [level=2]
      - text: Monday, October 26th, 2026 at 2:54 PM
    - region "Send email Test 034 1793006615575":
      - checkbox
      - button "Star conversation"
      - text: Unread email faiyazpasha001@proton.me
      - heading "Send email Test 034 1793006615575" [level=2]
      - text: Monday, October 26th, 2026 at 2:54 PM
    - region "Send email Test 034 1793006567535":
      - checkbox
      - button "Star conversation"
      - text: Unread email faiyazpasha001@proton.me
      - heading "Send email Test 034 1793006567535" [level=2]
      - text: Monday, October 26th, 2026 at 2:53 PM
    - region "Send email Test 034 1793006553462":
      - checkbox
      - button "Star conversation"
      - text: Unread email faiyazpasha001@proton.me
      - heading "Send email Test 034 1793006553462" [level=2]
      - text: Monday, October 26th, 2026 at 2:53 PM
    - region "Send email Test 034 1793006486794":
      - checkbox
      - button "Star conversation"
      - text: Unread email faiyazpasha001@proton.me
      - heading "Send email Test 034 1793006486794" [level=2]
      - text: Monday, October 26th, 2026 at 2:52 PM
    - region "Send email Test 034 1792934859149":
      - checkbox
      - button "Star conversation"
      - text: Unread email faiyazpasha001@proton.me
      - heading "Send email Test 034 1792934859149" [level=2]
      - text: Sunday, October 25th, 2026 at 6:58 PM
    - region "Send email Test 034 1792934791530":
      - checkbox
      - button "Star conversation"
      - text: Unread email faiyazpasha001@proton.me
      - heading "Send email Test 034 1792934791530" [level=2]
      - text: Sunday, October 25th, 2026 at 6:57 PM
    - region "Send email Test 034 1792934664421":
      - checkbox
      - button "Star conversation"
      - text: Unread email faiyazpasha001@proton.me
      - heading "Send email Test 034 1792934664421" [level=2]
      - text: Sunday, October 25th, 2026 at 6:55 PM
    - region "Send email Test 034 1792918217741":
      - checkbox
      - button "Star conversation"
      - text: Unread email faiyazpasha001@proton.me
      - heading "Send email Test 034 1792918217741" [level=2]
      - text: Sunday, October 25th, 2026 at 2:20 PM
    - region "Send email Test 034 1792917594818":
      - checkbox
      - button "Star conversation"
      - text: Unread email faiyazpasha001@proton.me
      - heading "Send email Test 034 1792917594818" [level=2]
      - text: Sunday, October 25th, 2026 at 2:10 PM
    - region "Send email Test 034 1792916119988":
      - checkbox
      - button "Star conversation"
      - text: Unread email faiyazpasha001@proton.me
      - heading "Send email Test 034 1792916119988" [level=2]
      - text: Sunday, October 25th, 2026 at 1:45 PM
    - region "Send email Test 034 1792914776339":
      - checkbox
      - button "Star conversation"
      - text: faiyazpasha001@proton.me
      - heading "Send email Test 034 1792914776339" [level=2]
      - text: Sunday, October 25th, 2026 at 1:23 PM
    - region "Send email Test 034 1792914776331":
      - checkbox
      - button "Star conversation"
      - text: Unread email faiyazpasha001@proton.me
      - heading "Send email Test 034 1792914776331" [level=2]
      - text: Sunday, October 25th, 2026 at 1:23 PM
    - region "Send email Test 034 1792914776331":
      - checkbox
      - button "Star conversation"
      - text: Unread email faiyazpasha001@proton.me
      - heading "Send email Test 034 1792914776331" [level=2]
      - text: Sunday, October 25th, 2026 at 1:23 PM
    - region "Send email Test 034 1792914345023":
      - checkbox
      - button "Star conversation"
      - text: Unread email faiyazpasha001@proton.me
      - heading "Send email Test 034 1792914345023" [level=2]
      - text: Sunday, October 25th, 2026 at 1:16 PM
    - region "Send email Test 034 1792913588809":
      - checkbox
      - button "Star conversation"
      - text: faiyazpasha001@proton.me
      - heading "Send email Test 034 1792913588809" [level=2]
      - text: Sunday, October 25th, 2026 at 1:04 PM
    - button "Go to previous page" [disabled]
    - button "Go to page 1"
    - button "Go to page 2"
    - button "Go to page 3"
    - button "Go to next page"
  - button "Show side panel" [expanded]
  - navigation "Side panel":
    - button "Toggle Contacts app"
    - button "Toggle Calendar app"
    - button "Toggle security center app"
    - button "Proton VPN Toggle VPN dashboard":
      - img "Proton VPN"
      - text: Toggle VPN dashboard
    - button "Toggle referral"
```

# Test source

```ts
  1   | import { test, expect} from '@playwright/test';
  2   | import { LoginPage } from '../POM_classes/LoginPage';
  3   | import { testData } from '../testData/InboxTestData';
  4   | import { HomePage } from '../POM_classes/HomePage';
  5   | import { ComposeEmailPage } from '../POM_classes/ComposeEmailPage';
  6   | 
  7   | //Disabling the parallel execuation Because we want beforeAll hook should run for one time for all Test methods:
  8   | test.describe.configure({ mode: 'default' });
  9   | 
  10  | //Sending an email from different Account for all Test cases by using Before All:
  11  | test.beforeAll(async({browser})=>{
  12  |     const context = await browser.newContext({
  13  |         storageState: "loginState2.json"
  14  |     });
  15  |     test.setTimeout(60000);
  16  |     const page = await context.newPage();
  17  |     const loginPage = new LoginPage(page);
  18  |     await loginPage.gotoHomePage();
  19  |     const homePage = new HomePage(page);
  20  |     const composeEmailPage = new ComposeEmailPage(page);
  21  |     await homePage.clickOnComposeEmail();
  22  |     await composeEmailPage.enterToAddress(testData.toAddress);
  23  |     await composeEmailPage.enterSubject(testData.subject);
  24  |     await composeEmailPage.enterBody(testData.body);
  25  |     await composeEmailPage.clickSendEmail();
  26  |     await homePage.waitForMessageSent();
  27  |     await page.getByText(testData.senderEmailUserName).click();
  28  |     await page.getByRole("button",{name:"Sign out"}).click();
  29  |     await context.close();
  30  | });
  31  | 
  32  | 
  33  | test('Send email from another account and Open an email and verify its read state at reciever account', async ({ browser }) => {
  34  |     const context = await browser.newContext({
  35  |         storageState: "loginState.json"
  36  |     });
  37  |     test.setTimeout(60000);
  38  |     const page = await context.newPage();
  39  |     const loginPage = new LoginPage(page);
  40  |     await loginPage.gotoHomePage();
  41  |     const homepage = new HomePage(page);
  42  |     //verify the send mail at receiver and open an email and verify its read state
  43  |     await expect(page.locator(`//button[@data-testid='heading:userdropdown']//span[text()="${testData.reciverUsername}"]`)).toHaveText(testData.reciverUsername);
  44  |     await page.waitForTimeout(4000);
  45  |     await page.reload();
  46  |     
> 47  |     await expect(page.locator(`//span[@data-testid="message-row:subject"]/span[text()="${testData.subject}"]`)).toHaveText(testData.subject);
      |                                                                                                                 ^ Error: expect(locator).toHaveText(expected) failed
  48  |     
  49  |     await page.locator(`//span[@data-testid="message-row:subject"]/span[text()="${testData.subject}"]`).click();
  50  |     
  51  |     await expect(page.getByTestId("toolbar:unread")).toHaveText(testData.markAsUnread);
  52  | 
  53  | });
  54  | 
  55  | test('Send email from another account and validate the unread state', async ({ browser }) => {
  56  |     test.setTimeout(60000);
  57  |     const context = await browser.newContext({
  58  |         storageState: "loginState.json"
  59  |     });
  60  |     const page = await context.newPage();
  61  |     const loginPage = new LoginPage(page);
  62  |     await loginPage.gotoHomePage();
  63  |     const homepage = new HomePage(page);
  64  |     //verify the send mail at receiver and validate it's unread state:
  65  |     await expect(page.locator(`//button[@data-testid='heading:userdropdown']//span[text()="${testData.reciverUsername}"]`)).toHaveText(testData.reciverUsername);
  66  |     await page.waitForTimeout(4000);
  67  |     await page.reload();
  68  |    
  69  |     await expect(page.locator(`//span[@data-testid="message-row:subject"]/span[text()="${testData.subject}"]`)).toHaveText(testData.subject);
  70  |     const homePage = new HomePage(page);
  71  |     await homePage.selectSpecificEmail();
  72  |     
  73  |     await expect(page.locator("//button[@data-testid='toolbar:unread'] //span[text()='Mark as unread']")).toHaveText(testData.markAsUnRead);
  74  |     
  75  | });
  76  | 
  77  | 
  78  | test('Archive an email and verify its location in Archive folder', async ({ browser }) => {
  79  |     test.setTimeout(60000);
  80  |     const context = await browser.newContext({
  81  |         storageState: "loginState.json"
  82  |     });
  83  |     const page = await context.newPage();
  84  |     const loginPage = new LoginPage(page);
  85  |     await loginPage.gotoHomePage();
  86  |     const homepage = new HomePage(page);
  87  | 
  88  |     //validate the email is received from sender:
  89  |     await expect(page.locator(`//button[@data-testid='heading:userdropdown']//span[text()="${testData.reciverUsername}"]`)).toHaveText(testData.reciverUsername);
  90  |     await page.waitForTimeout(4000);
  91  |     await page.reload();
  92  | 
  93  |     await expect(page.locator(`//span[@data-testid="message-row:subject"]/span[text()="${testData.subject}"]`)).toHaveText(testData.subject);
  94  |     
  95  |     //Archive the Email:
  96  |     const homePage = new HomePage(page);
  97  |     await homePage.selectSpecificEmail();
  98  |     await homePage.clickOnArchiveEmailButton();
  99  | 
  100 |     //validate in Archive folder:
  101 |     await homePage.clickOnMore();
  102 |     await homePage.clickOnArchiveFolder();
  103 |     await homePage.waitForMessageArchiveSent();
  104 |     await page.waitForTimeout(4000);
  105 |     await page.reload();
  106 |     
  107 |     await expect(page.locator(`//span[@data-testid="message-row:subject"] //span[text()="${testData.subject}"]`)).toHaveText(testData.subject);    
  108 | 
  109 | });
```