const {test,expect} = require ('@playwright/test');
const { ListerLogin }  = require ('../pages/listerLogin');
const { PropertyImages } = require ('../pages/propertyImages');
const { PropertyFields } = require ('../pages/propertyFields');
const config = require ('../config/config');

test('lister page', async ({page})=>{
 const listerLogin = new ListerLogin(page);
 const propertyImages = new PropertyImages(page);
 const propertyFields = new PropertyFields(page);
 
 await listerLogin.goto(config.baseURL)
 await listerLogin.enteremail(config.email)
 await listerLogin.clicksubmit()
 await page.waitForTimeout(5000)
 const otp = await listerLogin.fetchOtpFromYopmail(config.email);
 await listerLogin.enterOtp(otp);
 await listerLogin.clickPropertyManagement();
 await listerLogin.addPropertyClick();

 await propertyImages.uploadRandomCoverImage();
 await propertyImages.uploadRandomInteriorImages();


 await propertyFields.enterpropertyTitle("Beautiful Beachfront Villa");
 await propertyFields.enterpropertyDescription("Experience luxury living in this stunning beachfront villa with breathtaking ocean views.");
 await propertyFields.enterpropertyprice("500");
 await propertyFields.entergrossrent("100")
 await propertyFields.enterpropertyshares("100");
//  await propertyFields.enterpropertypricepershare("5");
 await propertyFields.enterpropertymanagementfee("4");
 await propertyFields.enterpropertyinsurancefee("15");
 await propertyFields.enterpropertytokensupply("1000");
 await propertyFields.enterpropertycapitalappreciation("10");
//  await propertyFields.selectPropertyStartDate("27-08-2025");
//  await propertyFields.selectPropertyEndDate("27-09-2025");

 await page.waitForTimeout(3000)

})