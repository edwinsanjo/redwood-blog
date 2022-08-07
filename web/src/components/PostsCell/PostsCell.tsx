import { Link,routes } from '@redwoodjs/router'
import type { PostsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import DisplayPosts from '../DisplayPosts/DisplayPosts'
import svg from 'src/components/ani.svg'


export const QUERY = gql`
  query PostsQuery {
    posts {
      id
      title
      content
      userId
      createdAt
    }
  }
`

export const Loading = () => (
  <div className="flex h-screen w-screen flex-col items-center justify-center bg-gray-800">
    <div className="loadingio-spinner-rolling-x0oqczl096a">
      <div className="ldio-0elo5jzcho7j">
        <div></div>
      </div>
    </div>
    <h2 className="text-2xl font-bold">Loading</h2>
  </div>
)

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ posts }: CellSuccessProps<PostsQuery>) => {
  return (
    <ul>
      {posts.map((item) => {
        console.log(item);

        return <li key={item.id}><DisplayPosts item={item} /></li>
      })}
    </ul>
  )
}
