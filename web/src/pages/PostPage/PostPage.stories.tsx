import PostPage from './PostPage'

export const generated = (args) => {
  return <PostPage id={42}  {...args} />
}

export default { title: 'Pages/PostPage' }
