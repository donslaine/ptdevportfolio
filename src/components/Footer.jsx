import Logo from './Logo'
import { animateScroll } from 'react-scroll'
import { IoIosArrowUp } from 'react-icons/io'

const Footer = () => {
  return (
    <footer className="relative bg-gray-50 pt-10 pb-5 md:pt-14 lg:pt-5">
      <div className="container">
        <div className="items-center justify-between text-center lg:flex lg:text-left">
          <Logo variant="dark" />

          {/* Copyright */}
          <p>&copy; Paul Truitt {new Date().getFullYear()}</p>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={() => animateScroll.scrollToTop()}
        className="absolute left-1/2 -top-[35px] h-14 w-14 -translate-x-1/2 rounded-full bg-white text-center shadow-scroll-top md:h-[70px] md:w-[70px]"
      >
        <IoIosArrowUp className="inline text-2xl" />
      </button>
    </footer>
  )
}

export default Footer
