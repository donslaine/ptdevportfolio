import SocialMedia from './SocialMedia'
import ContactForm from './ContactForm'
import SectionTitle from './SectionTitle'
import Shape from './Shape'

const Contact = () => {
  return (
    <section className="bg-gray-50 py-[100px]" id="contact">
      <div className="container">
        <SectionTitle title="Get In Touch" />

        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="col-span-5">
            <div className="space-y-2 font-medium">
              <p>truittpaul39@gmail.com</p>
              <p>(304)579-3341</p>
            </div>

            <SocialMedia className="mt-6 md:mt-10" />
          </div>

          <div className="col-span-7 mt-10 md:mt-0">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
