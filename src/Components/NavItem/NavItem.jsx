import  { memo } from 'react'

const NavItem = ({children,href,active,handleActiveColor,handleSideBar}) => {
const classe = active?'active':'';
 console.log(active)
  return (
    <a href={href} className={classe} onClick={()=>{
      handleActiveColor(children)
      handleSideBar()
    }}>
      {children}
    </a>
  )
}

export default memo(NavItem) ;
