import { MetaTags } from '@redwoodjs/web'
import NavBar from '../NavBar/NavBar'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const BlogImage = (props) => {
  return <img {...props} style={{ maxWidth: '100%' }} />
}

const ViewPost = ({ post }) => {
  const { id, title, content, authorId, createdAt } = post

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
    <>
      <MetaTags title={post.title} description="Post page" />
      <div className="min-h-screen w-screen bg-gray-800 text-white">
        <NavBar />
        <div className="pt-10">
          <div className="mx-5 rounded bg-[#1b1b1b] p-5 md:mx-10 md:p-10 lg:mx-20 lg:p-20">
            <p className="mb-10 text-4xl font-bold underline md:text-2xl lg:text-4xl">
              {title}
            </p>
            <ReactMarkdown
              children={content}
              remarkPlugins={[remarkGfm]}
              components={{
                img: ({ node, ...props }) => (
                  <img className=" py-5" {...props} />
                ),
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default ViewPost
