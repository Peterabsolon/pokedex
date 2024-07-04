import { PokemonModel } from '../pokemon.model'

export type PokemonProps = {
  pokemon: PokemonModel
}

export const Pokemon = ({ pokemon }: PokemonProps) => {
  const { name } = pokemon.props

  return <div>{name}</div>
}
