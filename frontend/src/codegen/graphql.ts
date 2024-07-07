/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never }
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any }
}

export type Attack = {
  __typename?: 'Attack'
  damage: Scalars['Int']['output']
  name: Scalars['String']['output']
  type: Scalars['String']['output']
}

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC',
}

export enum FilterOperator {
  And = 'AND',
  Or = 'OR',
}

export type Mutation = {
  __typename?: 'Mutation'
  favoritePokemon?: Maybe<Pokemon>
  unFavoritePokemon?: Maybe<Pokemon>
}

export type MutationFavoritePokemonArgs = {
  id: Scalars['ID']['input']
}

export type MutationUnFavoritePokemonArgs = {
  id: Scalars['ID']['input']
}

export type Pokemon = {
  __typename?: 'Pokemon'
  attacks: PokemonAttack
  classification: Scalars['String']['output']
  evolutionRequirements?: Maybe<PokemonEvolutionRequirement>
  evolutions: Array<Pokemon>
  evolutionsPrevious: Array<Pokemon>
  fleeRate: Scalars['Float']['output']
  height: PokemonDimension
  id: Scalars['ID']['output']
  image: Scalars['String']['output']
  isFavorite: Scalars['Boolean']['output']
  maxCP: Scalars['Int']['output']
  maxHP: Scalars['Int']['output']
  name: Scalars['String']['output']
  number: Scalars['Int']['output']
  resistant: Array<Scalars['String']['output']>
  sound: Scalars['String']['output']
  types: Array<Scalars['String']['output']>
  weaknesses: Array<Scalars['String']['output']>
  weight: PokemonDimension
}

export type PokemonAttack = {
  __typename?: 'PokemonAttack'
  fast: Array<Attack>
  special: Array<Attack>
}

export type PokemonConnection = {
  __typename?: 'PokemonConnection'
  count: Scalars['Int']['output']
  edges: Array<Pokemon>
  limit: Scalars['Int']['output']
  offset: Scalars['Int']['output']
}

export type PokemonDimension = {
  __typename?: 'PokemonDimension'
  maximum: Scalars['String']['output']
  minimum: Scalars['String']['output']
}

export type PokemonEvolutionRequirement = {
  __typename?: 'PokemonEvolutionRequirement'
  amount: Scalars['Int']['output']
  name: Scalars['String']['output']
}

export type PokemonFilterInput = {
  isFavorite?: InputMaybe<Scalars['Boolean']['input']>
  resistance?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  resistanceOperator?: InputMaybe<FilterOperator>
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  typeOperator?: InputMaybe<FilterOperator>
  weakness?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  weaknessOperator?: InputMaybe<FilterOperator>
}

export type PokemonsQueryInput = {
  filter?: InputMaybe<PokemonFilterInput>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
}

export type Query = {
  __typename?: 'Query'
  pokemonById?: Maybe<Pokemon>
  pokemonByName?: Maybe<Pokemon>
  pokemonTypes: Array<Scalars['String']['output']>
  pokemons: PokemonConnection
}

export type QueryPokemonByIdArgs = {
  id: Scalars['ID']['input']
}

export type QueryPokemonByNameArgs = {
  name: Scalars['String']['input']
}

export type QueryPokemonsArgs = {
  query: PokemonsQueryInput
}

export type Root = {
  __typename?: 'Root'
  query: Query
}

export type FavoritePokemonMutationVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type FavoritePokemonMutation = {
  __typename?: 'Mutation'
  favoritePokemon?: {
    __typename?: 'Pokemon'
    id: string
    name: string
    number: number
    classification: string
    types: Array<string>
    sound: string
    image: string
    isFavorite: boolean
    resistant: Array<string>
    weaknesses: Array<string>
    fleeRate: number
    maxCP: number
    maxHP: number
    weight: { __typename?: 'PokemonDimension'; minimum: string; maximum: string }
    height: { __typename?: 'PokemonDimension'; minimum: string; maximum: string }
    evolutionRequirements?: { __typename?: 'PokemonEvolutionRequirement'; amount: number; name: string } | null
    evolutions: Array<{ __typename?: 'Pokemon'; id: string; name: string }>
    evolutionsPrevious: Array<{ __typename?: 'Pokemon'; id: string; name: string }>
    attacks: {
      __typename?: 'PokemonAttack'
      fast: Array<{ __typename?: 'Attack'; name: string; type: string; damage: number }>
      special: Array<{ __typename?: 'Attack'; name: string; type: string; damage: number }>
    }
  } | null
}

