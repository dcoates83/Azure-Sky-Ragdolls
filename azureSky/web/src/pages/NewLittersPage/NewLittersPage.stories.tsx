import type { ComponentMeta } from '@storybook/react'

import NewLittersPage from './NewLittersPage'

export const generated = () => {
  return <NewLittersPage />
}

export default {
  title: 'Pages/NewLittersPage',
  component: NewLittersPage,
} as ComponentMeta<typeof NewLittersPage>
