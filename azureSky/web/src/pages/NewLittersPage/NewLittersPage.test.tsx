import { render } from '@redwoodjs/testing/web'

import NewLittersPage from './NewLittersPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('NewLittersPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewLittersPage />)
    }).not.toThrow()
  })
})
