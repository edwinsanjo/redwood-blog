import { render } from '@redwoodjs/testing/web'

import ViewPost from './ViewPost'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ViewPost', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ViewPost />)
    }).not.toThrow()
  })
})
