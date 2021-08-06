import { motion } from 'framer-motion'

import Bobble from './Bobble'

const parentVariants = {
  visible: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3,
      repeat: Infinity
    }
  },
  hidden: {}
}

const childVariants = {
  visible: {
    opacity: 1,
    transform: ['translateY(0rem)', 'translateY(-0.5rem)', 'translateY(0rem)']
  },
  hidden: {
    opacity: 0
  }
}

const dots = ['.', '.', '.'].map((dot, idx) => (
  <motion.h1 key={idx} className="text-8xl" variants={childVariants}>
    <Bobble>
      <p style={{ transform: 'translateY(-2.25rem)' }}>{dot}</p>
    </Bobble>
  </motion.h1>
))

const Dots = (): JSX.Element => (
  <motion.div
    className="flex pointer-events-none"
    variants={parentVariants}
    initial="hidden"
    animate="visible"
  >
    {dots}
  </motion.div>
)

export default Dots
