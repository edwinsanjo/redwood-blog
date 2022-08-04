import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useAuth } from '@redwoodjs/auth'
import { toast, Toaster } from '@redwoodjs/web/dist/toast'
import { useMutation } from '@redwoodjs/web'

const POST_CREATE = gql`
  mutation PostCreate($type: CreateUserInput!) {
    createPost(type: $type) {
      id
      title
      content
      authorId
    }
  }
`

const CreatePost = () => {
  const { currentUser } = useAuth()

  const [create, { loading, error }] = useMutation(POST_CREATE, {
    onCompleted: () => {
      toast.success('Your post has been created.')
    },
    onError(error) {
      toast.error('Some Error Occured \n' + error.message)
    },
  })

  const [content, setContent] = useState(defaulMdText)
  const [title, setTitle] = useState('')
  const [activeTab, setActiveTab] = useState(true)

  const SubmitHandler = () => {
    if (!title || !content) {
      return toast.error('Plase fill in all the fields')
    }
    if (content == defaulMdText) {
      return toast.error('Clear the default text and write your own pls')
    }
    const userid = currentUser.id
    create({
      variables: {
        type: {
          title: title,
          content: content,
          authorId: userid,
        }
      },
    })
  }

  return (
    <div className="ml-10 lg:ml-20">
      <Toaster />
      <h2 className="">Create Post</h2>
      <div className="mx-10 flex flex-col lg:mx-20">
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="rounded bg-slate-200 p-2 text-lg text-gray-700 outline-none"
        />
        <br />
        <div className="flex flex-row gap-10">
          <button onClick={() => setActiveTab(true)} className="">
            Preview
          </button>
          <button onClick={() => setActiveTab(false)}>Edit</button>
        </div>
        <br />
        {activeTab ? (
          <div className="bg-gray-900 p-4 md:p-10 lg:p-20">
            <h2 className="mb-10 text-4xl font-bold text-white underline lg:text-4xl">
              {title}
            </h2>
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
        ) : (
          <textarea
            name=""
            className="h-[36rem] bg-gray-900 p-2 text-lg text-gray-300 outline-none"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        )}
        <button disabled={loading} onClick={() => SubmitHandler()}>
          Submit
        </button>
      </div>
    </div>
  )
}

export default CreatePost

const defaulMdText = `remove all theese lines and start your blog and use title instead of title (title 1)

**Bold**

*Italic*

~~Strikethrough~~

# heading 1
## heading 2
### heading 3

- list 1
- list 1
- list 1

1. list 2
2. list 2
3. list 2

column 1 | Column 2 | Column 3
---|:---:|---:
Left | Center | Right
1 | 2 | 3
4 | 5 | 6

![Img](https://www.gstatic.com/images/branding/lockups/2x/lockup_git_color_108x24dp.png)

[Link](https://www.example.com)

>  This is a blockquote

\`This is a code block \`

---
`
