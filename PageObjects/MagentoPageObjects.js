export default class MagentoPageObjects {
    constructor(page) {
    this.page = page;

    this.searchInput = page.locator('#search');
    this.productLinks = page.locator('.product-item-link');
    this.sizeText = page.locator('#option-label-size-143')
    this.sizeOption = (size) => page.locator(`div[option-label="${size}"]`);
    this.colorText = page.locator('#option-label-color-93')
    this.colorOption = (color) => page.locator(`div[option-label="${color}"]`);
    this.selectedSize = page.locator('div.swatch-attribute.size span.swatch-attribute-selected-option');
    this.selectedColor = page.locator('div.swatch-attribute.color span.swatch-attribute-selected-option');
    this.addToCartButton = page.locator('#product-addtocart-button');
    this.successMessage = page.locator('.message-success');
    this.cartIcon = page.locator('.showcart');
    this.checkoutButton = page.locator('#top-cart-btn-checkout');
    this.checkoutContainer = page.locator('.checkout-container');

    // Shipping Address Fields
    this.emailField = page.locator('#customer-email-fieldset input#customer-email');
    this.firstNameField = page.locator('input[name="firstname"]');
    this.lastNameField = page.locator('input[name="lastname"]');
    this.companyField = page.locator('input[name="company"]');
    this.streetAddressField = page.locator('input[name="street[0]"]');
    this.cityField = page.locator('input[name="city"]');
    this.regionSelect = page.locator('select[name="region_id"]');
    this.postcodeField = page.locator('input[name="postcode"]');
    this.countrySelect = page.locator('select[name="country_id"]');
    this.telephoneField = page.locator('input[name="telephone"]');
    this.romaniaOption = page.locator('select[name="country_id"]');
    this.regionSelect = page.locator('select[name="region_id"]');

    // Shipping Address Texts
    this.emailText = page.locator('form[data-role="email-with-possible-login"] label[for="customer-email"] span');
    this.firstNameText = page.locator('form#co-shipping-form').getByText('First Name');
    this.lastNameText = page.locator('form#co-shipping-form').getByText('Last Name');
    this.companyText = page.locator('form#co-shipping-form').getByText('Company');
    this.streetText = page.locator('form#co-shipping-form legend.label span').filter({ hasText: /^Street Address$/ });
    this.cityText = page.locator('form#co-shipping-form label.label span').filter({ hasText: /^City$/ });
    this.stateProvinceText = page.locator('div[name="shippingAddress.region_id"] label span');
    this.postcodeText = page.locator('form#co-shipping-form').getByText('Zip/Postal Code');
    this.countryText = page.locator('form#co-shipping-form').getByText('Country');
    this.telephoneText = page.locator('form#co-shipping-form').getByText('Phone Number');

    // Shipping methods
    this.shippingMethodsTitle = page.locator('div.step-title', { hasText: 'Shipping Methods' });

    this.flatRateRadio = page.locator('input[type="radio"][value="flatrate_flatrate"]');
    this.flatRatePrice = page.locator('tr.row:has(input[value="flatrate_flatrate"]) .col-price .price').getByText('$5.00');
    this.flatRateMethodLabel = page.locator('#label_method_flatrate_flatrate');
    this.flatRateCarrierLabel = page.locator('#label_carrier_flatrate_flatrate');

    this.buttonNext = page.locator('button[data-role="opc-continue"]').getByText('Next')

    // Payment method
    this.titlePaymentMethod = page.locator('div.step-title', {hasText: 'Payment Method'});
    this.billingOrderDetails = page.locator('div.billing-address-details')
    this.titleOrderSummary = page.locator('div.opc-block-summary span').getByText('Order Summary')

    this.buttonPlaceOrder = page.locator('button.action.primary.checkout[title="Place Order"]');
    this.textThankYouForYourOrder = page.locator("span.base[data-ui-id='page-title-wrapper']")
    this.textYourOrderNumber = page.locator('div.checkout-success p', { hasText: 'Your order #' })
    this.textEmailOrderConfirmation = page.locator('div.checkout-success p', {hasText: "We'll email you an order confirmation"});
    this.textYouCanTrackOrder = page.locator("p", {hasText: "You can track your order status by creating an account."});
    this.emailLabel = page.locator("p span", {hasText: "Email Address"});
    this.emailValue = page.locator("p span[data-bind='text: getEmailAddress()']");
    this.buttoncreateAccount = page.locator('a.action.primary[href*="delegateCreate"]');

  }
    
}