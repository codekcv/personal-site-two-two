/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

import { animDuration } from '../utils/constants'
import Bobble from './Bobble'

type Props = {
  inView: boolean
  isOpen: boolean
}

const inOutVariants = {
  out: {
    opacity: 0,
    transform: 'scale(1.5) translateY(6rem)'
  },
  in: { opacity: 1, transform: 'scale(1) translateY(0rem)' }
}

const BobbleTitle: React.FC<Props> = ({ inView, isOpen, children }) => {
  const [isActive, setIsActive] = useState(false)
  const [titleY, setTitleY] = useState(0)
  const titleRef = useRef<any>(null)

  useEffect(() => {
    if (isOpen) {
      const titlePosY = titleRef?.current?.getBoundingClientRect().y ?? 0
      setTitleY(titlePosY - (window.innerHeight / 2 - 64))
      setIsActive(true)
    } else {
      setTimeout(() => {
        setIsActive(false)
      }, 400)
    }
  }, [isOpen])

  return (
    <Bobble
      className={`
      ${isActive ? 'z-40 pointer-events-none' : 'z-10'}
      relative`}
    >
      <motion.div
        variants={{
          close: {},
          open: {
            transform: `translate(-560px, ${titleY * -1}px) rotate(-90deg)`
          }
        }}
        transition={{ duration: 0.4 }}
        animate={isOpen ? 'open' : 'close'}
      >
        <motion.h1
          className="text-[4rem] text-center"
          variants={inOutVariants}
          initial="out"
          animate={inView ? 'in' : 'out'}
          transition={{ duration: animDuration, ease: 'easeOut' }}
          ref={titleRef}
          style={{
            textShadow: '0 0.35rem 0px rgba(0,0,0,0.1)'
          }}
        >
          {children}
        </motion.h1>
      </motion.div>
    </Bobble>
  )
}
export default BobbleTitle
