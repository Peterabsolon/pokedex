'use client'

import { makeAutoObservable, observable } from 'mobx'

import { GetPokemonsQuery } from '~/gql/graphql'
import { app } from '~/store'

import { GET_POKEMONS_QUERY } from './graphql/get-pokemons.query'
import { PokemonModel } from './pokemon.model'

export class PokemonsStore {
  // ====================================================
  // State
  // ====================================================
  pokemons = observable<PokemonModel>([])

  constructor() {
    makeAutoObservable(this)
  }

  // ====================================================
  // Private
  // ====================================================
  private fetchPokemons = async () => {
    try {
      const res = await app.apollo.query<GetPokemonsQuery>({ query: GET_POKEMONS_QUERY })
      const pokemons = res.data.pokemons.edges.map((pokemon) => new PokemonModel(pokemon))
      this.pokemons.replace(pokemons)
    } catch (err) {
      console.error(`Failed to fetch pokemons`, err)
    }
  }

  // ====================================================
  // Lifecycle
  // ====================================================
  mount = () => {
    this.fetchPokemons()
  }
}

export const pokemonsStore = new PokemonsStore()
