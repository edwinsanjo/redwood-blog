import { Redirect, routes } from '@redwoodjs/router'
import NavBar from 'src/components/NavBar/NavBar'
import {useAuth} from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'
import CreatePost from 'src/components/CreatePost/CreatePost'

const CreatePostPage = () => {

  const { isAuthenticated } = useAuth()
  if (!isAuthenticated) <Redirect to={routes.login()} />


  return (
    <div className="min-h-screen w-screen bg-gray-800 text-white">
      <NavBar />
      <MetaTags title="Create Posts" description="Create Posts Here" />
      <CreatePost />
    </div>
  )
}

export default CreatePostPage
