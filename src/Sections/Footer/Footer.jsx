import { BsInstagram } from "react-icons/bs";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";
import { FaLaptopCode } from "react-icons/fa";


const Footer = (props) => {
  const [scrollUpClass ,setScrollUpClass] = useState('scroll-up');
  
  const scrollUp = ()=>{
    if(window.scrollY>=350)
     setScrollUpClass('scroll-up scroll-up__show') 
    else
    setScrollUpClass('scroll-up') 
  }

  useEffect(()=>{
   window.addEventListener('scroll',scrollUp)
   props.anim.reveal('.footer')
  },[])
  return (
    <div className="footer--container">
    <div className="footer">
      <div className="footer__logo">
      <h4 className="footer__logo--name">
      <span className="logoLapIcon">
          <FaLaptopCode/> 
      </span>Belal 
        <span > Mustafa</span>
      </h4>
      <div className="footer__logo--subtitute">
        <p>Front-End web developer</p>
      </div>
      </div>
      <div className="footer__contact">
      <a href="https://www.instagram.com/bilalmusstafa?igsh=azRnbmhkZmJnbjVx" target="_blank"><span className="contact__icon"><BsInstagram /></span></a>
      <a href="https://www.facebook.com/belal.khobieh?mibextid=JRoKGi" target="_blank"><span className="contact__icon"><FaFacebook /></span></a>
      <a href="https://www.linkedin.com/in/belal-mustafa-khubieh-427477324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><span className="contact__icon"><PiLinkedinLogoBold /></span></a>
      </div>
      <div className="footer__copyRight">
        <small>
          <span className="footer__copyRight--mark">&copy;</span>
          Copyright .All rights reserved  
          <span>
           for <a href="">Belal Mustafa</a>
          </span>
        </small>
      </div>
  </div>
  <a href="#" className={scrollUpClass}>
    <span className="scroll-up__icon">
      <FaArrowUp />
    </span>
  </a>
  </div>

  )
}

export default Footer
