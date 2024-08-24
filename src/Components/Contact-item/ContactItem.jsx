import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import {  FaMapLocationDot } from "react-icons/fa6";

const ContactItem = (props) => {
  return (
    <div className="contact__item">
      <div className="contact__item--icon">
        {props.title ==='Phone'&&<FaPhoneAlt/>}
        {props.title ==='Email'&&<SiGmail/>}
        {props.title ==='Address'&&<FaMapLocationDot/>}
        
      </div>
      <div className="contact__item--info">
        <div className="contact__item--info--title">
          <span className="">{props.title}</span>
        </div>
        <div className="contact__item--info--data">
          <span className="">{props.data}</span>
        </div>
      </div>
    </div>
  )
}

export default ContactItem
