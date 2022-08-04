import { useState } from 'react'
import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import UserNameCell from 'src/components/UserNameCell/UserNameCell'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { isAuthenticated, currentUser, logOut, userMetadata } = useAuth()

  return (
    <div>
      <header className=" flex h-16 items-center justify-between bg-slate-800 shadow-xl">
        <a href="">
          <div className="ml-6 flex text-gray-200 items-center lg:ml-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 md:h-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
            <p className="ml-3 text-gray-200 font-extrabold sm:text-base md:text-lg">
              Blog App
            </p>
          </div>
        </a>

        {isAuthenticated ? (
          <div className="mr-24 hidden space-x-7 md:flex">
            <div className="dropdown relative inline-block">
              <button className="inline-flex items-center rounded bg-green-500 py-2 px-5 font-semibold text-white">
                <span className="mr-1">
                  <UserNameCell id={userMetadata} />
                </span>
                <svg
                  className="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{' '}
                </svg>
              </button>
              <ul className="dropdown-menu absolute hidden pt-1 text-gray-700">
                <li className="">
                  <a
                    className="whitespace-no-wrap block rounded-t bg-gray-200 py-2 px-4 hover:bg-gray-400"
                    href="#"
                  ></a>
                </li>
                <li className="">
                  <a
                    className="whitespace-no-wrap block bg-gray-200 py-2 px-4 hover:bg-gray-400"
                    href="#"
                  >
                    Profile
                  </a>
                </li>
                <li className="">
                  <button
                    className="whitespace-no-wrap block rounded-b bg-gray-200 py-2 px-4 hover:bg-gray-400"
                    onClick={() => logOut()}
                  >
                    LogOut
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <ul className="mr-24 hidden space-x-7 md:flex">
            <Link
              to={routes.login()}
              className="rounded border-2 border-green-400 bg-green-400 px-5 py-2 text-center text-white hover:bg-green-500"
            >
              Login
            </Link>

            <Link
              to={routes.signup()}
              className="text rounded border-2 border-green-400 px-5 py-2 text-green-400 hover:border-green-400 hover:bg-green-400 hover:text-white"
            >
              SignUp
            </Link>
          </ul>
        )}

        {/* Mobile menu button */}
        {isAuthenticated ? (
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="mr-5 flex items-center md:hidden"
          >
            <button className="mobile-menu-button outline-none">
              <svg
                className=" h-6 w-6 text-gray-700 hover:text-gray-400"
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        ) : (
          <div className="mr-5 flex items-center md:hidden">
            <Link
              to={routes.login()}
              className="mr-2 rounded border-2 border-green-400 bg-green-400 px-3 py-1 text-center text-white hover:bg-green-500"
            >
              Login
            </Link>
            <Link
              to={routes.signup()}
              className=" text rounded border-2 border-green-400 px-3 py-1 text-green-400 hover:border-green-400 hover:bg-green-400 hover:text-white"
            >
              SignUp
            </Link>
          </div>
        )}
      </header>

      <div className={`${isOpen ? '' : 'hidden'}`}>
        {isAuthenticated ? (
          <ul className="border-2 border-gray-300 bg-gray-100">
            <li>
              <Link to={routes.home()}
                className="ml-4 block text-center py-4 text-sm font-extrabold transition duration-300 hover:text-gray-900"
              >
                <UserNameCell id={userMetadata} />
              </Link>
            </li>
            <li>
              <a
                href=""
                className="ml-4 block px-2 py-4 text-sm font-extrabold transition duration-300 hover:text-gray-500"
              >
                Profile
              </a>
            </li>
            <li>
              <button
                onClick={() => logOut()}
                className="ml-4 block px-2 py-4 text-sm font-extrabold transition duration-300 hover:text-gray-500"
              >
                LogOut
              </button>
            </li>
          </ul>
        ) : (
          <div className=""></div>
        )}
      </div>
    </div>
  )
}

export default NavBar
