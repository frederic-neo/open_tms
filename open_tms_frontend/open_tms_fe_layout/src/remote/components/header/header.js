import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useOnclickOutside from 'react-cool-onclickoutside'
import Logo from '../../assets/img/logo.png'
import LogoTxt from '../../assets/img/logo-txt.svg'

const Header = () => {
  // const [userDetails, setUserDetails] = useState(null)

  const userDetails = {
    full_name: 'test_user',
    email: 'test@123',
  }
  const [profDropdown, setProfDropdown] = useState(false)
  const [responsiveView, setResponsiveView] = useState(false)
  const profDropContainer = useOnclickOutside(() => {
    setProfDropdown(false)
  })

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) {
        setResponsiveView(false)
      }
    }
    window.addEventListener('resize', handleResize)
  })

  return (
    <header className="border-ab-gray-medium fixed top-0 left-0 z-[999] w-full border-b bg-white">
      <div className="flex h-16 w-full px-4 md:items-center md:justify-between md:space-x-4 md:px-6 xl:px-12">
        <div className="flex flex-grow items-center py-2">
          <div className="flex w-full items-center">
            <Link to="/" className="flex flex-shrink-0 items-center focus:outline-none">
              <img className="max-w-[48px]" src={Logo} alt="" />
              <img className="lg-lt:hidden ml-3" src={LogoTxt} alt="" />
            </Link>
          </div>
        </div>
        <div className="flex flex-shrink-0 items-center">
          <div
            id="navbar-responsive"
            className={`nav-menu-wrapper custom-scroll-primary md-lt:bg-white md-lt:py-1.5 md-lt:shadow-lg ${
              !responsiveView ? 'md-lt:-right-64' : 'md-lt:right-0'
            }`}
          >
            {userDetails && (
              <div className="my-3 flex flex-col text-sm md:my-0 md:ml-4 md:flex-row md:items-center md:space-x-4 md-lt:items-start md-lt:space-y-3">
                <div className="relative float-left flex-shrink-0 md-lt:w-full" ref={profDropContainer}>
                  <div
                    onClick={() => !responsiveView && setProfDropdown(!profDropdown)}
                    className="flex h-8 cursor-pointer select-none items-center space-x-1.5"
                  >
                    <span className="bg-primary flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white capitalize">
                      {userDetails && userDetails?.full_name ? userDetails?.full_name[0] : userDetails?.email[0]}
                    </span>
                    <p className="text-ab-black w-full truncate text-xs font-semibold md:hidden">
                      {userDetails && userDetails?.full_name ? userDetails?.full_name : userDetails?.email}
                    </p>
                  </div>
                  <div
                    className={`border-ab-medium shadow-box dropDownFade top-12 right-0 z-10 bg-white py-3 md:absolute md:min-w-[260px] md:border md:px-4 md-lt:w-full ${
                      profDropdown ? '' : 'md:hidden'
                    }`}
                  >
                    {userDetails?.email && (
                      <div className="mb-2">
                        <p>Signed in as</p>
                        <span className=" font-semibold ">
                          {userDetails && userDetails?.full_name ? userDetails?.full_name : userDetails?.email}
                        </span>
                      </div>
                    )}
                    <ul>
                      <li className="py-2">
                        <Link
                          to="/profile"
                          className="text-ab-black hover:text-primary cursor-pointer text-sm hover:underline"
                        >
                          Profile Settings
                        </Link>
                      </li>
                      <li key="signout" onClick={signOut} className="py-2">
                        <span className="text-ab-red cursor-pointer text-sm hover:underline">Log out</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-shrink-0 items-center">
            <button
              type="button"
              onClick={() => setResponsiveView(!responsiveView)}
              className="ml-3 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center focus:outline-none md:hidden"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <span className={`hamburger-icon ${responsiveView ? 'active-hamburger' : ''}`} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
