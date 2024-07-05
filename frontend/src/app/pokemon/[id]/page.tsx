interface PageParams {
  params: { id: string }
}

export const PokemonDetail = ({ params }: PageParams) => {
  const id = params.id

  return <div>Detail {id}</div>
}
