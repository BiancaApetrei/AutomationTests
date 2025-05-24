// @ts-check
import { test, expect } from '@playwright/test';
import MagentoPageObjects from '../PageObjects/MagentoPageObjects';
import Generic from '../PageObjects/Generic'
test.describe('Layout tests', () => {
  let magento;

  test.beforeEach(async ({ page }) => {
    magento = new MagentoPageObjects(page);
    await page.goto('https://magento.softwaretestingboard.com/');
  });

  test('Home Page has proper title', async ({ page }) => {
    await expect(page).toHaveTitle('Home Page');
  });

  //add test for menu header
  test('Home Page menuo', async ({ page }) => {
    await expect(page).toHaveTitle('Home Page');
  });

  // add test for product page layout

  // add test for shopping cart small window


})

test.describe('Purchase item automation', () => {
  let magento;

  test.beforeEach(async ({ page }) => {
    magento = new MagentoPageObjects(page);
    await page.goto('https://magento.softwaretestingboard.com/');
  });

  test('Order searched item on Magento page', async ({ page }) => {
    const generic = new Generic(page)

    test.setTimeout(180000)

    // Search for product
    await generic.enterText(magento.searchInput, 'shirt');
    await magento.searchInput.press('Enter');

    // Select first product
    await generic.clickElement(magento.productLinks.first());

    // Select size and color
    await generic.confirmText(magento.sizeText, 'Size');
    await generic.clickElement(magento.sizeOption('L'));
    await generic.confirmText(magento.colorText, 'Color');
    await generic.clickElement(magento.colorOption('Blue'));
    
    // Check proper values selected
    await generic.confirmText(magento.selectedSize, 'L');
    await generic.confirmText(magento.selectedColor, 'Blue');

    // Add to cart
    await generic.clickElement(magento.addToCartButton);

    // Wait for success and open cart
    await generic.confirmElementIsVisible(magento.successMessage);
    await generic.clickElement(magento.cartIcon);
    await page.waitForTimeout(2500);

    // Checkout
    await generic.confirmElementIsVisible(magento.checkoutButton);
    await generic.clickElement(magento.checkoutButton);

    // Wait for checkout page/container to appear
    await page.waitForTimeout(2500);
    await generic.confirmElementIsVisible(magento.checkoutContainer);

    // Insert correct data for order
    await generic.waitForPageToFullyLoad();
    await generic.confirmElementIsVisible(magento.emailText);
    await generic.enterText(magento.emailField, 'bianca.apetrei09@gmail.com');

    await generic.confirmElementIsVisible(magento.firstNameText);
    await generic.enterText(magento.firstNameField, 'Bianca');

    await generic.confirmElementIsVisible(magento.lastNameText);
    await generic.enterText(magento.lastNameText, 'Apetrei');

    await generic.confirmElementIsVisible(magento.companyText);
    await generic.enterText(magento.companyField, 'No Company');

    await generic.confirmElementIsVisible(magento.streetText);
    await generic.enterText(magento.streetAddressField, 'str. Marghitas 9');

    await generic.confirmElementIsVisible(magento.cityText);
    await generic.enterText(magento.cityField, 'Mosnita Veche');

    await generic.confirmElementIsVisible(magento.countryText);
    await generic.selectOption(magento.romaniaOption, 'Romania'); 

    await generic.confirmElementIsVisible(magento.stateProvinceText);
    await generic.selectOption(magento.regionSelect, 'Timiş');

    await generic.confirmElementIsVisible(magento.postcodeText);
    await generic.enterText(magento.postcodeField,'307287');

    await generic.confirmElementIsVisible(magento.telephoneText);
    await generic.enterText(magento.telephoneField,'0728456123');

    await generic.confirmElementIsVisible(magento.shippingMethodsTitle);

    // Check shipping method elements
    await generic.confirmElementIsVisible(magento.flatRateRadio);
    await generic.confirmElementIsVisible(magento.flatRatePrice);
    await generic.confirmElementIsVisible(magento.flatRateMethodLabel);
    await generic.confirmElementIsVisible(magento.flatRateCarrierLabel);

    await generic.confirmElementIsVisible(magento.buttonNext);
    await page.waitForTimeout(3000);
    await generic.clickElement(magento.buttonNext);

    // Payment method page
    await page.waitForTimeout(10000);
    await generic.waitForPageToFullyLoad()
    await generic.confirmElementIsVisible(magento.titlePaymentMethod);
    await generic.confirmTextContains(magento.billingOrderDetails, `Bianca Apetrei
    str. Marghitas 9
    Mosnita Veche, Timiş 307287
    Romania
    0728456123`);
 
    // Order summary
    await generic.confirmElementIsVisible(magento.titleOrderSummary);
    await generic.confirmText(magento.titleOrderSummary, 'Order Summary');

    await generic.clickElement(magento.buttonPlaceOrder)

    // Order placed successfully
    await page.waitForTimeout(10000);
    await generic.confirmText(magento.textThankYouForYourOrder, 'Thank you for your purchase!')
    await generic.confirmTextContains(magento.textYourOrderNumber, 'Your order # is: ')
    await generic.confirmText(magento.textEmailOrderConfirmation, 'We\'ll email you an order confirmation with details and tracking info.')
    await generic.confirmText(magento.textYouCanTrackOrder, 'You can track your order status by creating an account.')
    await generic.confirmTextContains(magento.emailLabel, 'Email Address')
    await generic.confirmText(magento.emailValue, 'bianca.apetrei09@gmail.com')

    await generic.confirmElementIsVisible(magento.buttoncreateAccount)
    await generic.confirmTextContains(magento.buttoncreateAccount, 'Create an Account')
  });

  // 'Order item from woman category on Magento page'
  
});