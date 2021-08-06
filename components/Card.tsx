import { AnimatePresence, motion } from 'framer-motion'
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useRef,
  useState
} from 'react'

import { animDuration } from '../utils/constants'
import Dots from './Dots'

type Props = {
  className?: string
  inView?: boolean
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  contentPrev: ReactNode
  contentFull: ReactNode
  direction?: 'left' | 'right' | 'up' // Default is down
  inViewRef?: (node?: Element | null | undefined) => void
}

type SizeProps = null | { width: number; height: number }

const Card: React.FC<Props> = (props) => {
  const styleProps: Partial<Props> = { ...props }
  const { isOpen, setIsOpen, contentPrev, contentFull } = props
  const [size, setSize] = useState<SizeProps>(null)
  const [move, setMove] = useState({ x: 0, y: 0 })
  const [zIndex, setZIndex] = useState(false)
  const [isHover, setIsHover] = useState(false)
  const posRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  delete styleProps.inView
  delete styleProps.isOpen
  delete styleProps.setIsOpen
  delete styleProps?.className

  useEffect(() => {
    if (isOpen) {
      document.body.style.height = '100%'
      document.body.style.overflow = 'hidden'

      const targX = window.innerWidth / 2 - 384 - 128
      const currX = posRef?.current?.getBoundingClientRect().x ?? 0
      const posY = (posRef?.current?.getBoundingClientRect().y ?? 0) - 32

      setMove({ x: targX - currX, y: posY * -1 })
      setZIndex(true)
    } else {
      document.body.style.height = 'initial'
      document.body.style.overflow = 'initial'

      setTimeout(() => {
        setZIndex(false)
      }, 400)
    }
  }, [isOpen])

  useEffect(() => {
    if (posRef?.current) {
      setSize({
        width: posRef.current.getBoundingClientRect().width,
        height: posRef.current.getBoundingClientRect().height
      })
    }
  }, [])

  const handleOpen = () => {
    if (isOpen && cardRef?.current) {
      cardRef.current.scroll({ top: 0, behavior: 'smooth' })
    }

    setIsOpen(!isOpen)
  }

  let transform = 'translate(0rem, -3rem)'

  if (props?.direction) {
    const { direction: dir } = props

    switch (dir) {
      case 'left':
      case 'right':
        transform = `translate(${dir === 'left' ? '' : '-'}3rem, 0rem)`
        break
      case 'up':
        transform = 'translate(0rem, 3rem)'
        break
    }
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed left-0 top-0 h-screen w-full z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            style={{
              backgroundColor: '#ADD8E6'
            }}
          />
        )}
      </AnimatePresence>

      <motion.div
        className={`
        ${props?.className ?? ''}
        ${zIndex ? 'z-30' : 'z-0'}
        relative`}
        ref={posRef}
        variants={{
          out: {
            opacity: 0,
            transform,
            transition: { duration: animDuration, ease: 'easeOut' }
          },
          in: {
            opacity: 1,
            transform: 'translate(0rem, 0rem)',
            transition: { duration: animDuration, ease: 'easeOut' }
          }
        }}
        initial="out"
        animate={props.inView ? 'in' : 'out'}
        style={{ ...(size && { ...size }) }}
        {...styleProps}
      >
        <motion.div
          {...(props?.inViewRef && { ref: props.inViewRef })}
          whileHover={{
            transform: isOpen
              ? 'initial'
              : `translateY(${isOpen ? '0' : '-0.5'}rem)`
          }}
          onHoverStart={() => setIsHover(true)}
          onHoverEnd={() => setIsHover(false)}
        >
          <motion.div
            className="bg-white cursor-pointer rounded-xl overflow-x-hidden p-8"
            ref={cardRef}
            id="card-container"
            onClick={handleOpen}
            variants={{
              close: {},
              open: {
                transform: `translate(${move.x}px, ${move.y}px)`,
                width: 1024,
                height: 'calc(100vh - 64px)'
              }
            }}
            animate={isOpen ? 'open' : 'close'}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            style={{
              overflowY: isOpen ? 'scroll' : 'hidden',
              border: '1px dotted rgba(0, 0, 0, 0.1)',
              boxShadow:
                '0 0.75rem 3rem 0em rgba(0, 0, 0, 0.05), 0 0.75rem 0rem 0rem rgba(0, 0, 0, 0.05)',
              ...(size && { ...size })
            }}
          >
            <motion.div
              className="flex justify-center items-center"
              key="prev"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div {...(size && { style: { ...size } })}>{contentPrev}</div>
            </motion.div>

            <AnimatePresence exitBeforeEnter>
              {isOpen && (
                <motion.div
                  className="-mt-8 pr-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{
                    width: 'calc(1024px - 2rem)'
                  }}
                >
                  <div>{contentFull}</div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {isHover && !isOpen && (
                <motion.div
                  className="absolute flex justify-center items-center top-0 left-0 w-full h-full mx-auto pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div
                    className="absolute top-0 left-0 w-full h-full opacity-40 rounded-xl"
                    style={{ backgroundColor: '#ADD8E6' }}
                  />

                  <Dots />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  )
}

export default Card
