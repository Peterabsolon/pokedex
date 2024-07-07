import classNames from 'classnames'

export interface PokemonImageProps {
  className?: string
  imageSrcUrl: string
}

export const PokemonImage = ({ className, imageSrcUrl }: PokemonImageProps) => {
  return (
    <div
      className={classNames('aspect-square h-auto bg-contain bg-center bg-no-repeat', className)}
      style={{ backgroundImage: `url("${imageSrcUrl}")` }}
    />
  )
}
