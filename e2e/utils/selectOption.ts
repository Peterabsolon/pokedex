import { Page } from '@playwright/test'

export const selectOption = async (page: Page, testId: string, options: string[]) => {
  const select = page.locator(`[data-test-id="${testId}"]`)

  // open dropdown
  await select.first().click()

  // find and click all the passed options
  for (const option of options) {
    await select.locator(`text=${option}`).last().click()
  }
}
