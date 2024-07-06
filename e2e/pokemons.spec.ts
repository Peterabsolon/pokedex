import { expect, test } from '@playwright/test'
import { waitForGraphQLRequest } from './utils'
import { selectOption } from './utils/selectOption'

const APP_URL = 'http://localhost:3000'

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
    const request = waitForGraphQLRequest(page, 'getPokemons')

    await page.getByLabel('Search by name').fill('Zubat')
    await request

    await expect(page.getByText('Zubat')).toBeVisible()
    await expect(page.getByText('Bulbasaur')).not.toBeVisible()
    const count = await page.getByTestId('pokemons').locator('> *').count()
    expect(count).toBe(1)
  })

  test('can filter pokemons by type', async ({ page }) => {
    const request = waitForGraphQLRequest(page, 'getPokemons')

    await selectOption(page, 'types', ['Bug'])
    await request

    const count = await page.getByTestId('pokemons').locator('> *').count()
    expect(count).toBe(10)
  })

  test('can filter pokemons by matching types, using AND logic', async ({ page }) => {
    const request = waitForGraphQLRequest(page, 'getPokemons')

    await selectOption(page, 'typesFilterOperator', ['And'])
    await selectOption(page, 'types', ['Bug', 'Poison'])
    await request

    const count = await page.getByTestId('pokemons').locator('> *').count()
    expect(count).toBe(5)
  })

  test('can filter pokemons by matching types, using OR logic', async ({ page }) => {
    const request = waitForGraphQLRequest(page, 'getPokemons')

    await selectOption(page, 'typesFilterOperator', ['Or'])
    await selectOption(page, 'types', ['Bug', 'Electric'])
    await request

    await expect(page.getByText('Caterpie')).toBeVisible() // Bug
    await expect(page.getByText('Pikachu')).toBeVisible() // Electric
  })
})
