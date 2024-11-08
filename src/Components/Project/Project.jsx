import { useEffect } from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";

const Project = (props) => {
  useEffect(()=>{
   props.anim.reveal('.project',{interval:100})
  },[])
 
 
  return (
    <div className='project'>
      <img src={`img/${props.img}.png`} alt="product img" />
      <div className="project__review">
        <div className="project__review--header">
          <span>web</span>
        </div>
        <div className="project__review--title">
          <span className="second-title">
           {props.title}
          </span>
        </div>
        <div className="project__review--describtion">
          <p>
              {props.info}
          </p>
        </div>
        <div className="project_resources">
        <div className="project__review--viewer">
        <span>
        GitHub -
            <a className="project__review--viewer--link-icon" href={props.github} target='_blank'>
              <FaExternalLinkAlt />
            </a>
        </span>
          
        </div>
        <div className="project__review--viewer">
          <span className="">
            View Demo - 
            <a className="project__review--viewer--link-icon" href={props.url} target='_blank'>
              <FaExternalLinkAlt />
            </a>
          </span>
        </div>
        </div>   
      </div>      
    </div>
  )
}

export default Project
