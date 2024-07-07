import { PokemonInfoFragment } from '~/codegen/graphql'
import { PokemonGridItem } from '~/components'

import { usePokemonsContext } from '../../pokemons.context'

export interface PokemonsGridProps {
  foo?: string
  onViewDetail: (pokemon: PokemonInfoFragment) => void
}

export const PokemonsGrid = ({ onViewDetail }: PokemonsGridProps) => {
  const { queries, state, actions, computed } = usePokemonsContext()
  const { pokemonsQuery } = queries

  const pokemons = pokemonsQuery.edges.filter((p) => (state.showFavoritesOnly ? p.isFavorite : true))

  return (
    <div data-testid="pokemons" className="grid gap-8" style={GRID_STYLES}>
      {pokemons.map((pokemon) => (
        <PokemonGridItem
          key={pokemon.id}
          pokemon={pokemon}
          showDetailInfo={state.showDetailInfo}
          onClick={onViewDetail}
          onTypeClick={(opt) => actions.addTypeSelected({ label: opt, value: opt })}
          onWeaknessClick={(opt) => actions.addWeaknessSelected({ label: opt, value: opt })}
          onResistanceClick={(opt) => actions.addResistanceSelected({ label: opt, value: opt })}
          style={{ maxWidth: ITEM_MAX_WIDTH_PX }}
        />
      ))}
    </div>
  )
}

const REM_PX = 16
const SIDEBAR_WIDTH_PX = 460

const ITEM_MIN_WIDTH_PX = 360
const ITEM_MAX_WIDTH_PX = 420

const GRID_STYLES = {
  gridTemplateColumns: `repeat(auto-fit, minmax(${ITEM_MIN_WIDTH_PX}px, 1fr))`,
}
