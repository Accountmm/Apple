import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { heroVideo, smallHeroVideo } from '../Utils/Index'
import { useEffect, useState } from "react"

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)


  function handleWindowWidth() {
    if (window.innerWidth < 790) {
      setVideoSrc(smallHeroVideo)
    } else {
      setVideoSrc(heroVideo)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowWidth)
    return () => {
      window.removeEventListener('resize', handleWindowWidth)
    }
  }, [])

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 1.7 })
    gsap.to('#cta', { opacity: 1, y: -50, delay: 1.7 })
  }, [])

  return (
    <section className='w-full nav-height bg-black relative'>
      <div className='h-5/6 w-full flex items-center justify-center flex-col' >
        <p id="hero" className='text-center font-semibold text-3xl text-gray-100 opacity-0 md:mb-0 mb-10'>Iphone 15 pro</p>
        <div className="md:w-10/12 w-9/12 ">
          <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
          </video>

        </div>
      </div>

      <div
        className="flex flex-col items-center translate-y-20 opacity-0"
        id="cta"
      >
        <a href="#highlights" className="px-5 py-2 rounded-3xl bg-blue my-5 hover:  border border-transparent hover:border  ">Buy</a>
        <p className="font-normal text-xl">From $199/Month or $999</p>
      </div>
    </section>
  )
}

export default Hero