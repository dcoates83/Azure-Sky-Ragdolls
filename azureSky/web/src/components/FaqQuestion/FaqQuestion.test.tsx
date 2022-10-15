import { render } from '@redwoodjs/testing/web'

import FaqQuestion from './FaqQuestion'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FaqQuestion', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FaqQuestion question={''} answer={''} />)
    }).not.toThrow()
  })
})
