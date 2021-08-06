import About from '../pages-main/index/About'
import Blogs from '../pages-main/index/Blogs'
import Hero from '../pages-main/index/Hero'
import Projects from '../pages-main/index/Projects'
import Stack from '../pages-main/index/Stack'

const Home = (): JSX.Element => (
  <>
    <Hero />
    <About />
    <Stack />
    <Projects />
    <Blogs />
  </>
)

export default Home
