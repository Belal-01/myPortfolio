import React, { useCallback, useEffect} from 'react'
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import NavItem from '../../Components/NavItem/NavItem';
import { FaLaptopCode } from "react-icons/fa";



const Header = () => {
 const [activSidBar,setActivSideBar] = React.useState(false);
 const [navClass,setNavClass] = React.useState('navbar');
 const [menuActiveColor,setMenuActiveColor] = React.useState(()=>JSON.parse(localStorage.getItem('colors'))||{
  Home:true,
  About:false,
  Services:false,
  Projects:false,
  Contact:false
  })
  
  React.useEffect(()=>{
   const  sections = document.querySelectorAll('.section');
    window.addEventListener('scroll',()=>{
      blurHeader();
      activeNavLink(sections);
    })

      //============    adding event listener for the document     ================  
    document.addEventListener('click',(event)=>{
      const sideMenu = document.querySelector('.nav-menu');
      const toggleButton = document.querySelector('.toggle-button');
            console.log(sideMenu)
            if(!toggleButton.contains(event.target)&&!sideMenu.contains(event.target)){
               closeSideBar();
            }            
    })
      
    },[])
    

  
  

   React.useEffect(()=>{
    localStorage.setItem('colors',JSON.stringify(menuActiveColor));
  },[menuActiveColor])

 const blurHeader =()=>{
 const naCla = window.scrollY>=50?'navbar blur-navbar':'navbar';
 setNavClass(naCla);
 }


/// ===========    for sidebar   =====================

 const handletogglebutton = ()=>{
  setActivSideBar(prevState =>!prevState);
 }

 const closeSideBar = useCallback(()=>{
  setActivSideBar(false);
 },[])
 
   const classes = activSidBar?'nav-menu nav-menu__active':'nav-menu';
//=============   handle avtive nav item color  ========= 

const handleActiveNavItemColor = useCallback((item)=>{
 setMenuActiveColor(
 {Home:false,
  About:false,
  Services:false,
  Projects:false,
  Contact:false
  });

  if(item==='Home') {
    setMenuActiveColor(prevState=>({...prevState,Home:true}));
  }else if(item==='About')
    setMenuActiveColor(prevState=>({...prevState,About:true}));
  else if(item === 'Services')
    setMenuActiveColor(prevState=>({...prevState,Services:true}));
  else if(item === 'Projects')
    setMenuActiveColor(prevState=>({...prevState,Projects:true}));
  else
  setMenuActiveColor(prevState=>({...prevState,Contact:true}));
},[])

// =========  ===========    handle action active link  ====================

const activeNavLink = useCallback((sections)=>{
  sections.forEach((current)=>{
    const sectionTop = current.offsetTop-80;
    const sectionHeight = current.offsetHeight
    const sectionId = current.getAttribute('id')
    if(window.scrollY>sectionTop&&window.scrollY<sectionTop+sectionHeight) {
      handleActiveNavItemColor(sectionId);
    }
  })
},[])



  return (
    <div className={navClass}>
      <div className="navbar-logo">
        <h4>
          <span className="logoLapIcon">
          <FaLaptopCode/> 
          </span>
          Belal 
          <span> Mustafa</span>
        </h4>
      </div>
      <span className='toggle-button' onClick={handletogglebutton}>
        <IoIosMenu />
      </span>
     
     <nav className={classes}>
        <ul>
          <li>
            <IoCloseOutline onClick={handletogglebutton}/>
          </li>
          
          <li>
            <NavItem href='#Home' active={menuActiveColor.Home} handleActiveColor={handleActiveNavItemColor} 
            handleSideBar = {closeSideBar}>
             Home
            </NavItem>
          </li>
          <li>
           <NavItem href='#About' active={menuActiveColor.About} handleActiveColor={handleActiveNavItemColor}
           handleSideBar = {closeSideBar}>
             About
            </NavItem>
          </li>
          <li>
           <NavItem href='#Services' active={menuActiveColor.Services} handleActiveColor={handleActiveNavItemColor}
           handleSideBar = {closeSideBar}>
             Services
            </NavItem>
          </li>
          <li>
           <NavItem href='#Projects' active={menuActiveColor.Projects} handleActiveColor={handleActiveNavItemColor}
           handleSideBar = {closeSideBar}>
             Projects
            </NavItem>          
          </li>
          <li>
            <NavItem href='#Contact' active={menuActiveColor.Contact} handleActiveColor={handleActiveNavItemColor}
            handleSideBar={closeSideBar}>
             Contact
            </NavItem>
          </li>
        </ul>
      </nav>

    </div>
  )
}

export default Header
