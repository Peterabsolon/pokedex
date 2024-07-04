import { makeAutoObservable } from 'mobx'

import { GetPokemonsQuery } from '~/gql/graphql'

type PokemonModelProps = GetPokemonsQuery['pokemons']['edges'][number]

export class PokemonModel {
  // ====================================================
  // State
  // ====================================================

  // ====================================================
  // Constructor
  // ====================================================
  constructor(public props: PokemonModelProps) {
    makeAutoObservable(this)
  }

  // ====================================================
  // Action handlers
  // ====================================================
  onToggleFavorite = async () => {
    console.log('onToggleFavorite...')
  }
}
