class ListerLogin {
    constructor(page) {
        this.page = page
        this.context = page.context();
        this.logininputplaceholder = page.locator("//input[@id='email']")
        this.subButton =page.locator("//button[contains(.,'Continue')]")
        this.otpInputs = page.locator("//div[@class='flex justify-center space-x-2']//input[@maxlength='1']"); 
        this.verifyButton = page.locator("//button[normalize-space()='Verify OTP']");
        this.propmanagement = page.locator("//span[text() = 'Property Management']");
        this.addProperty = page.locator("//button[text() = 'Add New Property']")

    }

    async goto(url) {
    await this.page.goto(url);
    }
   
    async enteremail(email) {
        await this.logininputplaceholder.click();
        await this.logininputplaceholder.fill(email);
    }
    async clicksubmit() {
        await this.subButton.click();
    }
    async fetchOtpFromYopmail(email) {
    // Get inbox name (before @)
    const inbox = email.split('@')[0];

    // Open Yopmail in a new tab
    const yopmailPage = await this.context.newPage();
    await yopmailPage.goto(`https://yopmail.com/?${inbox}`);

    // Wait for inbox iframe to load
    const inboxFrame = yopmailPage.frameLocator('#ifinbox');
    await inboxFrame.locator('div.m').first().waitFor();
    await inboxFrame.locator('div.m').first().click();

    // Read OTP from the email body iframe
    const mailFrame = yopmailPage.frameLocator('#ifmail');
    const bodyText = await mailFrame.locator('body').innerText();

    // Extract OTP (assuming 6-digit number)
    const otpMatch = bodyText.match(/\b\d{6}\b/);
    if (!otpMatch) throw new Error('OTP not found in Yopmail');
    const otp = otpMatch[0];

    await yopmailPage.close();
    return otp;
  }

 async enterOtp(otp) {
  // Ensure OTP is 6 digits
  if (otp.length !== 6) {
    throw new Error(`OTP must be 6 digits, but got: ${otp}`);
  }

  // Split OTP into characters and fill each input
  for (let i = 0; i < otp.length; i++) {
    const digit = otp[i];
    await this.otpInputs.nth(i).fill(digit);
  }

  // Click verify button after filling
  await this.verifyButton.click();
}
async clickPropertyManagement() {
    await this.propmanagement.click();
}
async addPropertyClick() {
    await this.addProperty.click();
}
}

module.exports = { ListerLogin };