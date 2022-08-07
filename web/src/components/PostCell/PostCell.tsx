import type { FindPostQuery, FindPostQueryVariables } from 'types/graphql'
import { CellSuccessProps, CellFailureProps, MetaTags } from '@redwoodjs/web'
import ViewPost from '../ViewPost/ViewPost'

export const QUERY = gql`
  query FindPostQuery($id: Int!) {
    post: post(id: $id) {
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

export const Empty = () => <div>Wrong id in url</div>

export const Failure = ({
  error,
}: CellFailureProps<FindPostQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  post,
}: CellSuccessProps<FindPostQuery, FindPostQueryVariables>) => {
  return (
    <div>
      <ViewPost post={post}/>
    </div>
  )
}
