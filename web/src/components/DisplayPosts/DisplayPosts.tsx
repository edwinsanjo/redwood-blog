import { Link, routes } from '@redwoodjs/router'
import UserNameCell from '../UserNameCell/UserNameCell'

const DisplayPosts = ({ item }) => {
  const { id, title, content, authorId, createdAt } = item

  const d = new Date(createdAt)
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  const date = `${
    months[d.getMonth()]
    }-${d.getDate()} (${d.getHours()} hours ago)`

  return (
    <div className="m-4 border-2 p-4 px-20 shadow-lg">
      <Link to={routes.post({ id: id })}>
        <p className="text-sm">
          <UserNameCell id={authorId} />
        </p>
        <p className="text-sm">{date}</p>
        <p className="text-md font-bold">{title}</p>
      </Link>
    </div>
  )
}

export default DisplayPosts
