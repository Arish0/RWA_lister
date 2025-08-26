class PropertyFields {
constructor(page) {
    this.page = page ;
    this.propertyTitle = page.locator(" //input[@id='title']")
    this.propertyDescription = page.locator("//textarea[@id='description']")
    this.propertyPrice = page.locator("//input[@id='financial.price']")
    this.propertyShares = page.locator("//input[@id='financial.shares']")
    this.propertypriceperShare = page.locator("//input[@id='financial.gross_rent']")
    this.propertygrossrent = page.locator("//input[@id='financial.gross_rent']")
    this.propertymanagementfee = page.locator("//input[@id='financial.fee']")
    this.propertyinsurancefee = page.locator("//input[@id='financial.insurance_fee']")
    this.propertytotaltokensupply = page.locator("//input[@id='financial.total_token']")
    this.propertycapitalappreciation = page.locator("//input[@id='financial.appreciation_amount']")
    this.propertystartdate = page.locator("(//div[@class='relative w-full'])[12]")
    this.propertyenddate = page.locator("(//div[@class='relative w-full'])[13]")


}
async enterpropertyTitle(title) {
    await this.propertyTitle.click();
    await this.propertyTitle.fill(title);
}
async enterpropertyDescription(description) {
    await this.propertyDescription.click();
    await this.propertyDescription.fill(description);
}
async enterpropertyprice(price) {
    await this.propertyPrice.click();
    await this.propertyPrice.fill(price);
}
async enterpropertyshares(shares) {
    await this.propertyShares.click();
    await this.propertyShares.fill(shares);
}
async enterpropertypricepershare(pricepershare) {
    await this.propertypriceperSahre.click();
    await this,this.propertypriceperShare.fill(priceperShare);
}
async entergrossrent(grossrent) {
    await this.propertygrossrent .click();
    await this.propertygrossrent.fill(grossrent);
}
async enterpropertymanagementfee(managementfee) {
    await this.propertymanagementfee.click();
    await this.propertymanagementfee.fill(managementfee);
}
async enterpropertyinsurancefee(insurancefee) {
    await this.propertyinsurancefee.click();
    await this.propertyinsurancefee.fill(insurancefee);
}
async enterpropertytokensupply(tokensupply) {
    await this.propertytotaltokensupply.click();
    await this.propertytotaltokensupply.fill(tokensupply);
}
async enterpropertycapitalappreciation(capitalappreciation) {
    await this.propertycapitalappreciation.click();
    await this.propertycapitalappreciation.fill(capitalappreciation);
}
// async selectPropertyStartDate(startdate) {
//     // Example: startdate = "2025-08-27"
//     await this.propertystartdate.click(); // Open the calendar

//     // Split date parts
//     const [day, month, year] = startdate.split('-');
//     // Month in text, e.g., "August"
//     const monthName = new Date(startdate).toLocaleString('default', { month: 'long' });

//     // Navigate to correct year & month if needed
//     // Click previous/next buttons to reach correct month/year
//     while (true) {
//         // Get the displayed month and year text
//         const displayed = await this.page.locator('.calendar-header').textContent();
//         if (displayed.includes(monthName) && displayed.includes(year)) {
//             break;
//         }
//         // Logic to decide direction (not shown: add conditions as needed)
//         await this.page.locator('.calendar-next-button').click();
//     }

//     // Select the correct day
//     await this.page.locator(`.calendar-day >> text='${parseInt(day, 10)}'`).click();
// }


}
module.exports = { PropertyFields };