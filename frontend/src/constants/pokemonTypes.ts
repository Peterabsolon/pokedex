/**
 * The actual app fetches these from the server (since GraphQL exposes them...)
 *
 * This constant is only used for PokemonTypeBadge colors/stories.
 */
export const POKEMON_TYPES = [
  'Grass',
  'Poison',
  'Fire',
  'Flying',
  'Water',
  'Bug',
  'Normal',
  'Electric',
  'Ground',
  'Fairy',
  'Fighting',
  'Psychic',
  'Rock',
  'Steel',
  'Ice',
  'Ghost',
  'Dragon',
] as const

export type PokemonType = (typeof POKEMON_TYPES)[number]
