import classNames from 'classnames'

import { PokemonInfoFragment } from '~/codegen/graphql'
import { HeartIcon, SpeakerIcon } from '~/components/icons'
import { Button } from '~/components/ui'
import { usePokemonActions } from '~/hooks'

export interface PokemonActionsProps {
  className?: string
  pokemon: PokemonInfoFragment
  fixedWidth?: boolean
}

export const PokemonActions = ({ pokemon, className, fixedWidth }: PokemonActionsProps) => {
  const { handleToggleFavorite, handlePlaySound } = usePokemonActions()

  return (
    <div className={classNames('flex gap-2', className)}>
      <Button
        className={classNames('flex-1', { 'px-0': fixedWidth })}
        onClick={() => handleToggleFavorite(pokemon)}
        stopPropagation
        iconLeft={<HeartIcon className="mr-2 size-5" fill={pokemon.isFavorite ? 'currentColor' : 'none'} />}
      >
        {pokemon.isFavorite ? 'Unfavorite' : 'Favorite'}
      </Button>

      <Button
        className={classNames('flex-1', { 'px-0': fixedWidth })}
        onClick={() => handlePlaySound(pokemon)}
        stopPropagation
        iconLeft={<SpeakerIcon className="mr-2 size-5" />}
      >
        Sound
      </Button>
    </div>
  )
}
