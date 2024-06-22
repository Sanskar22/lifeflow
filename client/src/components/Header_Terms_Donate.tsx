import DropdownMenu from './DropdownMenu'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../UserContext'

const Header_Terms_Donate = () => {

  const user = useContext(UserContext)
  const value = (user?.user)


  return (
    <div>
      <header className="bg-gray-900 text-white p-4 shadow-md flex justify-between items-center">
        {value ? (
          <Link to='/main' className="flex items-center">
            <img
              src="logo3.png"
              alt="Blood Donation Logo"
              className="h-12 mr-2"
            />
            <h1 className="text-2xl">
              Life<span className="text-red-500">Flow</span>
            </h1>
          </Link>
        ) : (
          <Link to='/' className="flex items-center">
            <img
              src="logo3.png"
              alt="Blood Donation Logo"
              className="h-12 mr-2"
            />
            <h1 className="text-2xl">
              Life<span className="text-red-500">Flow</span>
            </h1>
          </Link>
        )}
        <DropdownMenu />
      </header>
      <div className='h-1 bg-red-500'></div>
    </div>
  )
}

export default Header_Terms_Donate
