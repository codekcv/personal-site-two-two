import { motion } from 'framer-motion'

const minVary = 0.85
const maxVary = 1.15

const Bobble: React.FC = (props) => {
  const { children } = props
  const passedProps = { ...props }
  const dirX = Math.random() < 0.5
  const dirY = Math.random() < 0.5

  const x = [
    `translateX(${dirX ? '-' : ''}0.12rem)`,
    `translateX(${dirX ? '' : '-'}0.12rem)`,
    `translateX(${dirX ? '-' : ''}0.12rem)`
  ]

  const y = [
    `translateY(${dirY ? '-' : ''}0.12rem)`,
    `translateY(${dirY ? '' : '-'}0.12rem)`,
    `translateY(${dirY ? '-' : ''}0.12rem)`
  ]

  delete passedProps.children

  return (
    <motion.div
      className="flex justify-center items-center"
      animate={{ transform: x }}
      transition={{
        repeat: Infinity,
        duration: 3 / (Math.random() * (maxVary - minVary) + minVary)
      }}
      {...passedProps}
    >
      <motion.div
        animate={{ transform: y }}
        transition={{
          repeat: Infinity,
          duration: Math.SQRT2 / (Math.random() * (maxVary - minVary) + minVary)
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

export default Bobble
