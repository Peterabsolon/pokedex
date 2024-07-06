import { PokemonInfoFragment } from '~/codegen/graphql'

export const BULBASAUR = {
  id: '001',
  number: 1,
  sound: '',
  image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
  isFavorite: false,
  name: 'Bulbasaur',
  classification: 'Seed Pokémon',
  types: ['Grass', 'Poison'],
  resistant: ['Water', 'Electric', 'Grass', 'Fighting', 'Fairy'],
  weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'],
  fleeRate: 0.1,
  maxCP: 951,
  maxHP: 1071,
} satisfies PokemonInfoFragment
