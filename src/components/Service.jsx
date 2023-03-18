import Image from './Image'
import PropTypes from 'prop-types'

const Service = ({ thumb, title, desc, className }) => {
  return (
    <div
      className={`service group relative flex rounded-md px-3 py-5 duration-300 hover:bg-gray-50 ${serviceBefore} ${serviceAfter} ${
        className ?? ''
      }`}
    >
      {/* Service Icon */}
      <div className="relative mr-4 w-[50px] flex-shrink-0 self-start bg-white group-hover:bg-gray-50 md:w-auto">
        <Image src={thumb} alt={title} />
      </div>

      {/* Service Content */}
      <div>
        <h2 className="mb-3 text-base font-semibold">{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  )
}

const serviceBefore =
  'before:absolute before:left-10 before:top-9 before:h-[calc(100%-60px)] before:w-[1px] before:bg-gray-300'
const serviceAfter =
  'after:absolute after:left-9 after:bottom-4 after:h-[10px] after:w-[10px] after:rounded-full after:bg-gray-300'

Service.propTypes = {
  thumb: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
}

export default Service
