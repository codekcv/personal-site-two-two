const menus = ['Home', 'Projects', 'Blogs', 'Contact'].map((menu) => (
  <li key={menu} className="mx-2 list-none">
    <span>{menu}</span>
  </li>
))

const Header = (): JSX.Element => (
  <div className="w-full my-8 flex justify-center items-center">
    <div className="flex">{menus}</div>
  </div>
)

export default Header
