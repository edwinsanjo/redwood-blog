import { render } from '@redwoodjs/testing/web'

import CreatePost from './CreatePost'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CreatePost', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CreatePost />)
    }).not.toThrow()
  })
})
