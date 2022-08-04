import PostCell from 'src/components/PostCell/PostCell'

interface Props {
  id: number
}

const PostPage = ({ id }: Props) => {
  return (
    <>
      <PostCell id={id} />
    </>
  )
}

export default PostPage
