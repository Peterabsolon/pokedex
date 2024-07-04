/* eslint-disable */
import * as types from './graphql'
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n  \n\n  mutation favoritePokemon($id: ID!) {\n    favoritePokemon(id: $id) {\n      ...PokemonDetails\n    }\n  }\n':
    types.FavoritePokemonDocument,
  '\n  \n\n  fragment PokemonDetails on Pokemon {\n    ...PokemonInfo\n\n    resistant\n    weaknesses\n\n    weight {\n      minimum\n      maximum\n    }\n\n    height {\n      minimum\n      maximum\n    }\n\n    evolutionRequirements {\n      amount\n      name\n    }\n\n    evolutions {\n      id\n      name\n    }\n\n    attacks {\n      fast {\n        name\n        type\n        damage\n      }\n\n      special {\n        name\n        type\n        damage\n      }\n    }\n  }\n':
    types.PokemonDetailsFragmentDoc,
  '\n  fragment PokemonInfo on Pokemon {\n    id\n    name\n    classification\n    types\n    sound\n    image\n    isFavorite\n    fleeRate\n    maxCP\n    maxHP\n  }\n':
    types.PokemonInfoFragmentDoc,
  '\n  \n\n  query getPokemonById($id: ID!) {\n    pokemonById(id: $id) {\n      ...PokemonDetails\n    }\n  }\n':
    types.GetPokemonByIdDocument,
  '\n  \n\n  query getPokemonByName($name: String!) {\n    pokemonByName(name: $name) {\n      ...PokemonDetails\n    }\n  }\n':
    types.GetPokemonByNameDocument,
  '\n  query getPokemonResistances {\n    pokemonResistances\n  }\n': types.GetPokemonResistancesDocument,
  '\n  query getPokemonTypes {\n    pokemonTypes\n  }\n': types.GetPokemonTypesDocument,
  '\n  query getPokemonWeaknesses {\n    pokemonWeaknesses\n  }\n': types.GetPokemonWeaknessesDocument,
  '\n  \n\n  query getPokemons($query: PokemonsQueryInput!) {\n    pokemons(query: $query) {\n      edges {\n        ...PokemonInfo\n      }\n    }\n  }\n':
    types.GetPokemonsDocument,
  '\n  \n\n  mutation unFavoritePokemon($id: ID!) {\n    unFavoritePokemon(id: $id) {\n      ...PokemonDetails\n    }\n  }\n':
    types.UnFavoritePokemonDocument,
}

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  \n\n  mutation favoritePokemon($id: ID!) {\n    favoritePokemon(id: $id) {\n      ...PokemonDetails\n    }\n  }\n',
): (typeof documents)['\n  \n\n  mutation favoritePokemon($id: ID!) {\n    favoritePokemon(id: $id) {\n      ...PokemonDetails\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  \n\n  fragment PokemonDetails on Pokemon {\n    ...PokemonInfo\n\n    resistant\n    weaknesses\n\n    weight {\n      minimum\n      maximum\n    }\n\n    height {\n      minimum\n      maximum\n    }\n\n    evolutionRequirements {\n      amount\n      name\n    }\n\n    evolutions {\n      id\n      name\n    }\n\n    attacks {\n      fast {\n        name\n        type\n        damage\n      }\n\n      special {\n        name\n        type\n        damage\n      }\n    }\n  }\n',
): (typeof documents)['\n  \n\n  fragment PokemonDetails on Pokemon {\n    ...PokemonInfo\n\n    resistant\n    weaknesses\n\n    weight {\n      minimum\n      maximum\n    }\n\n    height {\n      minimum\n      maximum\n    }\n\n    evolutionRequirements {\n      amount\n      name\n    }\n\n    evolutions {\n      id\n      name\n    }\n\n    attacks {\n      fast {\n        name\n        type\n        damage\n      }\n\n      special {\n        name\n        type\n        damage\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment PokemonInfo on Pokemon {\n    id\n    name\n    classification\n    types\n    sound\n    image\n    isFavorite\n    fleeRate\n    maxCP\n    maxHP\n  }\n',
): (typeof documents)['\n  fragment PokemonInfo on Pokemon {\n    id\n    name\n    classification\n    types\n    sound\n    image\n    isFavorite\n    fleeRate\n    maxCP\n    maxHP\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  \n\n  query getPokemonById($id: ID!) {\n    pokemonById(id: $id) {\n      ...PokemonDetails\n    }\n  }\n',
): (typeof documents)['\n  \n\n  query getPokemonById($id: ID!) {\n    pokemonById(id: $id) {\n      ...PokemonDetails\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  \n\n  query getPokemonByName($name: String!) {\n    pokemonByName(name: $name) {\n      ...PokemonDetails\n    }\n  }\n',
): (typeof documents)['\n  \n\n  query getPokemonByName($name: String!) {\n    pokemonByName(name: $name) {\n      ...PokemonDetails\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query getPokemonResistances {\n    pokemonResistances\n  }\n',
): (typeof documents)['\n  query getPokemonResistances {\n    pokemonResistances\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query getPokemonTypes {\n    pokemonTypes\n  }\n',
): (typeof documents)['\n  query getPokemonTypes {\n    pokemonTypes\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query getPokemonWeaknesses {\n    pokemonWeaknesses\n  }\n',
): (typeof documents)['\n  query getPokemonWeaknesses {\n    pokemonWeaknesses\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  \n\n  query getPokemons($query: PokemonsQueryInput!) {\n    pokemons(query: $query) {\n      edges {\n        ...PokemonInfo\n      }\n    }\n  }\n',
): (typeof documents)['\n  \n\n  query getPokemons($query: PokemonsQueryInput!) {\n    pokemons(query: $query) {\n      edges {\n        ...PokemonInfo\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  \n\n  mutation unFavoritePokemon($id: ID!) {\n    unFavoritePokemon(id: $id) {\n      ...PokemonDetails\n    }\n  }\n',
): (typeof documents)['\n  \n\n  mutation unFavoritePokemon($id: ID!) {\n    unFavoritePokemon(id: $id) {\n      ...PokemonDetails\n    }\n  }\n']

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
