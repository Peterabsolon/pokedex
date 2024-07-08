import classNames from 'classnames'

import { PokemonInfoFragment } from '~/codegen/graphql'
import { Card, NoResults, PokemonGridItem } from '~/components'
import { usePokemonActions } from '~/hooks'

import { usePokemonsContext } from '../../pokemons.context'

export interface PokemonsGridProps {
  pokemons: PokemonInfoFragment[]
}

export const PokemonsGrid = ({ pokemons }: PokemonsGridProps) => {
  const { state, actions } = usePokemonsContext()
  const { handleViewDetail } = usePokemonActions()

  return (
    <>
      {pokemons.length > 0 ? (
        <div
          data-testid="pokemons"
          className={classNames(
            'grid gap-8',
            'grid-cols-[repeat(auto-fill,minmax(300px,1fr))]',
            'xl:grid-cols-[repeat(auto-fill,minmax(320px,1fr))]',
            '2xl:grid-cols-[repeat(auto-fill,minmax(360px,1fr))]',
          )}
        >
          {pokemons.map((pokemon) => (
            <PokemonGridItem
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
      ) : (
        <Card>
          <NoResults />
        </Card>
      )}
    </>
  )
}
