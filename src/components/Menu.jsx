import { createContext, useState } from "react";

const MenuContext = createContext()

export default function Menu({children}) {
  const [open, setOpen] = useState(true)

  function toggle() {
    setOpen(prevOpen => !prevOpen)
  }

  return (
    <MenuContext.Provider value={{open, toggle}}>
      <div className="menu">
        {children}
      </div>
    </MenuContext.Provider>
  )
}

export { MenuContext }