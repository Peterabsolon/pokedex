import '../src/assets/globals.css'

import type { Preview } from '@storybook/react'
import React from 'react'

import { font } from '../src/assets'
import { ApolloWrapper } from '../src/lib/apollo.wrapper'

const preview: Preview = {
  decorators: [
    (Story) => (
      <ApolloWrapper>
        <div className={font.className}>
          <Story />
        </div>
      </ApolloWrapper>
    ),
  ],

  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#020617', // bg-slate-950
        },
      ],
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
