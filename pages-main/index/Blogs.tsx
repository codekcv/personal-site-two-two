import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

import BobbleTitle from '../../components/BobbleTitle'
import Card from '../../components/Card'
import { animDelay, triggerOnce } from '../../utils/constants'

const Blogs = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.7,
    delay: animDelay,
    triggerOnce
  })

  return (
    <div className="mt-8" ref={ref} onClick={() => setIsOpen(!isOpen)}>
      <BobbleTitle inView={inView} isOpen={isOpen}>
        Blogs
      </BobbleTitle>

      <Card
        className="-mt-8"
        inView={inView}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        contentPrev={
          <div className="flex justify-center items-center h-[240px]">
            <p className="text-4xl">Coming Soon!</p>
          </div>
        }
        contentFull={<p>/blogs</p>}
      />
    </div>
  )
}

export default Blogs
