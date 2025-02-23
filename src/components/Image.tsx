const Image = ({ src, ...props }) => {
  return (
    <>
      <div className="custom-image w-full">
        <img
          src={src}
          layout="fill"
          objectfit="contain"
          className="relative! h-unset! w-full!"
          {...props}
        />
      </div>
      <style jsx global>{`
        .custom-image > span {
          position: unset !important;
        }
      `}</style>
    </>
  )
}

export default Image
