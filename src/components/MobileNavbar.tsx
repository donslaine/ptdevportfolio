import  Link from 'next'
import navbar from '../data/navbar.json'

const MobileNavbar = ({ className }) => {
  return (
    <nav
      className={`overflow-hidden bg-black duration-300 sm:hidden ${
        className ?? ''
      }`}
    >
      <ul className="nav p-2">
        {navbar.map((item) => (
          <li key={item.id}>
            <Link
              spy={true}
              smooth={true}
              to={item.href}
              data-hover={item.name.toLowerCase()}
              className={`relative block cursor-pointer py-1 px-3 text-sm font-medium text-white duration-400 hover:bg-white hover:text-dark`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MobileNavbar
