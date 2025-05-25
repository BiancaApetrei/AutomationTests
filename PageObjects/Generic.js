import { test, expect } from "@playwright/test";
import { selector } from "@playwright/test";

export default class page_functions {
    constructor(page) {
        this.page = page;
    }

    async clickElement(selector, force = true){
        await selector.scrollIntoViewIfNeeded();
        await selector.waitFor({ state: 'visible'});
        await selector.click({ force: force});
    } 

    async clickElementByText(selector, text, force = true){
        const element = this.page.locator(`${selector}:has-text("${text}")`);
        await element.scrollIntoViewIfNeeded();
        await element.waitFor({ state: 'visible'});
        await element.click({ force: force});
    } 

    async selectOption(selector, option) {
        await selector.selectOption(option);
    }

    async enterText(selector, value) {
        // await selector.clearText();
        if (value !== null && value !== '') {
            await selector.fill(value.toString());
        }
    }

    async confirmElementIsEnabled(selector) {
        await expect(this.page.locator(selector)).toBeEnabled();
    }

    async confirmElementIsVisible(selector) {
        await selector.scrollIntoViewIfNeeded();
        await selector.waitFor({ state: 'visible'});
        await expect(selector).toBeVisible();
    }

    async confirmElementExists(selector) {
        const element = await this.page.locator(selector)
        const count = await element.count()
        expect(count, 'Element not found: ' + selector).toBeGreaterThan(0);
    }

    async confirmValue(selector, expectedValue) {
        await expect(selector).toHaveValue(expectedValue);
    }

    async confirmText(selector, expectedText) {
        await expect(selector).toBeVisible();
        await expect(selector).toHaveText(expectedText);
    }

    async confirmTextContains(selector, expectedText, timeout = 10000) {
        // await selector.waitFor({ state: 'visible'});
        await expect(selector).toContainText(expectedText, timeout);
    }

    async scrollIntoView(selector) {
        await this.page.locator(selector).scrollIntoViewIfNeeded();
    }

    async waitForPageToFullyLoad () {
        await this.page.waitForLoadState('networkidle');
    }

    async hoverElement (selector) {
        await selector.hover();
    }

    async getPriceAmount(priceWrapper) {
        const amount = await priceWrapper.getAttribute('data-price-amount');
    return amount;
    }

    async checkListContainsAllTexts(locator, texts) {
        for (const text of texts) {
        await expect(locator.locator('li', { hasText: text })).toBeVisible();
    }
}
}