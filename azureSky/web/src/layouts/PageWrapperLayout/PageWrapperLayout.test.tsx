import { render } from '@redwoodjs/testing/web'

import PageWrapperLayout from './PageWrapperLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PageWrapperLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PageWrapperLayout />)
    }).not.toThrow()
  })
})
