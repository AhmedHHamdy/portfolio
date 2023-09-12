import { MenuContext } from "./Menu";
import { useContext } from "react"

export default function MenuDropdown({children}) {
  const { open } = useContext(MenuContext)
  
  return open ? (
    <div className="menu-container">
      {children}
    </div>
  ) : null
}