import { createContext, PropsWithChildren, useContext, useState } from 'react'

import { useDebouncedValue, usePokemonsQuery } from '~/hooks'

import { actions, initialState } from './pokemons.store'

interface PokemonsContextQueries {
  pokemonsQuery: ReturnType<typeof usePokemonsQuery>
}

interface PokemonsContextType {
  state: typeof initialState
  actions: ReturnType<typeof actions>
  queries: PokemonsContextQueries
  searchQuery: ReturnType<typeof useDebouncedValue>
}

const PokemonsContext = createContext<PokemonsContextType>({
  state: initialState,
  actions: actions(initialState, () => {}),
  queries: {} as PokemonsContextQueries,
  searchQuery: {} as ReturnType<typeof useDebouncedValue>,
})

export const PokemonsContextProvider = ({ children }: PropsWithChildren) => {
  const [state, setState] = useState(initialState)

  const searchQuery = useDebouncedValue({ debounceMs: 250 })

  const pokemonsQuery = usePokemonsQuery({
    search: searchQuery.value,
    filter: {
      type: state.pokemonTypesSelected[0]?.value,
    },
  })

  const queries = {
    pokemonsQuery,
  }

  const context = {
    state,
    actions: actions(state, setState),
    queries,
    searchQuery,
  }

  return <PokemonsContext.Provider value={context}>{children}</PokemonsContext.Provider>
}

export const usePokemonsContext = () => useContext(PokemonsContext)
