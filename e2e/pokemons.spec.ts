import { expect, test } from '@playwright/test'

import { selectOption } from './utils'

const operationName = 'getPokemons'

test.describe('Required features', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.waitForTimeout(1000)
  })

  test('can search pokemons', async ({ page }) => {
    await page.getByTestId('search-query-input').first().fill('Zubat')
    await expect(page.getByText('Zubat')).toBeVisible()
    await expect(page.getByText('Bulbasaur')).not.toBeVisible()
    const count = await page.getByTestId('pokemons').locator('> *').count()
    expect(count).toBe(1)
  })

  test('can filter pokemons by type', async ({ page, browser }) => {
    await selectOption({
      page,
      browser,
      testId: 'types',
      options: ['Bug'],
      operationName,
    })

    const count = await page.getByTestId('pokemons').locator('> *').count()
    expect(count).toBe(12)
  })

  test('can filter pokemons by matching types, using AND logic', async ({ page, browser }) => {
    await selectOption({
      page,
      browser,
      testId: 'typesFilterOperator',
      options: ['And'],
      operationName,
    })

    await selectOption({
      page,
      browser,
      testId: 'types',
      options: ['Bug', 'Poison'],
      operationName,
    })

    const count = await page.getByTestId('pokemons').locator('> *').count()
    expect(count).toBe(5)
  })

  test('can filter pokemons by matching types, using OR logic', async ({ page, browser }) => {
    await selectOption({
      page,
      browser,
      testId: 'typesFilterOperator',
      options: ['Or'],
      operationName,
    })

    await selectOption({
      page,
      browser,
      testId: 'types',
      options: ['Bug', 'Electric'],
      operationName,
    })

    await expect(page.getByText('Caterpie')).toBeVisible() // Bug
    await expect(page.getByText('Pikachu')).toBeVisible() // Electric
  })

  test('can toggle pokemon as favorite', async ({ page }) => {
    await page.getByRole('button', { name: 'Favorite' }).first().click()
    await expect(page.getByText(`Bulbasaur successfully added to favorites.`)).toBeVisible()
    await page.getByRole('button', { name: 'Unfavorite' }).first().click()
    await expect(page.getByText(`Bulbasaur successfully removed from favorites.`)).toBeVisible()
  })

  // ... More tests could be here but this should be enough for a "showcase"
})
