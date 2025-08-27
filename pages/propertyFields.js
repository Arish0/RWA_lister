import path from 'path';
import { faker } from '@faker-js/faker'; 

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
    this.propertycurrentdate = page.locator("//button[normalize-space()='Today']")
    this.propertyenddate = page.locator("(//div[@class='relative w-full'])[13]")
    this.propertyselectType = page.locator("(//div[@class='relative w-full'])[14]")
    this.propertytypepebuilding = page.locator("//select[@id='property_info.property_type'] /option[1]")
    this.propertytypespace = page.locator("//select[@id='property_info.property_type'] /option[2]")
    this.propertyLocation = page.locator("//input[@id='property_info.location']")
    this.locationInput = page.locator("(//input[@id='property_info.location'])[1]");
    this.suggestionList = page.locator('ul > li');  
    this.aboutProperty = page.locator("(//div[@role='textbox'])[2]");
    this.propertyammunity =page.locator("(//div[@role='textbox'])[4]")
    this.uploadInput = page.locator('(//input[@id="documents"])[1]');
    this.sumbitButton = page.locator("//button[normalize-space()='List Property']");
    this.Squarefeet = page.locator("//input[@id='property_info.total_sqft']");
    this.pricepersquare = page.locator("//input[@id='property_info.price_per_sqft']")


    
    
    // this.dateInput = "(//div[@class='relative w-full'])[12]";
    // this.calendarHeader = getByRole('button', { name: /\w+ \d{4}/ });        //"button.rounded-lg.bg-white"; // year/month header
    // this.nextMonthBtn = "(//div[@class='flex'])[12]//button[last()]";        
    // this.prevMonthBtn = "(//div[@class='flex'])[12]//button[1]"; 
    // this.yearNext = "(//button[@type='button'])[3]"
    // this.yearPrev = "(//button[@type='button'])[2]";
    // this.monthContainer = "(//div[@class='p-1'])[1]";
    // this.dayContainer = "(//div[@class='grid w-64 grid-cols-7'])[1]";



}
//usage of faker
 async enterpropertyTitle() {
  const adjectives = ["Luxury", "Modern", "Cozy", "Elegant", "Spacious", "Affordable"];
  const propertyTypes = ["Apartment", "Villa", "Studio", "Penthouse", "Cottage", "Duplex"];

  const adjective = faker.helpers.arrayElement(adjectives);
  const type = faker.helpers.arrayElement(propertyTypes);
  const location = faker.location.city();

  const title = `${adjective} ${type} in ${location}`;
  await this.propertyTitle.fill(title);
  return title;
}

  async enterpropertyDescription() {
    const description = faker.lorem.sentences(3);
    await this.propertyDescription.click();
    await this.propertyDescription.fill(description);
    console.log("Generated Description:", description);
    return description;
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
async selectPropertyStartDate() {
    await this.propertystartdate.click();
    await this.propertycurrentdate.click();
//   await this.page.click(this.dateInput);

//   // Click the month/year header button (unique by role+name)
//   await this.calendarHeader.click();

//   const [month, year, day] = startdate.split(' ');

//   // Read the currently displayed year text
//   const currentYearText = await this.calendarHeader.textContent();
//   const currentYear = parseInt(currentYearText.split(' ')[1], 10);

//   const yearDiff = parseInt(year) - currentYear;

//   if (yearDiff > 0) {
//     for (let i = 0; i < yearDiff; i++) {
//       await this.page.click(this.yearNext);
//     }
//   } else if (yearDiff < 0) {
//     for (let i = 0; i < Math.abs(yearDiff); i++) {
//       await this.page.click(this.yearPrev);
//     }
//   }

//   // Select month and day
//   await this.page.getByRole('button', { name: month }).click();
//   await this.page.getByRole('button', { name: day }).click();


}
async selectPropertyEndDate() {
    await this.propertyenddate.click();
    await this.propertycurrentdate.click();
}
async enterpropertyselectType(Type) {
    await this.propertyselectType.click();
    if (Type === "building") {
    await this.page.keyboard.press('ArrowDown'); // Move to "building"
    await this.page.keyboard.press('Enter');     // Select it
} else if (Type === "space") {
    await this.page.keyboard.press('ArrowDown'); // Move to first option
    await this.page.keyboard.press('ArrowDown'); // Move to "space"
    await this.page.keyboard.press('Enter'); 
    await this.Squarefeet.click();
    await this.Squarefeet.fill("500") 
    await this.pricepersquare.click();
    await this.pricepersquare.fill("5000")   // Select it
}
 }
 async enterpropertyLocation(location) {
 await this.propertyLocation.click();
  await this.propertyLocation.fill(location);

  // Wait for Mapbox suggestions to load (role=option is stable)
  const firstSuggestion = this.page.getByRole('option').first();
  await firstSuggestion.waitFor({ state: 'visible' });
  await this.page.wiatfortimeout(20000);





  //// Simulate user selecting the first suggestion
  await this.page.keyboard.press('ArrowDown');
  await this.page.keyboard.press('Enter');

  // Click the first suggestion
 

}
//  async selectFirstSuggestion(text) {
//         // Type into the input field
//         await this.propertyLocation.click();
//         await this.locationInput.fill(text);

//         // Wait until suggestions are loaded
//         await this.page.waitForSelector('ul > li');

//         // Click the first suggestion
//         await this.suggestionList.first().click();
//     }
     async enteraboutProperty() {
    const about = `This property features ${faker.commerce.productAdjective()} ${faker.commerce.product()} located in ${faker.location.city()}.`;
    await this.aboutProperty.click();
    await this.aboutProperty.fill(about);
    console.log("Generated About Property:", about);
    return about;
  }
     async enterpropertyammunity() {
    const amenities = `Includes ${faker.commerce.product()} , ${faker.word.noun()} center, and ${faker.word.adjective()} gardens.`;
    await this.propertyammunity.click();
    await this.propertyammunity.fill(amenities);
    console.log("Generated Amenities:", amenities);
    return amenities;
  }
    async uploadPDF(fileName) {
    // Build local file path (put your test PDFs inside /tests/resources)
    const filePath = path.resolve(`tests/Resources/${fileName}`);

   await this.uploadInput.setInputFiles(filePath);
  }
  async clickSubmitButton() {
    await this.sumbitButton.click();
  }



}

module.exports = { PropertyFields };