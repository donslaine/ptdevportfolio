import { Link } from 'react-scroll'
import navbar from '../data/navbar.json'
import { checkExternalLink } from '../utils/checkExternalLink'

const Navbar = ({ className }) => {
  return (
    <nav className={`navbar hidden sm:block ${className ?? ''}`}>
      <ul className="nav flex space-x-10">
        {navbar.map((item) => (
          <li key={item.id}>
            {checkExternalLink(item.href) ? (
              <a
                href={item.href}
                target="_blank"
                data-hover={item.name.toLowerCase()}
                className={`relative block cursor-pointer text-sm font-medium text-white after:duration-300 ${navItemHoverStyle}`}
              >
                <span className="block duration-300">{item.name}</span>
              </a>
            ) : (
              <Link
                spy={true}
                smooth={true}
                to={item.href}
                activeClass={navItemActiveStyle}
                data-hover={item.name.toLowerCase()}
                className={`relative block cursor-pointer text-sm font-medium text-white after:duration-300 ${navItemHoverStyle}`}
              >
                <span className="block duration-300">{item.name}</span>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

const navItemHoverStyle =
  'after:content-[attr(data-hover)] after:absolute after:left-1/2 after:top-3/4 after:opacity-0 after:-translate-x-1/2 hover:after:top-1/2 hover:after:opacity-100 hover:after:-translate-x-1/2 hover:after:-translate-y-1/2'

const navItemActiveStyle =
  'before:absolute before:h-[6px] before:w-[6px] before:rounded-full before:bg-white before:left-1/2 before:-translate-x-1/2 before:-bottom-3'

export default Navbar
