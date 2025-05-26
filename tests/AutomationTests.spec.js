// @ts-check
import { test, expect } from '@playwright/test';
import MagentoPageObjects from '../PageObjects/MagentoPageObjects';
import Generic from '../PageObjects/Generic'

test.describe('Short tests', () => {
  let magento;

  test.beforeEach(async ({ page }) => {
    magento = new MagentoPageObjects(page);
    await page.goto('https://magento.softwaretestingboard.com/');
  });

  test('Home Page has proper title', async ({ page }) => {
    await expect(page).toHaveTitle('Home Page');
  });

  // Check menu header
  test('Home Page menu', async ({ page }) => {
    const generic = new Generic(page);

    await generic.confirmElementIsVisible(magento.menuWhatsNew);
    await generic.confirmElementIsVisible(magento.menuWomen);
    await generic.confirmElementIsVisible(magento.menuMen);
    await generic.confirmElementIsVisible(magento.menuGear);
    await generic.confirmElementIsVisible(magento.menuTraining);
    await generic.confirmElementIsVisible(magento.menuSale);

    await generic.clickElement(magento.menuWhatsNew);
    await generic.confirmText(magento.pageTitleWrapper, 'What\'s New');

    await generic.clickElement(magento.menuWomen);
    await generic.confirmText(magento.pageTitleWrapper, 'Women');

    await generic.clickElement(magento.menuMen);
    await generic.confirmText(magento.pageTitleWrapper, 'Men');

    await generic.clickElement(magento.menuGear);
    await generic.confirmText(magento.pageTitleWrapper, 'Gear');

    await generic.clickElement(magento.menuTraining);
    await generic.confirmText(magento.pageTitleWrapper, 'Training');
    
    await generic.clickElement(magento.menuSale);
    await generic.confirmText(magento.pageTitleWrapper, 'Sale');
  });

  // Add test for product page layout
    test('Product Page', async ({ page }) => {
    const generic = new Generic(page);

    await generic.confirmElementIsVisible(magento.menuSale);
    await generic.clickElement(magento.menuSale);
    await generic.confirmText(magento.pageTitleWrapper, 'Sale');

    await generic.confirmElementIsVisible(magento.fitnessEquipment);
    await generic.clickElement(magento.fitnessEquipment);

    await generic.confirmElementIsVisible(magento.pageTitleWrapper);
    await generic.confirmText(magento.pageTitleWrapper, 'Fitness Equipment');
    
    await generic.clickElement(magento.productLinkSpriteFoamRoller);
    
    await generic.confirmText(magento.pageTitleWrapper, 'Sprite Foam Roller');
    await generic.confirmTextContains(magento.AddFirstReviewLink, 'Be the first to review this product');

    await generic.confirmText(magento.productPrice,'$19.00');
    await generic.confirmText(magento.stockAvailable, 'In stock');

    await generic.confirmText(magento.qtyLabel, 'Qty');
    await generic.confirmElementIsVisible(magento.qtyInput);
    await generic.confirmValue(magento.qtyInput, '1');

    await generic.confirmElementIsVisible(magento.addToCartButton);
    await generic.confirmElementIsVisible(magento.addToWishList);
    await generic.confirmElementIsVisible(magento.addToCompare);

    await generic.confirmElementIsVisible(magento.detailsTab);
    await generic.confirmElementIsVisible(magento.detailsContent);
    await generic.confirmElementIsVisible(magento.productDescription);

    await generic.confirmText(magento.detailsTab, 'Details');
    await generic.confirmTextContains(magento.detailsContent, 'It hurts so good to use the Sprite Foam Roller on achy, tired muscles for myofascial massage therapy. Or you can add this fundamental piece to your Pilates and yoga accouterment, or apply towards core stability, strengthening and balance exercise. ');
    await generic.checkListContainsAllTexts(magento.productDescription, [
      "6'' wide by 12'' long.",
      "Safe for myofascial release.",
      "EPP or PE foam options.",
      "Solid, dense, closed-cell foam."
    ]); 
    
    await generic.confirmElementIsVisible(magento.moreInfoLink);
    await generic.clickElement(magento.moreInfoLink);
    await generic.confirmText(magento.activityLabel, 'Activity');
    await generic.confirmText(magento.materialLabel, 'Material');
    await generic.confirmText(magento.genderLabel, 'Gender');
    await generic.confirmText(magento.categoryLabel, 'Category');
    
    await generic.confirmTextContains(magento.activityValue, 'Yoga, Gym');
    await generic.confirmTextContains(magento.materialValue, 'Foam');
    await generic.confirmTextContains(magento.genderValue, 'Men, Women, Unisex');
    await generic.confirmTextContains(magento.categoryValue, 'Exercise');

    await generic.confirmElementIsVisible(magento.reviewsLink);
    await generic.clickElement(magento.reviewsLink);
    await generic.confirmElementIsVisible(magento.reviewForm);
    
    await generic.confirmElementIsVisible(magento.ratingLabel);
    await generic.confirmText(magento.ratingLabel, 'Rating');
    await generic.confirmElementIsVisible(magento.rating1Star);
    await generic.confirmElementIsVisible(magento.rating2Star);
    await generic.confirmElementIsVisible(magento.rating3Star);
    await generic.confirmElementIsVisible(magento.rating4Star);
    await generic.confirmElementIsVisible(magento.rating5Star);

    await generic.confirmElementIsVisible(magento.nicknameLabel);
    await generic.confirmText(magento.nicknameLabel, 'Nickname');
    await generic.confirmElementIsVisible(magento.nicknameInput);

    await generic.confirmElementIsVisible(magento.summaryLabel);
    await generic.confirmText(magento.summaryLabel, 'Summary');
    await generic.confirmElementIsVisible(magento.summaryInput);

    await generic.confirmElementIsVisible(magento.reviewLabel);
    await generic.confirmText(magento.reviewLabel, 'Review');
    await generic.confirmElementIsVisible(magento.reviewTextarea);

    await generic.confirmElementIsVisible(magento.submitReviewButton);
    await generic.confirmText(magento.submitReviewButton, 'Submit Review');

  });

  // Add empty review for product - error
    test('Add empty review for product - error', async ({ page }) => {
    const generic = new Generic(page);

    // Search for product
    await generic.enterText(magento.searchInput, 'shirt');
    await magento.searchInput.press('Enter');

    // Select first product
    await generic.clickElement(magento.productLinks.first());
    await page.waitForTimeout(2500);

    // check elements are visible
    await generic.confirmElementIsVisible(magento.reviewsLink);
    await generic.clickElement(magento.reviewsLink);
    await generic.confirmElementIsVisible(magento.reviewForm);
    
    await generic.confirmElementIsVisible(magento.ratingLabel);
    await generic.confirmText(magento.ratingLabel, 'Rating');
    await generic.confirmElementIsVisible(magento.rating1Star);
    await generic.confirmElementIsVisible(magento.rating2Star);
    await generic.confirmElementIsVisible(magento.rating3Star);
    await generic.confirmElementIsVisible(magento.rating4Star);
    await generic.confirmElementIsVisible(magento.rating5Star);

    await generic.confirmElementIsVisible(magento.nicknameLabel);
    await generic.confirmText(magento.nicknameLabel, 'Nickname');
    await generic.confirmElementIsVisible(magento.nicknameInput);

    await generic.confirmElementIsVisible(magento.summaryLabel);
    await generic.confirmText(magento.summaryLabel, 'Summary');
    await generic.confirmElementIsVisible(magento.summaryInput);

    await generic.confirmElementIsVisible(magento.reviewLabel);
    await generic.confirmText(magento.reviewLabel, 'Review');
    await generic.confirmElementIsVisible(magento.reviewTextarea);

    await generic.confirmElementIsVisible(magento.submitReviewButton);
    await generic.confirmText(magento.submitReviewButton, 'Submit Review');
    await generic.clickElement(magento.submitReviewButton);

    // expect errors to be displayed for mandatory fields'
    await generic.confirmText(magento.ratingError, 'Please select one of each of the ratings above.');
    await generic.confirmText(magento.nicknameError, 'This is a required field.');
    await generic.confirmText(magento.summaryError, 'This is a required field.');
    await generic.confirmText(magento.reviewError, 'This is a required field.');
  });  

  // Add review for product
    test('Add review for product', async ({ page }) => {
    const generic = new Generic(page);

    // Search for product
    await generic.enterText(magento.searchInput, 'shirt');
    await magento.searchInput.press('Enter');

    // Select first product
    await generic.clickElement(magento.productLinks.first());
    await page.waitForTimeout(2500);

    // check elements are visible
    await generic.confirmElementIsVisible(magento.reviewsLink);
    await generic.clickElement(magento.reviewsLink);
    await generic.confirmElementIsVisible(magento.reviewForm);
    
    await generic.confirmElementIsVisible(magento.ratingLabel);
    await generic.confirmText(magento.ratingLabel, 'Rating');
    await generic.confirmElementIsVisible(magento.rating1Star);
    await generic.confirmElementIsVisible(magento.rating2Star);
    await generic.confirmElementIsVisible(magento.rating3Star);
    await generic.confirmElementIsVisible(magento.rating4Star);
    await generic.confirmElementIsVisible(magento.rating5Star);

    await generic.confirmElementIsVisible(magento.nicknameLabel);
    await generic.confirmText(magento.nicknameLabel, 'Nickname');
    await generic.confirmElementIsVisible(magento.nicknameInput);

    await generic.confirmElementIsVisible(magento.summaryLabel);
    await generic.confirmText(magento.summaryLabel, 'Summary');
    await generic.confirmElementIsVisible(magento.summaryInput);

    await generic.confirmElementIsVisible(magento.reviewLabel);
    await generic.confirmText(magento.reviewLabel, 'Review');
    await generic.confirmElementIsVisible(magento.reviewTextarea);

    await generic.confirmElementIsVisible(magento.submitReviewButton);
    await generic.confirmText(magento.submitReviewButton, 'Submit Review');

    await generic.enterText(magento.nicknameInput, 'JaneDoe');
    await generic.enterText(magento.summaryInput, 'Great product!');
    await generic.enterText(magento.reviewTextarea, 'Really enjoyed using this.');
    await generic.clickElement(magento.rating5Star);
    await generic.clickElement(magento.submitReviewButton);

    await generic.confirmElementIsVisible(magento.reviewSuccessMessage);
    await generic.confirmText(magento.reviewSuccessMessage, 'You submitted your review for moderation.');
  }); 

  // Check empty mini-cart
  test('Check empty mini-cart', async ({ page }) => {
    const generic = new Generic(page);

    await generic.clickElement(magento.cartIcon);
    await generic.confirmText(magento.emptyCartText, 'You have no items in your shopping cart.');
    await generic.clickElement(magento.closeMiniCartButton);
  });
  
  // Search wrong product
  test('Search wrong product', async ({ page }) => {
    const generic = new Generic(page);

    await generic.enterText(magento.searchInput, 'foundation');
    await magento.searchInput.press('Enter');

    await generic.confirmTextContains(magento.pageTitleWrapper,   "Search results for: 'foundation'");
    await generic.confirmElementIsVisible(magento.noResultsText);
    await generic.confirmText(magento.noResultsText, 'Your search returned no results.');
  });

  // Try to add item with 0 quantity to cart
    test('Try to add item with 0 quantity to cart - error', async ({ page }) => {
    const generic = new Generic(page);

    // Search for product
    await generic.enterText(magento.searchInput, 'shirt');
    await magento.searchInput.press('Enter');

    // Select first product
    await generic.clickElement(magento.productLinks.first());
    await page.waitForTimeout(2500);

    // Select size and color
    await generic.confirmText(magento.sizeText, 'Size');
    await generic.clickElement(magento.sizeOption('L'));
    await generic.confirmText(magento.colorText, 'Color');
    await generic.clickElement(magento.colorOption('Blue'));
    
    await generic.confirmText(magento.qtyLabel, 'Qty')
    await generic.confirmElementIsVisible(magento.qtyInput);
    await generic.confirmValue(magento.qtyInput, '1');

    await generic.enterText(magento.qtyInput, '0');
    await magento.searchInput.press('Enter');
    await generic.confirmValue(magento.qtyInput, '0');

    await generic.confirmElementIsVisible(magento.addToCartButton);
    await generic.clickElement(magento.addToCartButton);

    await generic.confirmElementIsVisible(magento.qtyErrorMessage);
    await generic.confirmText(magento.qtyErrorMessage, 'Please enter a quantity greater than 0.');
  }); 

  // Try to add item without mandatory fields to cart - error
    test('Try to add item without mandatory fields to cart - error', async ({ page }) => {
    const generic = new Generic(page);

    // Search for product
    await generic.enterText(magento.searchInput, 'shirt');
    await magento.searchInput.press('Enter');

    // Select first product
    await generic.clickElement(magento.productLinks.first());
    await page.waitForTimeout(2500);
    
    await generic.confirmText(magento.qtyLabel, 'Qty');
    await generic.confirmElementIsVisible(magento.qtyInput);
    await generic.confirmValue(magento.qtyInput, '1');

    await generic.confirmElementIsVisible(magento.addToCartButton);
    await generic.clickElement(magento.addToCartButton);
    
    await generic.confirmElementIsVisible(magento.sizeError);
    await generic.confirmText(magento.sizeError, 'This is a required field.');

    await generic.confirmElementIsVisible(magento.colorError);
    await generic.confirmText(magento.colorError, 'This is a required field.');
  }); 

  // Delete Item from mini-cart
    test('Delete item from mini-cart', async ({ page }) => {
    const generic = new Generic(page);

    // Search for product
    await generic.enterText(magento.searchInput, 'shirt');
    await magento.searchInput.press('Enter');

    // Select first product
    await generic.clickElement(magento.productLinks.first());
    await page.waitForTimeout(2500);

    // Select size, color and quantity
    await generic.confirmText(magento.sizeText, 'Size');
    await generic.clickElement(magento.sizeOption('L'));
    await generic.confirmText(magento.colorText, 'Color');
    await generic.clickElement(magento.colorOption('Orange'));
    await generic.confirmText(magento.qtyLabel, 'Qty');
    await generic.confirmElementIsVisible(magento.qtyInput);
    await generic.confirmValue(magento.qtyInput, '1');

    await generic.confirmElementIsVisible(magento.addToCartButton);
    await generic.clickElement(magento.addToCartButton);
    
    await page.waitForTimeout(2500);
    await generic.clickElement(magento.cartIcon);
    await generic.clickElement(magento.removeItemFromMiniCartButton);

    // check modal 
    await generic.confirmElementIsVisible(magento.modalContainer);
    await generic.confirmElementIsVisible(magento.modalMessageText);
    await generic.confirmElementIsVisible(magento.modalOkButton);
    await generic.confirmElementIsVisible(magento.modalCancelButton);
    await generic.confirmElementIsVisible(magento.modalCloseButton);

    await generic.confirmText(magento.modalMessageText, 'Are you sure you would like to remove this item from the shopping cart?');
    await generic.confirmText(magento.modalOkButton, 'OK');
    await generic.confirmText(magento.modalCancelButton, 'Cancel');

    await generic.clickElement(magento.modalOkButton);

    // check empty mini-cart
    await generic.clickElement(magento.cartIcon);
    await generic.confirmText(magento.emptyCartText, 'You have no items in your shopping cart.');
    await generic.clickElement(magento.closeMiniCartButton);
  });

  // Check mandatory fields from order checkout
  test('Check empty mandatory fields from order checkout - error', async ({ page }) => {
    const generic = new Generic(page);

    test.setTimeout(180000);

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
    await generic.confirmElementIsVisible(magento.firstNameText);
    await generic.confirmElementIsVisible(magento.lastNameText);
    await generic.confirmElementIsVisible(magento.companyText);
    await generic.confirmElementIsVisible(magento.streetText);
    await generic.confirmElementIsVisible(magento.cityText);
    await generic.confirmElementIsVisible(magento.countryText);
    await generic.confirmElementIsVisible(magento.stateProvinceText);
    await generic.confirmElementIsVisible(magento.postcodeText);
    await generic.confirmElementIsVisible(magento.telephoneText);
    await generic.confirmElementIsVisible(magento.shippingMethodsTitle);

    // Check shipping method elements
    await generic.confirmElementIsVisible(magento.flatRateRadio);
    await generic.confirmText(magento.flatRatePrice('5.00'), '$5.00');
    await generic.confirmElementIsVisible(magento.flatRateMethodLabel);
    await generic.confirmElementIsVisible(magento.flatRateCarrierLabel);

    await generic.confirmElementIsVisible(magento.buttonNext);
    // await page.waitForTimeout(3000);
    await generic.clickElement(magento.buttonNext);
    await generic.confirmElementIsVisible(magento.shippingMethodMissingMessage);
    await generic.confirmText(magento.shippingMethodMissingMessage, 'The shipping method is missing. Select the shipping method and try again.');
    
    await generic.clickElement(magento.flatRateRadio);
    await page.waitForTimeout(3000);
    await generic.clickElement(magento.buttonNext);

    // Check errors for mandatory fields
    await generic.confirmElementIsVisible(magento.customerEmailError);
    await generic.confirmElementIsVisible(magento.firstnameErrorMessage);
    await generic.confirmElementIsVisible(magento.lastnameErrorMessage);
    await generic.confirmElementIsVisible(magento.streetErrorMessage);
    await generic.confirmElementIsVisible(magento.cityErrorMessage);
    await generic.confirmElementIsVisible(magento.stateProvinceErrorMessage);
    await generic.confirmElementIsVisible(magento.zipPostalCodeError);
    await generic.confirmElementIsVisible(magento.phoneError);

    await generic.confirmText(magento.customerEmailError, 'This is a required field.');
    await generic.confirmText(magento.firstnameErrorMessage, 'This is a required field.');
    await generic.confirmText(magento.lastnameErrorMessage, 'This is a required field.');
    await generic.confirmText(magento.streetErrorMessage, 'This is a required field.');
    await generic.confirmText(magento.cityErrorMessage, 'This is a required field.');
    await generic.confirmText(magento.stateProvinceErrorMessage, 'This is a required field.');
    await generic.confirmText(magento.zipPostalCodeError, 'This is a required field.');
    await generic.confirmText(magento.phoneError, 'This is a required field.');
  });  

  // Check invlid voucher
  test('Check invlid voucher - error', async ({ page }) => {
    const generic = new Generic(page);

    test.setTimeout(180000);

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
    await generic.enterText(magento.emailField, 'bianca.apetrei09@gmail.com');
    await generic.enterText(magento.firstNameField, 'Bianca');
    await generic.enterText(magento.lastNameText, 'Apetrei');
    await generic.enterText(magento.companyField, 'No Company');
    await generic.enterText(magento.streetAddressField, 'str. Marghitas 9');
    await generic.enterText(magento.cityField, 'Mosnita Veche');
    await generic.selectOption(magento.romaniaOption, 'Romania'); 
    await generic.selectOption(magento.regionSelect, 'Timiş');
    await generic.enterText(magento.postcodeField,'307287');
    await generic.enterText(magento.telephoneField,'0728456123');
    await generic.confirmText(magento.flatRatePrice('5.00'), '$5.00');

    await generic.confirmElementIsVisible(magento.buttonNext);
    await page.waitForTimeout(3000);
    await generic.clickElement(magento.buttonNext);

    // Payment method page
    await page.waitForTimeout(10000);
    await generic.waitForPageToFullyLoad()
    await generic.confirmElementIsVisible(magento.titlePaymentMethod);

    // Check mandatory field for voucher
    await generic.confirmElementIsVisible(magento.discountSection);
    await generic.clickElement(magento.discountSection);
    await generic.confirmElementIsVisible(magento.discountCodeInput);
    await generic.confirmElementIsVisible(magento.applyDiscountButton);
    await generic.clickElement(magento.applyDiscountButton);
    await generic.confirmElementIsVisible(magento.discountCodeError);
    await generic.confirmText(magento.discountCodeError, 'This is a required field.');

    // add invalid voucher
    await generic.enterText(magento.discountCodeInput, '10off');
    await generic.clickElement(magento.applyDiscountButton);
    await generic.confirmElementIsVisible(magento.invalidCouponError);
    await generic.confirmTextContains(magento.invalidCouponError, 'The coupon code isn\'t valid. Verify the code and try again.')
  });
})

