import { expect, test } from '@playwright/test'

import { selectOption } from './utils'

const APP_URL = 'http://localhost:3000'
const operationName = 'getPokemons'

// Search for Pokemon by text through use of a search bar.
// Filter Pokemon by type using a dropdown.
// Add and remove a Pokemon to and from your Favorites by clicking the heart icon.
// Use tabs to switch between All Pokemon and Favorite Pokemon views.
// Change the view from either a grid or list.
// View Pokemon details using a /:name route.
// Clicking on a Pokemon image or name should navigate to the above route to view the Pokemon details.

test.describe('Required features', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(APP_URL)
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
    expect(count).toBe(10)
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

  // TODO
  // test('can view favorites only', () => {})
})
