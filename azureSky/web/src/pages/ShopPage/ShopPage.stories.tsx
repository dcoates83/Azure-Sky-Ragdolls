import type { ComponentMeta } from '@storybook/react'

import ShopPage from './ShopPage'

export const generated = () => {
  return <ShopPage />
}

export default {
  title: 'Pages/ShopPage',
  component: ShopPage,
} as ComponentMeta<typeof ShopPage>
