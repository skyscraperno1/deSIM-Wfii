import { Close } from "./icons/Close";
import { ArrowDown } from './icons/ArrowDown'
const Header = ({ title }) => {
  return (
    <header className="flex justify-between items-center h-[51px] px-4 bg-white">
      <Close></Close>
      <p>{ title }</p>
      <ArrowDown ></ArrowDown>
    </header>
  )
}

export default Header;