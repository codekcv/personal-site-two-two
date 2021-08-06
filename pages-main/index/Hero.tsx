import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import {
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineCodepen,
  AiOutlineGithub,
  AiOutlineTwitter
} from 'react-icons/ai'
import { FaAngleDoubleDown, FaDev, FaFreeCodeCamp } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'
import { InView } from 'react-intersection-observer'

import Bobble from '../../components/Bobble'
import profilePicture from '../../public/images/christian_villamin.jpg'
import { animDuration } from '../../utils/constants'

const contacts = [
  {
    name: 'GitHub',
    icon: <AiOutlineGithub size={48} />,
    link: 'http://github.com/codekcv'
  },
  {
    name: 'Twitter',
    icon: <AiOutlineTwitter size={48} />,
    link: 'https://twitter.com/codekcv'
  },
  {
    name: 'DEV',
    icon: <FaDev size={48} />,
    link: 'https://dev.to/codekcv'
  },
  {
    name: 'CodePen',
    icon: <AiOutlineCodepen size={48} />,
    link: 'https://codepen.io/codekcv'
  },
  {
    name: 'freeCodeCamp',
    icon: <FaFreeCodeCamp size={48} />,
    link: 'https://www.freecodecamp.org/codekcv'
  },
  {
    name: 'YouTube',
    icon: <AiFillYoutube size={48} />,
    link: 'https://www.youtube.com/channel/UC9NkngOuNAcPGfx4Nl3ODgg'
  },
  {
    name: 'LinkedIn',
    icon: <AiFillLinkedin size={48} />,
    link: 'https://www.linkedin.com/in/codekcv/'
  },
  {
    name: 'Email',
    icon: <IoIosMail size={48} />,
    link: 'mailto:ChristianVillamin31@gmail.com'
  }
].map((item) => (
  <motion.div key={item.name} className="mx-4 mt-6" whileHover={{ scale: 1.2 }}>
    <a href={item.link} target="_blank" rel="noopener noreferrer">
      {item.icon}
    </a>
  </motion.div>
))

const Hero = (): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolled && window.scrollY === 0) setIsScrolled(false)
      else if (!isScrolled && window.scrollY !== 0) setIsScrolled(true)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isScrolled])

  return (
    <div className="flex flex-col items-center">
      <motion.div
        className="flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: animDuration }}
        style={{
          height: 'calc(100vh - 85px - 48px - 2rem)'
        }}
      >
        <div className="flex flex-col items-center">
          <Image
            className="rounded-full overflow-hidden"
            src={profilePicture}
            width={256}
            height={256}
            alt="Christian Villamin's photo."
          />

          <Bobble>
            <h1
              style={{
                fontSize: 64,
                textShadow: '0 0.35rem 0px rgba(0,0,0,0.1)'
              }}
            >
              Christian Villamin
            </h1>
          </Bobble>

          <p className="text-[24px]">
            I&apos;m a software engineer specializing on web technologies.
          </p>

          <ul className="flex">{contacts}</ul>
        </div>
      </motion.div>

      <InView>
        {({ inView, ref }) => (
          <motion.div
            className="height-[48px]"
            variants={{
              out: { opacity: 0.15 },
              in: { opacity: 1 }
            }}
            initial="out"
            animate={inView && !isScrolled ? 'in' : 'out'}
          >
            <motion.div
              className="height-[48px]"
              ref={ref}
              animate={{
                transform: [
                  'translateY(-1rem)',
                  'translateY(0rem)',
                  'translateY(-1rem)'
                ]
              }}
              transition={{
                repeat: Infinity,
                duration: 3
              }}
            >
              <FaAngleDoubleDown size={48} />
            </motion.div>
          </motion.div>
        )}
      </InView>
    </div>
  )
}

export default Hero
