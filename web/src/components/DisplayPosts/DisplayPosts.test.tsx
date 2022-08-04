import { render } from '@redwoodjs/testing/web'

import DisplayPosts from './DisplayPosts'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DisplayPosts', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DisplayPosts />)
    }).not.toThrow()
  })
})
