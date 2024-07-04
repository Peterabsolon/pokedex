'use client'

import { makeAutoObservable } from 'mobx'

import { app } from '~/store'

import { POKEMONS_QUERY } from './pokemons.graphql'

export class PokemonsStore {
  constructor() {
    makeAutoObservable(this)
  }

  // ====================================================
  // Private
  // ====================================================
  private fetchPokemons = async () => {
    try {
      console.log('app.apollo', app.apollo)

      const res = await app.apollo.query({ query: POKEMONS_QUERY })

      console.log({ res })
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

export const pokemons = new PokemonsStore()
