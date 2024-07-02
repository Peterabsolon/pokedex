import { expect, test } from 'vitest'

const foo = () => 1

test('whatever', () => {
  expect(foo()).toBe(1)
})
