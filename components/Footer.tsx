const currentYear = new Date().getFullYear()

const Footer = (): JSX.Element => (
  <div className="flex justify-center items-center w-full h-[64px] mt-[25vh]">
    <p className="text-center" color="#666">
      © {currentYear} Christian Villamin | Built with&nbsp;
      <a
        href="https://www.gatsbyjs.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        gatsby
      </a>
      &nbsp;+&nbsp;
      <a
        href="https://chakra-ui.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        chakra
      </a>
      &nbsp;+&nbsp;
      <a
        href="https://www.framer.com/motion/"
        target="_blank"
        rel="noopener noreferrer"
      >
        motion
      </a>
    </p>
  </div>
)

export default Footer
