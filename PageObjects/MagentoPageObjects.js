export default class MagentoPageObjects {
    constructor(page) {
    this.page = page;

    this.searchInput = page.locator('#search');
    this.productLinks = page.locator('.product-item-link');
    this.sizeText = page.locator('#option-label-size-143');
    this.sizeOption = (size) => page.locator(`div[option-label="${size}"]`);
    this.colorText = page.locator('#option-label-color-93');
    this.colorOption = (color) => page.locator(`div[option-label="${color}"]`);
    this.selectedSize = page.locator('div.swatch-attribute.size span.swatch-attribute-selected-option');
    this.selectedColor = page.locator('div.swatch-attribute.color span.swatch-attribute-selected-option');
    this.addToCartButton = page.locator('#product-addtocart-button');
    this.successMessage = page.locator('.message-success');
    this.cartIcon = page.locator('.showcart');
    this.checkoutButton = page.locator('#top-cart-btn-checkout');
    this.checkoutContainer = page.locator('.checkout-container');
    this.emptyCartText = page.locator('strong.subtitle.empty', { hasText: 'You have no items in your shopping cart.' });
    this.closeMiniCartButton = page.locator('button#btn-minicart-close[title="Close"]');

    // No results from search page
    this.noResultsText = page.locator('div.message.notice', { hasText: 'Your search returned no results.' });

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
    this.flatRatePrice = (value) =>  page.locator('tr.row:has(input[value="flatrate_flatrate"]) .col-price .price[data-bind*="getFormattedPrice"]', {hasText: `$${value}`});    this.flatRateMethodLabel = page.locator('#label_method_flatrate_flatrate');
    this.flatRateCarrierLabel = page.locator('#label_carrier_flatrate_flatrate');

    this.buttonNext = page.locator('button[data-role="opc-continue"]').getByText('Next');

    // Payment method
    this.titlePaymentMethod = page.locator('div.step-title', {hasText: 'Payment Method'});
    this.billingOrderDetails = page.locator('div.billing-address-details');
    this.titleOrderSummary = page.locator('div.opc-block-summary span').getByText('Order Summary');

    // Order summary
    this.orderTotalPrice = (value) => page.locator(`tr.grand.totals .amount .price`, { hasText: `$${value}` });


    this.buttonPlaceOrder = page.locator('button.action.primary.checkout[title="Place Order"]');
    this.pageTitleWrapper = page.locator("span.base[data-ui-id='page-title-wrapper']");
    this.textYourOrderNumber = page.locator('div.checkout-success p', { hasText: 'Your order #' });
    this.textEmailOrderConfirmation = page.locator('div.checkout-success p', {hasText: "We'll email you an order confirmation"});

    this.textYouCanTrackOrder = page.locator("p:has-text('You can track your order status by creating an account.')");
    this.emailLabel = page.locator("p span", {hasText: "Email Address"});
    this.emailValue = page.locator("p span[data-bind='text: getEmailAddress()']");
    this.buttoncreateAccount = page.locator('a.action.primary[href*="delegateCreate"]');

    // menu headers
    this.menuWhatsNew = page.locator('a.level-top', { hasText: /^What's New$/ });
    this.menuWomen = page.locator('a.level-top', { hasText: /^Women$/ });
    this.menuMen = page.locator('a.level-top', { hasText: /^Men$/ });
    this.menuGear = page.locator('a.level-top', { hasText: /^Gear$/ });
    this.menuTraining = page.locator('a.level-top', { hasText: /^Training$/ });
    this.menuSale = page.locator('a.level-top', { hasText: /^Sale$/ });
      
    // menu women
    this.menuWomenTops = this.menuWomen.locator('xpath=following-sibling::ul//a[normalize-space(.)="Tops"]');
    this.menuWomenHoodies = this.menuWomen.locator('xpath=following-sibling::ul//a[normalize-space(.)="Hoodies & Sweatshirts"]');
    // Product link
    this.cassiaSweatshirtLink = page.locator('a.product-item-link', { hasText: 'Cassia Funnel Sweatshirt' });
    this.price = page.locator('#product-price-1146');
    this.cartSubtotal = page.locator('div.amount.price-container span.price-wrapper span.price');

    // update quantity from mini-cart window
    this.productQuantityMiniCart = page.locator('div.details-qty.qty input.item-qty.cart-item-qty');
    this.buttonUpdateQuantityMiniCart = page.locator('button.update-cart-item');

    // check product page
    this.fitnessEquipment = page.locator('div.categories-menu ul.items >> a', { hasText: /^Fitness Equipment$/ });
    this.productLinkSpriteFoamRoller = page.locator('a.product-item-link:has-text("Sprite Foam Roller")');
    this.AddFirstReviewLink = page.locator('a.action.add', { hasText: 'Be the first to review this product' })
    this.productPrice = page.locator('.product-item-info span[data-price-type="finalPrice"] span.price', { hasText: '$19.00' });
    this.stockAvailable = page.locator('div.stock.available[title="Availability"] >> span', { hasText: "In stock" });
    this.qtyLabel = page.locator('label:has-text("Qty")');
    this.qtyInput = page.locator('input.input-text.qty[type="number"][name="qty"][title="Qty"]');
    this.addToWishList = page.locator('div.product-addto-links a[data-action="add-to-wishlist"]');
    this.addToCompare = page.locator('div.product-addto-links a[data-role="add-to-links"].tocompare');

    this.detailsTab = page.locator('div.data.item.title[data-role="collapsible"]#tab-label-description a.data.switch');
    this.detailsContent = page.locator('div.data.item.content#description[data-role="content"]');
    this.productDescription = page.locator('div.product.attribute.description > div.value > ul');

    this.moreInfoLink = page.locator('a#tab-label-additional-title.data.switch[data-toggle="trigger"]');
    this.activityLabel = page.locator('th.col.label', { hasText: 'Activity' });
    this.materialLabel = page.locator('th.col.label', { hasText: 'Material' });
    this.genderLabel = page.locator('th.col.label', { hasText: 'Gender' });
    this.categoryLabel = page.locator('th.col.label', { hasText: 'Category' });
    this.activityValue = page.locator('td[data-th="Activity"]');
    this.materialValue = page.locator('td[data-th="Material"]');
    this.genderValue = page.locator('td[data-th="Gender"]');
    this.categoryValue = page.locator('td[data-th="Category"]');

    // product review area
    this.reviewsLink = page.locator('a.data.switch', { hasText: 'Reviews' });
    this.reviewTabContent = page.locator('div#reviews.data.item.content');
    this.reviewForm = this.reviewTabContent.locator('form#review-form');
    
    this.ratingLabel = this.reviewForm.locator('label#Rating_rating_label');
    this.rating1Star = this.reviewForm.locator('input#Rating_1');
    this.rating2Star = this.reviewForm.locator('input#Rating_2');
    this.rating3Star = this.reviewForm.locator('input#Rating_3');
    this.rating4Star = this.reviewForm.locator('input#Rating_4');
    this.rating5Star = this.reviewForm.locator('input#Rating_5');
    
    this.nicknameLabel = this.reviewForm.locator('label[for="nickname_field"]');
    this.nicknameInput = this.reviewForm.locator('input#nickname_field');

    this.summaryLabel = this.reviewForm.locator('label[for="summary_field"]');
    this.summaryInput = this.reviewForm.locator('input#summary_field');

    this.reviewLabel = this.reviewForm.locator('label[for="review_field"]');
    this.reviewTextarea = this.reviewForm.locator('textarea#review_field');

    this.submitReviewButton = this.reviewForm.locator('button[type="submit"].action.submit.primary');

    // empty review checks
    this.ratingError = page.locator('div.mage-error#ratings\\[4\\]-error');
    this.nicknameError = page.locator('div.mage-error#nickname_field-error');
    this.summaryError = page.locator('div.mage-error#summary_field-error');
    this.reviewError = page.locator('div.mage-error#review_field-error');
    this.reviewSuccessMessage = page.locator('div.message-success[data-ui-id="message-success"]');

    // 0 quantity add to cart error
    this.qtyErrorMessage = page.locator('div#qty-error');

    // empty mandatory fields for product - add to cart
    this.sizeError = page.locator('.swatch-attribute').filter({ has: page.locator('span.swatch-attribute-label', { hasText: 'Size' }) }).locator('div.mage-error');
    this.colorError = page.locator('.swatch-attribute').filter({ has: page.locator('span.swatch-attribute-label', { hasText: 'Color' }) }).locator('div.mage-error');

    // remove items from cart
    this.removeItemFromMiniCartButton = page.locator('a.action.delete', { hasText: 'Remove' });

    // modal for removing item
    this.modalContainer = page.locator('div.modal-inner-wrap[data-role="focusable-scope"]', {hasText: 'Are you sure you would like to remove this item'});    
    this.modalMessageText = page.locator('div.modal-content[data-role="content"] > div', {hasText: 'Are you sure you would like to remove this item'});
    this.modalCloseButton = this.modalContainer.locator('button.action-close[data-role="closeBtn"]');
    this.modalCancelButton = this.modalContainer.locator('button.action-dismiss[data-role="action"]', { hasText: 'Cancel' });
    this.modalOkButton = this.modalContainer.locator('button.action-accept[data-role="action"]', { hasText: 'OK' });

    // empty mandatory fields on checkout page
    this.shippingMethodMissingMessage = page.locator('div.message.notice[role="alert"] span', {hasText: 'The shipping method is missing'});
    this.customerEmailError = page.locator('div.mage-error#customer-email-error[for="customer-email"]');
    this.firstnameErrorMessage = page.locator('input[name="firstname"][aria-describedby] + div.field-error >> span', {hasText: 'This is a required field.'});
    this.lastnameErrorMessage = page.locator('input[name="lastname"][aria-describedby] + div.field-error >> span', {hasText: 'This is a required field.'});
    this.streetErrorMessage = page.locator('div.field._required._error[name="shippingAddress.street.0"] div.field-error >> span', {hasText: 'This is a required field.'});
    this.cityErrorMessage = page.locator('div.field._required._error[name="shippingAddress.city"] div.field-error >> span', {hasText: 'This is a required field.'});
    this.stateProvinceErrorMessage = page.locator('div.field._required._error[name="shippingAddress.region_id"] div.field-error >> span', {hasText: 'This is a required field.'});
    this.zipPostalCodeError = page.locator('div.field._required._error[name="shippingAddress.postcode"] div.field-error >> span', {hasText: 'This is a required field.'});
    this.phoneError = page.locator('div.field._required._error[name="shippingAddress.telephone"] div.field-error >> span', {hasText: 'This is a required field.'});

    // apply discount area
    this.discountSection = page.locator('div.payment-option.discount-code');
    this.discountCodeInput = this.discountSection.locator('input#discount-code[name="discount_code"]');
    this.applyDiscountButton = this.discountSection.locator('button.action-apply', {hasText: 'Apply Discount'});
    this.cancelDiscountButton = this.discountSection.locator('button.action-cancel', {hasText: 'Cancel coupon'});
    this.discountCodeError = page.locator('div#mage-error#discount-code-error, div#discount-code-error.mage-error');
    this.invalidCouponError = page.locator('div[data-ui-id="checkout-cart-validationmessages-message-error"]');
    this.validCouponSuccessMessage = page.locator('div[data-ui-id="checkout-cart-validationmessages-message-success"]');
    this.discountCouponCodeFromSummary = page.locator('tr.totals.discount .coupon');
    this.discountAmountSummary = page.locator('tr.totals.discount .price');
    this.orderTotalAmountSummary = page.locator('tr.grand.totals .amount .price');

    // Account creation
    this.passwordField = page.locator('#password');
    this.passwordConfirmationField = page.locator('#password-confirmation');
    this.createAccountButton = page.locator('button', { hasText: 'Create an Account' });
    this.successRegisterMessage = page.locator('div[data-bind="html: $parent.prepareMessageForHtml(message.text)"]', {hasText: 'Thank you for registering with Main Website Store.'});
  }    
}