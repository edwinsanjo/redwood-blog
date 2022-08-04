import { render } from '@redwoodjs/testing/web'

import CreatePostPage from './CreatePostPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CreatePostPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CreatePostPage />)
    }).not.toThrow()
  })
})
