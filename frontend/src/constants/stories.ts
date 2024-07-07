import { PokemonDetailsFragment } from '~/codegen/graphql'

export const BULBASAUR = {
  id: '001',
  name: 'Bulbasaur',
  number: 1,
  classification: 'Seed Pokémon',
  types: ['Grass', 'Poison'],
  sound: 'http://localhost:4000/sounds/1',
  image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
  isFavorite: false,
  resistant: ['Water', 'Electric', 'Grass', 'Fighting', 'Fairy'],
  weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'],
  fleeRate: 0.1,
  maxCP: 951,
  maxHP: 1071,
  __typename: 'Pokemon',
  weight: {
    minimum: '6.04kg',
    maximum: '7.76kg',
    __typename: 'PokemonDimension',
  },
  height: {
    minimum: '0.61m',
    maximum: '0.79m',
    __typename: 'PokemonDimension',
  },
  evolutionRequirements: {
    amount: 25,
    name: 'Bulbasaur candies',
    __typename: 'PokemonEvolutionRequirement',
  },
  evolutionsPrevious: [],
  evolutions: [
    {
      id: '002',
      name: 'Ivysaur',
      __typename: 'Pokemon',
    },
    {
      id: '003',
      name: 'Venusaur',
      __typename: 'Pokemon',
    },
  ],
  attacks: {
    fast: [
      {
        name: 'Tackle',
        type: 'Normal',
        damage: 12,
        __typename: 'Attack',
      },
      {
        name: 'Vine Whip',
        type: 'Grass',
        damage: 7,
        __typename: 'Attack',
      },
    ],
    special: [
      {
        name: 'Power Whip',
        type: 'Grass',
        damage: 70,
        __typename: 'Attack',
      },
      {
        name: 'Seed Bomb',
        type: 'Grass',
        damage: 40,
        __typename: 'Attack',
      },
      {
        name: 'Sludge Bomb',
        type: 'Poison',
        damage: 55,
        __typename: 'Attack',
      },
    ],
    __typename: 'PokemonAttack',
  },
} satisfies PokemonDetailsFragment
