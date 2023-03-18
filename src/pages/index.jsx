import { useEffect, useState } from 'react'
import Header from '../components/Header'
import AboutMe from '../components/About'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import HeroArea from '../components/HeroArea'
import Services from '../components/Services'
import Preloader from '../components/Preloader'
import Portfolios from '../components/Portfolios'
import Resume from '../components/Resume'

const Home = () => {
  const [preloaded, setPreloaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setPreloaded(true)
    }, 800)
  }, [])

  return (
    <div className="app">
      <Preloader preloaded={preloaded} />
      <Header />
      <HeroArea />
      <AboutMe />
      <Services />
      <Portfolios />
      <Resume />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
