import { Button } from '~/components'
import { app } from '~/store'

export default function Home() {
  return (
    <main>
      <Button onClick={() => app.toast.info('Sup')}>Sup</Button>
    </main>
  )
}