export type PokemonDetailsFragment = {
  __typename?: 'Pokemon'
  id: string
  name: string
  number: number
  classification: string
  types: Array<string>
  sound: string
  image: string
  isFavorite: boolean
  resistant: Array<string>
  weaknesses: Array<string>
  fleeRate: number
  maxCP: number
  maxHP: number
  weight: { __typename?: 'PokemonDimension'; minimum: string; maximum: string }
  height: { __typename?: 'PokemonDimension'; minimum: string; maximum: string }
  evolutionRequirements?: { __typename?: 'PokemonEvolutionRequirement'; amount: number; name: string } | null
  evolutions: Array<{ __typename?: 'Pokemon'; id: string; name: string }>
  evolutionsPrevious: Array<{ __typename?: 'Pokemon'; id: string; name: string }>
  attacks: {
    __typename?: 'PokemonAttack'
    fast: Array<{ __typename?: 'Attack'; name: string; type: string; damage: number }>
    special: Array<{ __typename?: 'Attack'; name: string; type: string; damage: number }>
  }
}

export type PokemonInfoFragment = {
  __typename?: 'Pokemon'
  id: string
  name: string
  number: number
  classification: string
  types: Array<string>
  sound: string
  image: string
  isFavorite: boolean
  resistant: Array<string>
  weaknesses: Array<string>
  fleeRate: number
  maxCP: number
  maxHP: number
}

export type GetPokemonByNameQueryVariables = Exact<{
  name: Scalars['String']['input']
}>

export type GetPokemonByNameQuery = {
  __typename?: 'Query'
  pokemonByName?: {
    __typename?: 'Pokemon'
    id: string
    name: string
    number: number
    classification: string
    types: Array<string>
    sound: string
    image: string
    isFavorite: boolean
    resistant: Array<string>
    weaknesses: Array<string>
    fleeRate: number
    maxCP: number
    maxHP: number
    weight: { __typename?: 'PokemonDimension'; minimum: string; maximum: string }
    height: { __typename?: 'PokemonDimension'; minimum: string; maximum: string }
    evolutionRequirements?: { __typename?: 'PokemonEvolutionRequirement'; amount: number; name: string } | null
    evolutions: Array<{ __typename?: 'Pokemon'; id: string; name: string }>
    evolutionsPrevious: Array<{ __typename?: 'Pokemon'; id: string; name: string }>
    attacks: {
      __typename?: 'PokemonAttack'
      fast: Array<{ __typename?: 'Attack'; name: string; type: string; damage: number }>
      special: Array<{ __typename?: 'Attack'; name: string; type: string; damage: number }>
    }
  } | null
}

export type GetPokemonTypesQueryVariables = Exact<{ [key: string]: never }>

export type GetPokemonTypesQuery = { __typename?: 'Query'; pokemonTypes: Array<string> }

export type GetPokemonByIdQueryVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type GetPokemonByIdQuery = {
  __typename?: 'Query'
  pokemonById?: {
    __typename?: 'Pokemon'
    id: string
    name: string
    number: number
    classification: string
    types: Array<string>
    sound: string
    image: string
    isFavorite: boolean
    resistant: Array<string>
    weaknesses: Array<string>
    fleeRate: number
    maxCP: number
    maxHP: number
    weight: { __typename?: 'PokemonDimension'; minimum: string; maximum: string }
    height: { __typename?: 'PokemonDimension'; minimum: string; maximum: string }
    evolutionRequirements?: { __typename?: 'PokemonEvolutionRequirement'; amount: number; name: string } | null
    evolutions: Array<{ __typename?: 'Pokemon'; id: string; name: string }>
    evolutionsPrevious: Array<{ __typename?: 'Pokemon'; id: string; name: string }>
    attacks: {
      __typename?: 'PokemonAttack'
      fast: Array<{ __typename?: 'Attack'; name: string; type: string; damage: number }>
      special: Array<{ __typename?: 'Attack'; name: string; type: string; damage: number }>
    }
  } | null
}

export type GetPokemonsQueryVariables = Exact<{
  query: PokemonsQueryInput
}>

export type GetPokemonsQuery = {
  __typename?: 'Query'
  pokemons: {
    __typename?: 'PokemonConnection'
    count: number
    edges: Array<{
      __typename?: 'Pokemon'
      id: string
      name: string
      number: number
      classification: string
      types: Array<string>
      sound: string
      image: string
      isFavorite: boolean
      resistant: Array<string>
      weaknesses: Array<string>
      fleeRate: number
      maxCP: number
      maxHP: number
      weight: { __typename?: 'PokemonDimension'; minimum: string; maximum: string }
      height: { __typename?: 'PokemonDimension'; minimum: string; maximum: string }
      evolutionRequirements?: { __typename?: 'PokemonEvolutionRequirement'; amount: number; name: string } | null
      evolutions: Array<{ __typename?: 'Pokemon'; id: string; name: string }>
      evolutionsPrevious: Array<{ __typename?: 'Pokemon'; id: string; name: string }>
      attacks: {
        __typename?: 'PokemonAttack'
        fast: Array<{ __typename?: 'Attack'; name: string; type: string; damage: number }>
        special: Array<{ __typename?: 'Attack'; name: string; type: string; damage: number }>
      }
    }>
  }
}

export type UnFavoritePokemonMutationVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type UnFavoritePokemonMutation = {
  __typename?: 'Mutation'
  unFavoritePokemon?: {
    __typename?: 'Pokemon'
    id: string
    name: string
    number: number
    classification: string
    types: Array<string>
    sound: string
    image: string
    isFavorite: boolean
    resistant: Array<string>
    weaknesses: Array<string>
    fleeRate: number
    maxCP: number
    maxHP: number
    weight: { __typename?: 'PokemonDimension'; minimum: string; maximum: string }
    height: { __typename?: 'PokemonDimension'; minimum: string; maximum: string }
    evolutionRequirements?: { __typename?: 'PokemonEvolutionRequirement'; amount: number; name: string } | null
    evolutions: Array<{ __typename?: 'Pokemon'; id: string; name: string }>
    evolutionsPrevious: Array<{ __typename?: 'Pokemon'; id: string; name: string }>
    attacks: {
      __typename?: 'PokemonAttack'
      fast: Array<{ __typename?: 'Attack'; name: string; type: string; damage: number }>
      special: Array<{ __typename?: 'Attack'; name: string; type: string; damage: number }>
    }
  } | null
}

export const PokemonInfoFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PokemonInfo' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Pokemon' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'classification' } },
          { kind: 'Field', name: { kind: 'Name', value: 'types' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sound' } },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isFavorite' } },
          { kind: 'Field', name: { kind: 'Name', value: 'resistant' } },
          { kind: 'Field', name: { kind: 'Name', value: 'weaknesses' } },
          { kind: 'Field', name: { kind: 'Name', value: 'fleeRate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'maxCP' } },
          { kind: 'Field', name: { kind: 'Name', value: 'maxHP' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PokemonInfoFragment, unknown>
export const PokemonDetailsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PokemonDetails' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Pokemon' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'PokemonInfo' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'weight' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'minimum' } },
                { kind: 'Field', name: { kind: 'Name', value: 'maximum' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'height' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'minimum' } },
                { kind: 'Field', name: { kind: 'Name', value: 'maximum' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'evolutionRequirements' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'evolutions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'evolutionsPrevious' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'attacks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'fast' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'damage' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'special' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'damage' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PokemonInfo' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Pokemon' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'classification' } },
          { kind: 'Field', name: { kind: 'Name', value: 'types' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sound' } },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isFavorite' } },
          { kind: 'Field', name: { kind: 'Name', value: 'resistant' } },
          { kind: 'Field', name: { kind: 'Name', value: 'weaknesses' } },
          { kind: 'Field', name: { kind: 'Name', value: 'fleeRate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'maxCP' } },
          { kind: 'Field', name: { kind: 'Name', value: 'maxHP' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PokemonDetailsFragment, unknown>
export const FavoritePokemonDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'favoritePokemon' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'favoritePokemon' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'PokemonDetails' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PokemonInfo' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Pokemon' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'classification' } },
          { kind: 'Field', name: { kind: 'Name', value: 'types' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sound' } },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isFavorite' } },
          { kind: 'Field', name: { kind: 'Name', value: 'resistant' } },
          { kind: 'Field', name: { kind: 'Name', value: 'weaknesses' } },
          { kind: 'Field', name: { kind: 'Name', value: 'fleeRate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'maxCP' } },
          { kind: 'Field', name: { kind: 'Name', value: 'maxHP' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PokemonDetails' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Pokemon' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'PokemonInfo' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'weight' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'minimum' } },
                { kind: 'Field', name: { kind: 'Name', value: 'maximum' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'height' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'minimum' } },
                { kind: 'Field', name: { kind: 'Name', value: 'maximum' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'evolutionRequirements' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'evolutions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'evolutionsPrevious' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'attacks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'fast' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'damage' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'special' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'damage' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FavoritePokemonMutation, FavoritePokemonMutationVariables>
export const GetPokemonByNameDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getPokemonByName' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'name' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pokemonByName' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'name' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'name' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'PokemonDetails' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PokemonInfo' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Pokemon' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'classification' } },
          { kind: 'Field', name: { kind: 'Name', value: 'types' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sound' } },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isFavorite' } },
          { kind: 'Field', name: { kind: 'Name', value: 'resistant' } },
          { kind: 'Field', name: { kind: 'Name', value: 'weaknesses' } },
          { kind: 'Field', name: { kind: 'Name', value: 'fleeRate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'maxCP' } },
          { kind: 'Field', name: { kind: 'Name', value: 'maxHP' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PokemonDetails' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Pokemon' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'PokemonInfo' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'weight' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'minimum' } },
                { kind: 'Field', name: { kind: 'Name', value: 'maximum' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'height' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'minimum' } },
                { kind: 'Field', name: { kind: 'Name', value: 'maximum' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'evolutionRequirements' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'evolutions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'evolutionsPrevious' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'attacks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'fast' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'damage' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'special' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'damage' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetPokemonByNameQuery, GetPokemonByNameQueryVariables>
export const GetPokemonTypesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getPokemonTypes' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [{ kind: 'Field', name: { kind: 'Name', value: 'pokemonTypes' } }],
      },
    },
  ],
} as unknown as DocumentNode<GetPokemonTypesQuery, GetPokemonTypesQueryVariables>
export const GetPokemonByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getPokemonById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pokemonById' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'PokemonDetails' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PokemonInfo' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Pokemon' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'classification' } },
          { kind: 'Field', name: { kind: 'Name', value: 'types' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sound' } },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isFavorite' } },
          { kind: 'Field', name: { kind: 'Name', value: 'resistant' } },
          { kind: 'Field', name: { kind: 'Name', value: 'weaknesses' } },
          { kind: 'Field', name: { kind: 'Name', value: 'fleeRate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'maxCP' } },
          { kind: 'Field', name: { kind: 'Name', value: 'maxHP' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PokemonDetails' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Pokemon' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'PokemonInfo' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'weight' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'minimum' } },
                { kind: 'Field', name: { kind: 'Name', value: 'maximum' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'height' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'minimum' } },
                { kind: 'Field', name: { kind: 'Name', value: 'maximum' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'evolutionRequirements' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'evolutions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'evolutionsPrevious' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'attacks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'fast' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'damage' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'special' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'damage' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetPokemonByIdQuery, GetPokemonByIdQueryVariables>
export const GetPokemonsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getPokemons' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'query' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'PokemonsQueryInput' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pokemons' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'query' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'query' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'FragmentSpread', name: { kind: 'Name', value: 'PokemonInfo' } },
                      { kind: 'FragmentSpread', name: { kind: 'Name', value: 'PokemonDetails' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PokemonInfo' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Pokemon' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'classification' } },
          { kind: 'Field', name: { kind: 'Name', value: 'types' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sound' } },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isFavorite' } },
          { kind: 'Field', name: { kind: 'Name', value: 'resistant' } },
          { kind: 'Field', name: { kind: 'Name', value: 'weaknesses' } },
          { kind: 'Field', name: { kind: 'Name', value: 'fleeRate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'maxCP' } },
          { kind: 'Field', name: { kind: 'Name', value: 'maxHP' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PokemonDetails' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Pokemon' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'PokemonInfo' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'weight' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'minimum' } },
                { kind: 'Field', name: { kind: 'Name', value: 'maximum' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'height' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'minimum' } },
                { kind: 'Field', name: { kind: 'Name', value: 'maximum' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'evolutionRequirements' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'evolutions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'evolutionsPrevious' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'attacks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'fast' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'damage' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'special' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'damage' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetPokemonsQuery, GetPokemonsQueryVariables>
export const UnFavoritePokemonDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'unFavoritePokemon' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'unFavoritePokemon' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'PokemonDetails' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PokemonInfo' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Pokemon' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'number' } },
          { kind: 'Field', name: { kind: 'Name', value: 'classification' } },
          { kind: 'Field', name: { kind: 'Name', value: 'types' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sound' } },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isFavorite' } },
          { kind: 'Field', name: { kind: 'Name', value: 'resistant' } },
          { kind: 'Field', name: { kind: 'Name', value: 'weaknesses' } },
          { kind: 'Field', name: { kind: 'Name', value: 'fleeRate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'maxCP' } },
          { kind: 'Field', name: { kind: 'Name', value: 'maxHP' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PokemonDetails' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Pokemon' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'PokemonInfo' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'weight' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'minimum' } },
                { kind: 'Field', name: { kind: 'Name', value: 'maximum' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'height' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'minimum' } },
                { kind: 'Field', name: { kind: 'Name', value: 'maximum' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'evolutionRequirements' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'evolutions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'evolutionsPrevious' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'attacks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'fast' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'damage' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'special' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'damage' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UnFavoritePokemonMutation, UnFavoritePokemonMutationVariables>
