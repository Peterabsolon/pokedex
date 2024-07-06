'use client'

import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

import { PokemonInfoFragment } from '~/codegen/graphql'
import { PokemonListItem } from '~/components'
import { ROUTES } from '~/constants'

import { PokemonFilters } from './components'
import { PokemonsContextProvider, usePokemonsContext } from './pokemons.context'

const REM_PX = 16
const SIDEBAR_WIDTH_PX = 460
const ITEM_MIN_WIDTH_PX = 360

const PokemonsPage = () => {
  const router = useRouter()
  const { queries, state } = usePokemonsContext()
  const { pokemonsQuery } = queries

  const pokemons = pokemonsQuery.pokemons.filter((p) => (state.showFavoritesOnly ? p.isFavorite : true))

  const handleViewDetail = useCallback(
    (pokemon: PokemonInfoFragment) => {
      router.push(ROUTES.POKEMON_DETAIL.replace(':id', pokemon.id))
    },
    [router],
  )

  return (
    <div className="max-w-screen flex flex-auto overflow-hidden p-8">
      <div
        className="mr-8 flex-1 self-start"
        style={{
          maxWidth: `calc(100% - ${SIDEBAR_WIDTH_PX + 2 * REM_PX}px)`,
        }}
      >
        <div
          data-testId="pokemons"
          className="grid gap-8"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          }}
        >
          {pokemons.map((pokemon) => (
            <PokemonListItem
              key={pokemon.id}
              pokemon={pokemon}
              showDetailInfo={state.showDetailInfo}
              onClick={handleViewDetail}
            />
          ))}
        </div>
      </div>

      <div style={{ width: SIDEBAR_WIDTH_PX }} className="flex-shrink-0">
        <PokemonFilters />
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <PokemonsContextProvider>
      <PokemonsPage />
    </PokemonsContextProvider>
  )
}
