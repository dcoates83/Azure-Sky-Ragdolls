// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof FaqQuestion> = (args) => {
//   return <FaqQuestion {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import FaqQuestion from './FaqQuestion'

export const generated = () => {
  return <FaqQuestion question={''} answer={''} />
}

export default {
  title: 'Components/FaqQuestion',
  component: FaqQuestion,
} as ComponentMeta<typeof FaqQuestion>
