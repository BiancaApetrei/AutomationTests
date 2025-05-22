// @ts-check
import { test, expect } from '@playwright/test';
import MagentoPageObjects from '../PageObjects/MagentoPageObjects';


test.describe('Purchase item automation', () => {
  let magento;

  test.beforeEach(async ({ page }) => {
    magento = new MagentoPageObjects(page);
    await page.goto('https://magento.softwaretestingboard.com/');
  });

  test('Page has proper title', async ({ page }) => {
    await expect(page).toHaveTitle('Home Page');
  });

  test('Order searched item on Magento page', async ({ page }) => {
    // Search for product
    await magento.searchInput.fill('shirt');
    await magento.searchInput.press('Enter');

    // Select first product
    await magento.productLinks.first().click();

    // Select size and color
    await expect(magento.sizeText).toHaveText('Size');
    await magento.sizeOption('L').click();
    await expect(magento.colorText).toHaveText('Color');
    await magento.colorOption('Blue').click();
    
    //check proper values selected
    await expect(magento.selectedSize).toHaveText('L');
    await expect(magento.selectedColor).toHaveText('Blue');

    // Add to cart
    await magento.addToCartButton.click();

    // Wait for success and open cart
    await expect(magento.successMessage).toBeVisible();
    await magento.cartIcon.click();
    await page.waitForTimeout(2500);

    // Checkout
    await magento.checkoutButton.waitFor();
    await magento.checkoutButton.click();

    // Wait for checkout page/container to appear
    await page.waitForTimeout(2500);
    await expect(page.locator('.checkout-container')).toBeVisible({ timeout: 5000 });

    // Insert correct data for order
    await page.waitForLoadState('networkidle');
    await expect(magento.emailText).toBeVisible({ timeout: 5000 });
    await magento.emailField.fill('bianca.apetrei09@gmail.com');

    await expect(magento.firstNameText).toBeVisible({ timeout: 5000 });
    await magento.firstNameField.fill('Bianca');

    await expect(magento.lastNameText).toBeVisible({ timeout: 5000 });
    await magento.lastNameText.fill('Apetrei');

    await expect(magento.companyText).toBeVisible({ timeout: 5000 });
    await magento.companyField.fill('No Company');

    await magento.streetText.scrollIntoViewIfNeeded();
    await expect(magento.streetText).toBeVisible({ timeout: 5000 });
    await magento.streetAddressField.fill('str. Marghitas 9');

    await magento.cityText.scrollIntoViewIfNeeded();
    await expect(magento.cityText).toBeVisible({ timeout: 5000 });
    await magento.cityField.fill('Mosnita Veche');

    await magento.countrySelect.scrollIntoViewIfNeeded();
    await expect(magento.countryText).toBeVisible({ timeout: 5000 });
    await magento.romaniaOption.selectOption({ label: 'Romania' }); 

    await magento.regionSelect.scrollIntoViewIfNeeded();
    await expect(magento.stateProvinceText).toBeVisible({ timeout: 5000 });
    await magento.regionSelect.selectOption({ label: 'Timiş' });

    await expect(magento.postcodeText).toBeVisible({ timeout: 5000 });
    await magento.postcodeField.fill('307287');

    await expect(magento.telephoneText).toBeVisible({ timeout: 5000 });
    await magento.telephoneField.fill('0728456123');

    await magento.shippingMethodsTitle.waitFor({ state: 'visible' });
    await expect(magento.shippingMethodsTitle).toBeVisible();

    // check shipping method elements
    await expect(magento.flatRateRadio).toBeVisible();
    await expect(magento.flatRatePrice).toBeVisible();
    await expect(magento.flatRateMethodLabel).toBeVisible();
    await expect(magento.flatRateCarrierLabel).toBeVisible();

    await expect(magento.buttonNext).toBeVisible();
    await page.waitForTimeout(2000);
    magento.buttonNext.click();


    //payment method page
    await expect(magento.titlePaymentMethod).toBeVisible();
    await expect(magento.billingOrderDetails).toContainText(`Bianca Apetrei
    str. Marghitas 9
    Mosnita Veche, Timiş 307287
    Romania
    0728456123`);

    //order summary
    await expect(magento.titleOrderSummary).toBeVisible();
    await expect(magento.titleOrderSummary).toHaveText('Order Summary');
  });
});