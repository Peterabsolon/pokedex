import { Browser, Page } from '@playwright/test'

interface SelectOptionProps {
  page: Page
  browser: Browser
  testId: string
  options: string[]
  operationName: string
}

export const selectOption = async ({ page, browser, testId, options, operationName }: SelectOptionProps) => {
  const isSafari = browser.browserType().name() === 'webkit'
  const hasManyOptions = options.length > 1
  const select = page.locator(`[data-test-id="${testId}"]`)

  // open dropdown
  await select.first().click()

  // find and click all the passed options
  for (const option of options) {
    await select.locator(`text=${option}`).last().click()

    // Workaround for the select dropdown getting closed after picking an option.
    // This only happens when the tests are run through Playwright AND Safari. Works as expected in real Safari.
    if (isSafari && hasManyOptions) {
      await select.first().click()
    }
  }
}
