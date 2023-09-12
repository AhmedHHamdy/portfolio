import { useContext } from "react"
import { MenuContext } from "./Menu"

export default function MenuButton({children}) {
  const { toggle } = useContext(MenuContext)

  return(
    <button className="menu-button" onClick={toggle}>{children}</button>
  )
}