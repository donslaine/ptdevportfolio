const Preloader = ({ preloaded }) => (
  <div
    className={`fixed inset-0 flex before:absolute before:right-0 before:top-0 before:h-full before:w-1/2 before:bg-dark after:absolute after:left-0 after:top-0 after:h-full after:w-1/2 after:bg-dark ${
      preloaded
        ? 'pointer-events-none z-10 opacity-0 before:animate-preloaded after:animate-preloaded'
        : 'z-50'
    }`}
  >
    <div
      className={`relative z-50 m-auto h-[250px] w-[1px] overflow-hidden duration-300 before:absolute before:left-0 before:top-1/2 before:h-0 before:w-full before:-translate-y-1/2 before:animate-lineheight before:bg-white after:absolute after:left-0 after:top-0 after:h-full after:w-full after:animate-lineround after:bg-[#777] ${
        preloaded ? 'pointer-events-none !h-full opacity-0 after:opacity-0' : ''
      }`}
    />
  </div>
)

export default Preloader
