import { createContext, PropsWithChildren, useContext, useMemo, useState } from 'react'

import { usePokemonByNameQuery } from '~/hooks'

import { createActions, initialState } from './pokemon.store'

// ====================================================
// Types
// ====================================================

interface PokemonsContextQueries {
  pokemonQuery: ReturnType<typeof usePokemonByNameQuery>
  pokemonEvolutionPrevQuery: ReturnType<typeof usePokemonByNameQuery>
  pokemonEvolutionNextQuery: ReturnType<typeof usePokemonByNameQuery>
}

interface PokemonsContextType {
  actions: ReturnType<typeof createActions>
  queries: PokemonsContextQueries
  state: typeof initialState
}

// ====================================================
// Context
// ====================================================
const PokemonsContext = createContext<PokemonsContextType>({
  actions: createActions(() => {}),
  queries: {} as PokemonsContextQueries,
  state: initialState,
})

// ====================================================
// Provider
// ====================================================
export const PokemonsContextProvider = ({ children }: PropsWithChildren) => {
  const [state, setState] = useState(initialState)

  const pokemonQuery = usePokemonByNameQuery({ name: state.pokemonName })

  // TODO: Read from Apollo cache...
  const pokemonEvolutionPrevQuery = usePokemonByNameQuery({
    name: pokemonQuery.pokemon?.evolutionsPrevious?.[pokemonQuery.pokemon?.evolutionsPrevious?.length - 1]?.name,
  })

  const pokemonEvolutionNextQuery = usePokemonByNameQuery({ name: pokemonQuery.pokemon?.evolutions[0]?.name })

  const queries = useMemo(
    () => ({ pokemonQuery, pokemonEvolutionPrevQuery, pokemonEvolutionNextQuery }),
    [pokemonQuery, pokemonEvolutionPrevQuery, pokemonEvolutionNextQuery],
  )

  const actions = useMemo(() => createActions(setState), [setState])

  const context = useMemo(
    () => ({
      actions,
      state,
      queries,
    }),
    [state, actions, queries],
  )

  return <PokemonsContext.Provider value={context}>{children}</PokemonsContext.Provider>
}

export const usePokemonsContext = () => useContext(PokemonsContext)
