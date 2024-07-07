'use client'

import { useRouter } from 'next/navigation'
import { useCallback, useRef } from 'react'

import { PokemonInfoFragment } from '~/codegen/graphql'
import { InfiniteLoader, PokemonListItem } from '~/components'
import { ROUTES } from '~/constants'

import { PokemonFilters } from './components'
import { PokemonsContextProvider, usePokemonsContext } from './pokemons.context'

const REM_PX = 16
const HEADER_SIZE = 120
const SIDEBAR_WIDTH_PX = 460
const ITEM_MIN_WIDTH_PX = 360
const CONTENT_STYLES = {
  maxWidth: `calc(100% - ${SIDEBAR_WIDTH_PX + 2 * REM_PX}px)`,
  maxHeight: `calc(100vh - ${HEADER_SIZE}px)`,
}

const PokemonsPage = () => {
  const scrollArea = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const { queries, state, actions, computed } = usePokemonsContext()
  const { pokemonsQuery } = queries

  const pokemons = pokemonsQuery.edges.filter((p) => (state.showFavoritesOnly ? p.isFavorite : true))

  const handleViewDetail = useCallback(
    (pokemon: PokemonInfoFragment) => router.push(ROUTES.POKEMON_DETAIL.replace(':id', pokemon.id)),
    [router],
  )

  return (
    <div className="flex flex-auto overflow-hidden px-8">
      <div ref={scrollArea} className="mr-8 flex-1 self-start overflow-y-auto" style={CONTENT_STYLES}>
        <InfiniteLoader
          error={pokemonsQuery.error}
          isLoading={pokemonsQuery.loading}
          onLoadMore={pokemonsQuery.onFetchMore}
          pageKey={pokemonsQuery.edgesCount.toString()}
          hasMore={!!pokemons.length && computed.hasMore}
          scrollableAncestor={scrollArea}
        >
          <div
            data-testId="pokemons"
            className="grid gap-8"
            style={{
              gridTemplateColumns: `repeat(auto-fit, minmax(${ITEM_MIN_WIDTH_PX}px, 1fr))`,
            }}
          >
            {pokemons.map((pokemon) => (
              <PokemonListItem
                key={pokemon.id}
                pokemon={pokemon}
                showDetailInfo={state.showDetailInfo}
                onClick={handleViewDetail}
                onTypeClick={(opt) => actions.addTypeSelected({ label: opt, value: opt })}
                onWeaknessClick={(opt) => actions.addWeaknessSelected({ label: opt, value: opt })}
                onResistanceClick={(opt) => actions.addResistanceSelected({ label: opt, value: opt })}
              />
            ))}
          </div>
        </InfiniteLoader>
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
