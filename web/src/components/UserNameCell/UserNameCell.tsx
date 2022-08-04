import type { FindUserNameQuery, FindUserNameQueryVariables } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindUserNameQuery($id: String!) {
    user: user(id: $id) {
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindUserNameQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  user
}: CellSuccessProps<FindUserNameQuery, FindUserNameQueryVariables>) => {
  console.log(user.name);

  return <>{user.name}</>
}
