import { render } from '@redwoodjs/testing/web'

import PurchasingPage from './PurchasingPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PurchasingPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PurchasingPage />)
    }).not.toThrow()
  })
})
