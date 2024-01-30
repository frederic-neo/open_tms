/* eslint-disable no-unused-expressions */
import React, { useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'

const Sidebar = (props) => {
  // eslint-disable-next-line react/prop-types
  const { activePage, handleActivePage } = props
  const location = useLocation()

  useEffect(() => {
    const pathName = window?.location?.pathname
    const spaceMenu = [
      { pathname: 'home', slug: 'home' },
      { pathname: 'my-tickets', slug: 'my-tickets' },
      { pathname: 'assigned-tickets', slug: 'assigned-tickets' },
    ]
    handleActivePage(pathName === '/' ? 'home' : spaceMenu.find((menu) => pathName.includes(menu.pathname))?.slug)
  }, [location])

  return (
    <div className="custom-scroll-primary float-left flex h-full w-full flex-col justify-between overflow-auto pr-2">
      <div className="float-left w-full">
        <div className="float-left mb-2 w-full">
          <Link
            to="/"
            // onClick={() => handleActivePage('home')}
            className={`text-ab-sm hover:text-primary hover:bg-ab-gray-light group flex w-full cursor-pointer items-center space-x-2 py-2 px-3 font-semibold leading-normal transition-all ${
              activePage === 'home' ? 'text-primary bg-ab-gray-light' : 'text-ab-black'
            }`}
          >
            <svg
              className={`group-hover:fill-primary flex-shrink-0 ${
                activePage === 'home' ? 'fill-primary' : 'fill-[#484848]'
              }`}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.16675 16.542V8.77116L2.64591 9.93783L2.22925 9.37533L10.0001 3.41699L17.7917 9.35449L17.3542 9.93783L15.8334 8.75033V16.542H4.16675ZM4.89591 15.8128H15.1042V8.20866L10.0001 4.33366L4.89591 8.22949V15.8128ZM4.89591 15.8128H15.1042H4.89591ZM6.72925 12.3128C6.56258 12.3128 6.41328 12.2469 6.28133 12.1149C6.14939 11.983 6.08341 11.8337 6.08341 11.667C6.08341 11.5003 6.14939 11.351 6.28133 11.2191C6.41328 11.0871 6.56258 11.0212 6.72925 11.0212C6.88203 11.0212 7.02786 11.0871 7.16675 11.2191C7.30564 11.351 7.37508 11.5003 7.37508 11.667C7.37508 11.8337 7.30564 11.983 7.16675 12.1149C7.02786 12.2469 6.88203 12.3128 6.72925 12.3128ZM10.0001 12.3128C9.83341 12.3128 9.68411 12.2469 9.55216 12.1149C9.42022 11.983 9.35425 11.8337 9.35425 11.667C9.35425 11.5003 9.42022 11.351 9.55216 11.2191C9.68411 11.0871 9.83341 11.0212 10.0001 11.0212C10.1529 11.0212 10.2987 11.0871 10.4376 11.2191C10.5765 11.351 10.6459 11.5003 10.6459 11.667C10.6459 11.8337 10.5765 11.983 10.4376 12.1149C10.2987 12.2469 10.1529 12.3128 10.0001 12.3128ZM13.2709 12.3128C13.1042 12.3128 12.9549 12.2469 12.823 12.1149C12.6911 11.983 12.6251 11.8337 12.6251 11.667C12.6251 11.5003 12.6911 11.351 12.823 11.2191C12.9549 11.0871 13.1042 11.0212 13.2709 11.0212C13.4237 11.0212 13.5695 11.0871 13.7084 11.2191C13.8473 11.351 13.9167 11.5003 13.9167 11.667C13.9167 11.8337 13.8473 11.983 13.7084 12.1149C13.5695 12.2469 13.4237 12.3128 13.2709 12.3128Z" />
            </svg>
            <p className="truncate">Home</p>
          </Link>
        </div>
        <div className="float-left mb-2 w-full">
          <Link
            to="/my-tickets"
            // onClick={() => handleActivePage('manage-blocks')}
            className={`text-ab-sm hover:text-primary hover:bg-ab-gray-light group flex w-full cursor-pointer items-center space-x-2 py-2 px-3 font-semibold leading-normal transition-all ${
              activePage === 'my-tickets' ? 'text-primary bg-ab-gray-light' : 'text-ab-black'
            }`}
          >
            <svg
              className={`group-hover:fill-primary flex-shrink-0 ${
                activePage === 'my-tickets' ? 'fill-primary' : 'fill-[#484848]'
              }`}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.72925 2.70801H8.97925V8.95801H2.72925V2.70801ZM3.64591 3.62467V7.81217V3.62467ZM11.0417 2.70801H17.2917V8.95801H11.0417V2.70801ZM12.1876 3.62467V7.81217V3.62467ZM2.72925 11.0205H8.97925V17.2705H2.72925V11.0205ZM3.64591 12.1455V16.3538V12.1455ZM13.7292 11.0205H14.6251V13.6872H17.2917V14.6038H14.6251V17.2705H13.7292V14.6038H11.0417V13.6872H13.7292V11.0205ZM11.9584 3.62467V8.04134H16.3751V3.62467H11.9584ZM3.64591 3.62467V8.04134H8.06258V3.62467H3.64591ZM3.64591 11.9372V16.3538H8.06258V11.9372H3.64591Z" />
            </svg>
            <p className="truncate">My Tickets</p>
          </Link>
        </div>
        <div className="float-left mb-2 w-full">
          <Link
            to="/assigned-tickets"
            // onClick={() => handleActivePage('assigned-tickets')}
            className={`text-ab-sm hover:text-primary hover:bg-ab-gray-light group flex w-full cursor-pointer items-center space-x-2 py-2 px-3 font-semibold leading-normal transition-all ${
              activePage === 'assigned-tickets' ? 'text-primary bg-ab-gray-light' : 'text-ab-black'
            }`}
          >
            <svg
              className={`group-hover:fill-primary flex-shrink-0 ${
                activePage === 'assigned-tickets' ? 'fill-primary' : 'fill-[#484848]'
              }`}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.72925 2.70801H8.97925V8.95801H2.72925V2.70801ZM3.64591 3.62467V7.81217V3.62467ZM11.0417 2.70801H17.2917V8.95801H11.0417V2.70801ZM12.1876 3.62467V7.81217V3.62467ZM2.72925 11.0205H8.97925V17.2705H2.72925V11.0205ZM3.64591 12.1455V16.3538V12.1455ZM13.7292 11.0205H14.6251V13.6872H17.2917V14.6038H14.6251V17.2705H13.7292V14.6038H11.0417V13.6872H13.7292V11.0205ZM11.9584 3.62467V8.04134H16.3751V3.62467H11.9584ZM3.64591 3.62467V8.04134H8.06258V3.62467H3.64591ZM3.64591 11.9372V16.3538H8.06258V11.9372H3.64591Z" />
            </svg>
            <p className="truncate">Assigned Tickets</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
