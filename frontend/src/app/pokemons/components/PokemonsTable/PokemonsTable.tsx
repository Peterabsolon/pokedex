import { useAppContext } from '~/app/app.context'
import { PokemonInfoFragment } from '~/codegen/graphql'
import {
  EyeIcon,
  HeartIcon,
  PokemonImage,
  PokemonTypeBadge,
  SpeakerIcon,
  Table,
  TableAction,
  TableColumn,
} from '~/components'
import { usePokemonActions } from '~/hooks'

export interface PokemonsTableProps {
  pokemons: PokemonInfoFragment[]
}

export const PokemonsTable = ({ pokemons }: PokemonsTableProps) => {
  const { state, queries } = useAppContext()
  const { handlePlaySound, handleToggleFavorite, handleViewDetail } = usePokemonActions()

  const columns: TableColumn<PokemonInfoFragment>[] = [
    {
      label: 'Num',
      dataKey: 'number',
      className: 'font-medium',
      render: (pokemon) => `${pokemon.number}.`,
      width: 72,
    },
    {
      label: 'Image',
      render: (pokemon) => <PokemonImage className="mx-auto size-16" imageSrcUrl={pokemon.image} />,
      align: 'center',
      width: 120,
    },
    {
      label: 'Name',
      dataKey: 'name',
      className: 'font-medium',
    },
    {
      label: 'Max CP',
      dataKey: 'maxCP',
    },
    {
      label: 'Max HP',
      dataKey: 'maxHP',
    },
    {
      label: 'Flee rate',
      dataKey: 'fleeRate',
    },
    {
      label: 'Types',
      align: 'left',
      className: 'w-96',
      render: (pokemon) => (
        <div className="flex flex-wrap gap-1">
          {pokemon.types.map((type) => (
            <PokemonTypeBadge key={type} type={type} />
          ))}
        </div>
      ),
    },
    {
      label: 'Weaknesses',
      hidden: !state.showDetailInfo,
      render: (pokemon) => (
        <div className="flex flex-wrap gap-1">
          {pokemon.weaknesses.map((type) => (
            <PokemonTypeBadge key={type} type={type} />
          ))}
        </div>
      ),
    },
    {
      label: 'Resistances',
      hidden: !state.showDetailInfo,
      render: (pokemon) => (
        <div className="flex flex-wrap gap-1">
          {pokemon.resistant.map((type) => (
            <PokemonTypeBadge key={type} type={type} />
          ))}
        </div>
      ),
    },
  ]

  const actions: TableAction<PokemonInfoFragment>[] = [
    {
      key: 'favorite',
      label: (pokemon) => <HeartIcon className="size-4" fill={pokemon.isFavorite ? 'white' : undefined} />,
      onClick: handleToggleFavorite,
    },
    {
      key: 'sound',
      label: <SpeakerIcon className="size-4" />,
      onClick: handlePlaySound,
    },
    {
      key: 'detail',
      label: <EyeIcon className="size-4" />,
      onClick: handleViewDetail,
    },
  ]

  return (
    <Table<PokemonInfoFragment>
      data={pokemons}
      actions={actions}
      actionsWidth={250}
      columns={columns}
      loading={queries.pokemonsQuery.loading}
      onRowClick={handleViewDetail}
    />
  )
}
