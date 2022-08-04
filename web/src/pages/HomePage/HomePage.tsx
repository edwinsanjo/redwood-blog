import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import PostsCell from 'src/components/PostsCell/PostsCell'
import NavBar from 'src/components/NavBar/NavBar'

const HomePage = () => {
  return (
    <div className='bg-gray-800 h-screen w-screen text-white'>
      <MetaTags title="Blog App" description="Home page" />
      <NavBar />
      <PostsCell />
    </div>
  )
}

export default HomePage
