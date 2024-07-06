import { Page } from '@playwright/test'

const GQL_API_URL = 'http://localhost:4000/graphql'

export const waitForGraphQLRequest = async (page: Page, operationName: string) => {
  return page.waitForRequest(
    (request) =>
      request.url() === GQL_API_URL &&
      request.method() === 'POST' &&
      request.postDataJSON()?.operationName === operationName,
  )
}
