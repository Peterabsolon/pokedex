export interface NoResultsProps {
  foo?: string
}

export const NoResults = ({ foo }: NoResultsProps) => {
  return <div className="flex w-full items-center justify-center py-16 text-lg font-bold">No results found</div>
}
