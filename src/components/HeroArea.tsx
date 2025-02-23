import Shape from './Shape'

const heroBg = '/images/prague-triangles.png'

const HeroArea = () => {
  return (
    <section
      id="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
      className="relative flex h-[300px] items-center bg-cover bg-center-top bg-no-repeat sm:h-[450px] md:h-[500px] lg:h-[600px] xl:h-[1100px]"
    >
      <div className="container">
        <div className="mt-8 font-light">
          <h1 className="text-3xl font-light leading-none text-white sm:text-[45px] md:text-[55px]">
            PAUL TRUITT
          </h1>
          <h2 className="text-md mt-2 font-light tracking-4 text-white sm:mt-4 sm:text-lg">
            WEB DEVELOPER
          </h2>
          <h2 className="text-md mt-2 font-light tracking-4 text-white sm:mt-4 sm:text-lg">
            SOFTWARE ENGINEER
          </h2>
        </div>
      </div>

      <Shape className="hidden md:block" />
    </section>
  )
}

export default HeroArea
