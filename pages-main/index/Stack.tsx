import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

import BobbleTitle from '../../components/BobbleTitle'
import Card from '../../components/Card'
import { animDelay, triggerOnce } from '../../utils/constants'

export const frontEndTechnologies = [
  'TypeScript',
  'React',
  'Redux',
  'Apollo Client',
  'styled-components',
  'styled-system',
  'React Hook Form',
  'Next.js',
  'React Testing Library'
].map((item) => (
  <li className="mx-2 list-none" key={item}>
    {item}
  </li>
))

export const backEndTechnologies = [
  'TypeScript',
  'Node.js',
  'Koa',
  'Apollo Server',
  'GraphQL',
  'PostgreSQL',
  'Prisma',
  'Nexus',
  'JWT'
].map((item) => (
  <li key={item} className="mx-2 list-none">
    {item}
  </li>
))

const Stack = (): JSX.Element => {
  const [isOpenBE, setIsOpenBE] = useState(false)
  const [isOpenFE, setIsOpenFE] = useState(false)

  const { ref, inView } = useInView({
    threshold: 0.5,
    delay: animDelay,
    triggerOnce
  })

  // TODO: Organize button.
  // Organize by -> App Size | Tech Category (framework, styling, state management, etc.)

  return (
    <div className="mt-2" ref={ref}>
      <BobbleTitle inView={inView} isOpen={isOpenBE || isOpenFE}>
        Technology Stack
      </BobbleTitle>

      <div className="flex justify-center -mt-8">
        <Card
          className="w-full mr-8"
          inView={inView}
          isOpen={isOpenBE}
          setIsOpen={setIsOpenBE}
          direction="right"
          contentPrev={
            <>
              <p className="text-center">Back-End</p>

              <div className="flex flex-wrap justify-center mt-6">
                {backEndTechnologies}
              </div>
            </>
          }
          contentFull={
            <>
              <div className="text-center">
                <div>
                  <h1>Current Favorite Stack:</h1>

                  <p className="mt-2">
                    TypeScript, Node.js, Koa, Apollo Server, PostgreSQL, Prisma,
                    Nexus
                  </p>
                </div>

                <div className="mt-8">
                  <h1>Frameworks</h1>

                  <p className="mt-2">Express, Koa, Fastify</p>
                </div>
              </div>
            </>
          }
        />

        <Card
          className="w-full ml-8"
          inView={inView}
          isOpen={isOpenFE}
          setIsOpen={setIsOpenFE}
          direction="left"
          contentPrev={
            <>
              <p className="text-center">Front-End</p>

              <div className="flex flex-wrap justify-center mt-6">
                {frontEndTechnologies}
              </div>
            </>
          }
          contentFull={
            <div className="text-center">
              <div>
                <h1>Current Favorite Stack:</h1>

                <p className="mt-4">
                  Next.js / Redux or Recoil / React Query or Apollo Client /
                  SCSS Modules or Chakra UI
                </p>
              </div>

              <div
                className="mx-auto mt-8 w-4/5"
                style={{
                  borderTop: '1px solid gray'
                }}
              />

              <div className="mt-8">
                <h1>Framework</h1>

                <p className="mt-2">React, Next.js, Gatsby</p>
              </div>

              <div className="mt-8">
                <h1>Styling</h1>

                <p className="mt-2">
                  SCSS Modules, styled-components / emotion, Chakra UI
                </p>
              </div>

              <div className="mt-8">
                <h1>Animation</h1>

                <p className="mt-2">
                  Framer Motion, Native CSS Transitions &amp; Animations
                </p>
              </div>

              <div className="mt-8">
                <h1>Client State Management</h1>

                <p className="mt-2">Redux, Recoil, Zustand</p>
              </div>

              <div className="mt-8">
                <h1>Network State Management</h1>

                <p className="mt-2">Apollo Client, React Query, SWR</p>
              </div>

              <div
                className="mx-auto mt-8 w-4/5"
                style={{
                  borderTop: '1px solid gray'
                }}
              />

              <div className="mt-8">
                <h1>Large Applications:</h1>

                <p className="mt-2">
                  Vanilla React / Next.js, Redux, Apollo Client, SCSS Modules /
                  Chakra UI / 3rd Party UI Library
                </p>
              </div>

              <div className="mt-8">
                <h1>Medium Applications:</h1>

                <p className="mt-2">
                  Vanilla React / Gatsby / Next.js, Recoil, React Query / SWR,
                  SCSS Modules / Chakra UI
                </p>
              </div>

              <div className="mt-8">
                <h1>Small Applications:</h1>

                <p className="mt-2">
                  Vanilla React / Gatsby / Next.js, Zustand, React Query / SWR,
                  SCSS Modules / Chakra UI / styled-components
                </p>
              </div>
            </div>
          }
        />
      </div>
    </div>
  )
}

export default Stack
