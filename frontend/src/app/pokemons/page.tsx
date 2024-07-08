'use client'

import { InfiniteLoader } from '~/components'

import { useAppContext } from '../app.context'
import { PokemonsFilters, PokemonsGrid } from './components'
import { PokemonsTable } from './components/PokemonsTable'

export default function PokemonsPage() {
  const { queries, state, computed } = useAppContext()
  const { pokemonsQuery } = queries
  const { pokemons } = computed

  return (
    <>
      <div className="flex flex-auto px-8">
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
          <PokemonsFilters />
        </div>
      </div>
    </>
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
