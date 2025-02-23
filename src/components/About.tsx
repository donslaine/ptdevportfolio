import about from '../data/about.json'
import SocialMedia from './SocialMedia'
import SectionTitle from './SectionTitle'

const AboutMe = () => {
  return (
    <section
      className="pt-[80px] pb-[60px] lg:pt-[100px] lg:pb-[125px]"
      id="about"
    >
      <div className="container">
        <SectionTitle title="About Me" className="lg:hidden" />

        <div className="grid-cols-12 items-center md:grid">
          <div className="col-span-4 sm:text-center md:text-left">
            {/* <div className="relative inline-block leading-none drop-shadow-thumb sm:before:absolute sm:before:bottom-[-20px] sm:before:right-[-25px] sm:before:h-full sm:before:w-[calc(100%-20px)] sm:before:rounded-br-3xl sm:before:border-2 sm:before:border-white-light md:block lg:before:bottom-[-45px]"> */}
            <img
              width={380}
              height={470}
              className="rounded-md drop-shadow-thumb"
              src={`/images/${about.thumb}`}
            />
            {/* </div> */}
          </div>

          <div className="col-start-6 col-end-13">
            <div className="bio mt-5 sm:mt-10 md:mt-0">
              <SectionTitle title="About Me" className="hidden lg:block" />

              <div
                className="bio-text"
                dangerouslySetInnerHTML={{ __html: about.bio }}
              />

              <SocialMedia className="mt-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
