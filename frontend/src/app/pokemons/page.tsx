'use client'

import classNames from 'classnames'

import { InfiniteLoader } from '~/components'

import { PokemonFilters, PokemonsGrid } from './components'
import { PokemonsTable } from './components/PokemonsTable'
import { PokemonsContextProvider, usePokemonsContext } from './pokemons.context'

const PokemonsPage = () => {
  const { queries, state, computed } = usePokemonsContext()
  const { pokemonsQuery } = queries

  const pokemons = pokemonsQuery.edges.filter((p) => (state.showFavoritesOnly ? p.isFavorite : true))

  return (
    <>
      <div className={classNames('flex flex-auto px-8', { 'blur-sm': state.openedPokemonName })}>
        <div style={CONTENT_STYLES} className="mr-8 flex-1 self-start">
          <InfiniteLoader
            error={pokemonsQuery.error}
            isLoading={pokemonsQuery.loading}
            onLoadMore={pokemonsQuery.onFetchMore}
            pageKey={pokemonsQuery.edgesCount.toString()}
            hasMore={!!pokemons.length && computed.hasMore}
          >
            {state.useTableView ? <PokemonsTable pokemons={pokemons} /> : <PokemonsGrid pokemons={pokemons} />}
          </InfiniteLoader>
        </div>

        <div style={SIDEBAR_STYLES} className="fixed right-8 flex-shrink-0">
          <PokemonFilters />
        </div>
      </div>
    </>
  )
}

export default function Page() {
  return (
    <PokemonsContextProvider>
      <PokemonsPage />
    </PokemonsContextProvider>
  )
}

const REM_PX = 16
const SIDEBAR_WIDTH_PX = 460

const SIDEBAR_STYLES = {
  width: SIDEBAR_WIDTH_PX,
}

const CONTENT_STYLES = {
  maxWidth: `calc(100% - ${SIDEBAR_WIDTH_PX + 2 * REM_PX}px)`,
}
