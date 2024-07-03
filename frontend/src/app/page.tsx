'use client'

import { observer } from 'mobx-react-lite'

import { Button } from '~/components'
import { app } from '~/store'

const Home = observer(() => {
  return (
    <main>
      <Button onClick={() => app.toast.info('Sup')}>Sup</Button>
    </main>
  )
})

export default Home
