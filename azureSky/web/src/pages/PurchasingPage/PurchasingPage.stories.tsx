import type { ComponentMeta } from '@storybook/react'

import PurchasingPage from './PurchasingPage'

export const generated = () => {
  return <PurchasingPage />
}

export default {
  title: 'Pages/PurchasingPage',
  component: PurchasingPage,
} as ComponentMeta<typeof PurchasingPage>
