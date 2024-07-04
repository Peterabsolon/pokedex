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
  '\n  query getPokemons($limit: Int, $offset: Int) {\n    pokemons(query: { limit: $limit, offset: $offset }) {\n      edges {\n        id\n        name\n        classification\n        types\n        resistant\n        weaknesses\n        weight {\n          minimum\n          maximum\n        }\n        height {\n          minimum\n          maximum\n        }\n        fleeRate\n        evolutionRequirements {\n          amount\n          name\n        }\n        evolutions {\n          id\n          name\n        }\n        maxCP\n        maxHP\n        attacks {\n          fast {\n            name\n            type\n            damage\n          }\n          special {\n            name\n            type\n            damage\n          }\n        }\n      }\n    }\n  }\n':
    types.GetPokemonsDocument,
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
  source: '\n  query getPokemons($limit: Int, $offset: Int) {\n    pokemons(query: { limit: $limit, offset: $offset }) {\n      edges {\n        id\n        name\n        classification\n        types\n        resistant\n        weaknesses\n        weight {\n          minimum\n          maximum\n        }\n        height {\n          minimum\n          maximum\n        }\n        fleeRate\n        evolutionRequirements {\n          amount\n          name\n        }\n        evolutions {\n          id\n          name\n        }\n        maxCP\n        maxHP\n        attacks {\n          fast {\n            name\n            type\n            damage\n          }\n          special {\n            name\n            type\n            damage\n          }\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  query getPokemons($limit: Int, $offset: Int) {\n    pokemons(query: { limit: $limit, offset: $offset }) {\n      edges {\n        id\n        name\n        classification\n        types\n        resistant\n        weaknesses\n        weight {\n          minimum\n          maximum\n        }\n        height {\n          minimum\n          maximum\n        }\n        fleeRate\n        evolutionRequirements {\n          amount\n          name\n        }\n        evolutions {\n          id\n          name\n        }\n        maxCP\n        maxHP\n        attacks {\n          fast {\n            name\n            type\n            damage\n          }\n          special {\n            name\n            type\n            damage\n          }\n        }\n      }\n    }\n  }\n']

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
