const currentYear = new Date().getFullYear()

const Footer = (): JSX.Element => (
  <div className="flex justify-center items-center w-full h-[64px] mt-[25vh]">
    <p className="text-center" color="#666">
      © {currentYear} Christian Villamin
    </p>
  </div>
)

export default Footer