test.describe('Purchase item automation', () => {
  let magento;

  test.beforeEach(async ({ page }) => {
    magento = new MagentoPageObjects(page);
    await page.goto('https://magento.softwaretestingboard.com/');
  });

  test('Order searched item on Magento page', async ({ page }) => {
    const generic = new Generic(page);
    const randomEmail = `user${Math.floor(Math.random() * 10000)}@example.com`;

    test.setTimeout(180000);

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
    await generic.enterText(magento.emailField, randomEmail);

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
    await generic.confirmText(magento.flatRatePrice('5.00'), '$5.00');
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
    await generic.clickElement(magento.buttonPlaceOrder);

    // Order placed successfully
    await page.waitForTimeout(10000);
    await generic.confirmText(magento.pageTitleWrapper, 'Thank you for your purchase!');
    await generic.confirmTextContains(magento.textYourOrderNumber, 'Your order # is: ');
    await generic.confirmText(magento.textEmailOrderConfirmation, 'We\'ll email you an order confirmation with details and tracking info.');
    await generic.confirmText(magento.textYouCanTrackOrder, 'You can track your order status by creating an account.');
    await generic.confirmTextContains(magento.emailLabel, 'Email Address');
    await generic.confirmText(magento.emailValue, randomEmail);

    await generic.confirmElementIsVisible(magento.buttoncreateAccount);
    await generic.confirmTextContains(magento.buttoncreateAccount, 'Create an Account');
  });

  test('Order item from woman category on Magento page - update quantity from mini-cart', async ({ page }) => {
    const generic = new Generic(page);
    const randomEmail = `user${Math.floor(Math.random() * 10000)}@example.com`;

    test.setTimeout(180000);

    // Search for product
    await page.waitForTimeout(2500);
    await generic.hoverElement(magento.menuWomen);
    await generic.hoverElement(magento.menuWomenTops);
    await generic.clickElement(magento.menuWomenHoodies);

    // Select product
    await page.waitForTimeout(2500);
    await generic.clickElement(magento.cassiaSweatshirtLink);
    await expect(page).toHaveTitle('Cassia Funnel Sweatshirt');

    // Select size and color
    await generic.confirmText(magento.sizeText, 'Size');
    await generic.clickElement(magento.sizeOption('M'));
    await generic.confirmText(magento.colorText, 'Color');
    await generic.clickElement(magento.colorOption('White'));
    
    // Check proper values selected
    await generic.confirmText(magento.selectedSize, 'M');
    await generic.confirmText(magento.selectedColor, 'White');

    // Check price
    await generic.confirmText(magento.price, '$48.00');

    // Add to cart
    await generic.clickElement(magento.addToCartButton);

    // Wait for success and open cart
    await generic.confirmElementIsVisible(magento.successMessage);
    await generic.clickElement(magento.cartIcon);
    await page.waitForTimeout(2500);

    // Check cart subtotal price
    await generic.confirmText(magento.cartSubtotal, '$48.00');
    await generic.confirmValue(magento.productQuantityMiniCart, '1');
    await generic.clickElement(magento.productQuantityMiniCart);
    await generic.enterText(magento.productQuantityMiniCart, '2');
    await magento.productQuantityMiniCart.press('Enter');
    await generic.clickElement(magento.buttonUpdateQuantityMiniCart);
    await generic.confirmText(magento.cartSubtotal, '$96.00');


    // Checkout
    await generic.confirmElementIsVisible(magento.checkoutButton);
    await generic.clickElement(magento.checkoutButton);

    // Wait for checkout page/container to appear
    await page.waitForTimeout(2500);
    await generic.confirmElementIsVisible(magento.checkoutContainer);

    // Insert correct data for order
    await generic.waitForPageToFullyLoad();
    await generic.confirmElementIsVisible(magento.emailText);
    await generic.enterText(magento.emailField, randomEmail);

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
    await generic.confirmText(magento.flatRatePrice('10.00'), '$10.00');
    await generic.confirmElementIsVisible(magento.flatRateMethodLabel);
    await generic.confirmElementIsVisible(magento.flatRateCarrierLabel);

    await generic.confirmElementIsVisible(magento.buttonNext);
    await page.waitForTimeout(3000);
    await generic.clickElement(magento.buttonNext);

    // Payment method page
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
    await generic.confirmText(magento.orderTotalPrice('106.00'), '$106.00');
    
    await page.waitForTimeout(2500);
    await generic.clickElement(magento.buttonPlaceOrder)

    // Order placed successfully
    await page.waitForTimeout(3000);
    await page.waitForSelector('text=Thank you for your purchase!', { timeout: 20000 });
    await generic.confirmText(magento.pageTitleWrapper, 'Thank you for your purchase!');
    await generic.confirmTextContains(magento.textYourOrderNumber, 'Your order # is: ');
    await generic.confirmText(magento.textEmailOrderConfirmation, 'We\'ll email you an order confirmation with details and tracking info.');
    await generic.confirmText(magento.textYouCanTrackOrder, 'You can track your order status by creating an account.');
    await generic.confirmTextContains(magento.emailLabel, 'Email Address');
    await generic.confirmText(magento.emailValue, randomEmail);

    await generic.confirmElementIsVisible(magento.buttoncreateAccount);
    await generic.confirmTextContains(magento.buttoncreateAccount, 'Create an Account');
  });

  test('Apply discount code and check order summary', async ({ page }) => {
    const generic = new Generic(page);
    const randomEmail = `user${Math.floor(Math.random() * 10000)}@example.com`;

    test.setTimeout(180000);

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
    await generic.enterText(magento.emailField, randomEmail);
    await generic.enterText(magento.firstNameField, 'Bianca');
    await generic.enterText(magento.lastNameText, 'Apetrei');
    await generic.enterText(magento.companyField, 'No Company');
    await generic.enterText(magento.streetAddressField, 'str. Marghitas 9');
    await generic.enterText(magento.cityField, 'Mosnita Veche');
    await generic.selectOption(magento.romaniaOption, 'Romania'); 
    await generic.selectOption(magento.regionSelect, 'Timiş');
    await generic.enterText(magento.postcodeField,'307287');
    await generic.enterText(magento.telephoneField,'0728456123');

    await generic.confirmElementIsVisible(magento.shippingMethodsTitle);

    // Check shipping method elements
    await generic.confirmElementIsVisible(magento.flatRateRadio);
    await generic.confirmText(magento.flatRatePrice('5.00'), '$5.00');

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

    // Check total value without discount
    await generic.confirmText(magento.orderTotalAmountSummary, '$27.00');

    // Check mandatory field for voucher
    await generic.confirmElementIsVisible(magento.discountSection);
    await generic.clickElement(magento.discountSection);
    await generic.confirmElementIsVisible(magento.discountCodeInput);
    await generic.confirmElementIsVisible(magento.applyDiscountButton);
    await generic.enterText(magento.discountCodeInput, '20POFF');
    await generic.clickElement(magento.applyDiscountButton);

    await generic.confirmTextContains(magento.validCouponSuccessMessage, 'Your coupon was successfully applied.');
    await page.waitForTimeout(3000);
 
    // Order summary
    await generic.confirmElementIsVisible(magento.titleOrderSummary);
    await generic.confirmText(magento.titleOrderSummary, 'Order Summary');
    await generic.confirmElementIsVisible(magento.discountAmountSummary);
    await generic.confirmText(magento.discountAmountSummary, '-$4.40');
    await generic.confirmText(magento.orderTotalAmountSummary, '$22.60');
    
    // Cancel discount coupon
    await generic.confirmText(magento.cancelDiscountButton, 'Cancel coupon');
    await generic.clickElement(magento.cancelDiscountButton);
    await generic.confirmTextContains(magento.validCouponSuccessMessage, 'Your coupon was successfully removed.');
    await generic.confirmText(magento.orderTotalAmountSummary, '$27.00');   
    
    // Apply discount again and order
    await generic.enterText(magento.discountCodeInput, '20POFF');
    await generic.clickElement(magento.applyDiscountButton);

    await page.waitForTimeout(3000);
    await generic.clickElement(magento.buttonPlaceOrder);

    // Order placed successfully
    await page.waitForTimeout(5000);
    await page.waitForSelector('text=Thank you for your purchase!', { timeout: 20000 });
    await generic.confirmText(magento.pageTitleWrapper, 'Thank you for your purchase!');
    await generic.confirmTextContains(magento.textYourOrderNumber, 'Your order # is: ');
    await generic.confirmText(magento.textEmailOrderConfirmation, 'We\'ll email you an order confirmation with details and tracking info.');
    await generic.confirmText(magento.textYouCanTrackOrder, 'You can track your order status by creating an account.');
    await generic.confirmTextContains(magento.emailLabel, 'Email Address');
    await generic.confirmText(magento.emailValue, randomEmail);

    await generic.confirmElementIsVisible(magento.buttoncreateAccount);
    await generic.confirmTextContains(magento.buttoncreateAccount, 'Create an Account');
  });

  test('Create Account after ordering', async ({ page }) => {
    const generic = new Generic(page);
    const randomEmail = `user${Math.floor(Math.random() * 10000)}@example.com`;

    test.setTimeout(180000);

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
    await generic.enterText(magento.emailField, randomEmail);

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
    await generic.confirmText(magento.flatRatePrice('5.00'), '$5.00');
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
    await generic.clickElement(magento.buttonPlaceOrder);

    // Order placed successfully
    await page.waitForTimeout(10000);
    await generic.confirmText(magento.pageTitleWrapper, 'Thank you for your purchase!');
    await generic.confirmTextContains(magento.textYourOrderNumber, 'Your order # is: ');
    await generic.confirmText(magento.textEmailOrderConfirmation, 'We\'ll email you an order confirmation with details and tracking info.');
    await generic.confirmText(magento.textYouCanTrackOrder, 'You can track your order status by creating an account.');
    await generic.confirmTextContains(magento.emailLabel, 'Email Address');
    await generic.confirmText(magento.emailValue, randomEmail);

    await generic.confirmElementIsVisible(magento.buttoncreateAccount);
    await generic.confirmTextContains(magento.buttoncreateAccount, 'Create an Account');

    await generic.clickElement(magento.buttoncreateAccount);

    await generic.confirmText(magento.pageTitleWrapper, 'Create New Customer Account');

    await generic.enterText(magento.passwordField, 'Password1#');
    await generic.enterText(magento.passwordConfirmationField, 'Password1#');
    
    await generic.confirmText(magento.createAccountButton, 'Create an Account');
    await generic.clickElement(magento.createAccountButton);

    await generic.confirmText(magento.successRegisterMessage, 'Thank you for registering with Main Website Store.');
    await generic.confirmText(magento.pageTitleWrapper, 'My Account');
  });

});