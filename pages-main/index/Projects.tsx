import Image from 'next/image'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

import BobbleTitle from '../../components/BobbleTitle'
import Card from '../../components/Card'
import projectFCC from '../../public/images/freecodecamp.png'
import projectHeadless from '../../public/images/headless_2.png'
import { animDelay, triggerOnce } from '../../utils/constants'

const projects = [
  {
    title: 'Headless Commerce',
    description:
      'An open-source pluggable full-stack headless commerce solution made with TypeScript, React, Node.js, and GraphQL.',
    img: (
      <Image
        src={projectHeadless}
        width={700}
        height={340}
        alt="An open-source pluggable full-stack headless commerce solution made with TypeScript, React, Node.js, and GraphQL."
      />
    )
  },
  {
    title: 'freeCodeCamp Projects',
    description: 'All my 30 freeCodeCamp projects.',
    img: (
      <Image
        src={projectFCC}
        width={700}
        height={340}
        alt="An open-source pluggable full-stack headless commerce solution made with TypeScript, React, Node.js, and GraphQL."
      />
    )
  }
].map((item) => <div key={item.title}>{item.img}</div>)

const Projects = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  const [x, y] = useState(false)

  const { ref, inView } = useInView({
    threshold: 0.7,
    delay: animDelay,
    triggerOnce
  })

  const { ref: refB, inView: inViewB } = useInView({
    threshold: 0.7,
    delay: animDelay,
    triggerOnce
  })

  return (
    <div className="mt-8" onClick={() => setIsOpen(!isOpen)}>
      <BobbleTitle inView={inView} isOpen={isOpen}>
        Project
      </BobbleTitle>

      <Card
        className="-mt-8"
        inViewRef={ref}
        inView={inView}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        contentPrev={<div className="flex justify-center">{projects[0]}</div>}
        contentFull={
          <div>
            <h1>Headless Commerce Project</h1>

            <p className="mt-2">
              Source:&nbsp;
              <a
                href="https://github.com/codekcv/headless-commerce"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/codekcv/headless-commerce
              </a>
            </p>
          </div>
        }
      />

      <Card
        className="-mt-8"
        inViewRef={refB}
        inView={inViewB}
        isOpen={x}
        setIsOpen={y}
        contentPrev={<div className="flex justify-center">{projects[1]}</div>}
        contentFull={
          <div>
            <h1>freeCodeCamp Projects</h1>

            <p className="mt-2">These are my 30 freeCodeCamp projects.</p>
          </div>
        }
      />
    </div>
  )
}

export default Projects
