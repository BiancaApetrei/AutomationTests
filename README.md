# 🧪 Automated Regression Tests for Order Placement Process

This project contains automated test scripts built with [Playwright](https://playwright.dev/) using JavaScript. The focus is on covering regression test scenarios related to the **order placement flow**, including coupon application, cart summary validation, and checkout steps.

---

## 🚀 Project Goals

- Automate key regression scenarios to ensure core functionality of order placement is stable.

---

## 🛠 Tech Stack

- **Framework:** Playwright
- **Language:** JavaScript (ES6+)
- **Runner:** Playwright Test Runner

---

## 📁 Project Structure
AUTOMATIONTESTS/
├── .github/                  # GitHub workflows (CI/CD)
├── node_modules/             # Node.js dependencies
├── PageObjects/
│   ├── Generic.js            # Common reusable methods (e.g., visibility checks)
│   └── MagentoPageObjects.js # Magento-specific selectors/methods
├── playwright-report/
│   └── index.html            # HTML report generated after test run
├── test-results/             # Artifacts from test runs (e.g., screenshots, traces)
├── tests/
│   └── AutomationTests.spec.js # Main test suite
├── .gitignore
├── package.json              # Project metadata and dependencies
├── package-lock.json         # Dependency lock file
├── playwright.config.js      # Playwright configuration (timeouts, baseURL, etc.)
└── README.md                 # Project overview (this file)


---

## ✅ Covered Scenarios

🟢 General Page and UI Validations
- Verify homepage title and menu navigation
- Open product detail page
- Add product review (valid and invalid input)

🛒 Mini-Cart & Cart Operations
- View and validate mini-cart contents
- Delete item from mini-cart
- Add item to cart with:
    - Zero quantity (error handling)
    - Missing mandatory fields (error handling)

🔎 Search Functionality
- Search for correct and incorrect product names

🧾 Checkout Validations
- Attempt checkout with missing mandatory fields (error validation)
- Test invalid discount/voucher code

🛍 Order Placement Automation
- Order item via search on Magento product page
- Order from women’s category and update quantity in mini-cart
- Account creation after ordering

---

## 🚧 Known Limitations

- Some test steps are **repeated** across scenarios; **refactoring into reusable functions** is can be done.
- **More scenarios** can be added to improve overall coverage.
- Test **readability and maintainability** can be improved by:
  - Extracting page-specific methods into separate page objects.
  - Using custom test fixtures and selectors more consistently.
- Limited Playwright proficiency at the time of writing (as I didn't work with it much, but I chose it because it's the recent one I worked with)

---