import type { ComponentMeta, ComponentStory } from '@storybook/react'

import PageWrapperLayout from './PageWrapperLayout'

export const generated: ComponentStory<typeof PageWrapperLayout> = (args) => {
  return <PageWrapperLayout {...args} />
}

export default {
  title: 'Layouts/PageWrapperLayout',
  component: PageWrapperLayout,
} as ComponentMeta<typeof PageWrapperLayout>
