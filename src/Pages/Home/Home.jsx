
import PrimaryButton from '../../Components/PrimaryButton/Button'
import { FaGithub } from "react-icons/fa";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { FaDribbble } from "react-icons/fa";
import Container from '../../Components/Container/Container';

const Home = () => {
  return (
    <Container black ={true}>
       <section className='home section' id='Home'>
      <div className="home__aboutMe">
        <div className="home__aboutMe--header">
          <span className='second-title'>Hello ,</span>
          <span className='second-sub-title'> I'am</span>
        </div>
        <div className="home__aboutMe--title">
          <span className="sub-title">Belal Mustafa</span>
        </div>
        <div className="home__aboutMe--joptitle">
          <span className="second-title">Frontend web developer</span>
        </div>
        <div className="home__aboutMe--discrebtion">
          <p>
            Passionate Front-End Web Developer based in <br/> Damascuse ,Syria  &#x1F4CD;

          </p>
        </div>
        <div className="home__aboutMe--button">
          <a href="documents/CV.pdf" download={true}>
          <PrimaryButton >Download CV</PrimaryButton>
          </a>
        </div>
        <div className="home__aboutMe--socialMedia">
          <a href="https://github.com/Belal-01?tab=repositories" target='_blank'><span className="socialMedia__icon"><FaGithub /></span></a>
          <a href=""><span className="socialMedia__icon"><FaDribbble /></span></a>
          <a href="https://www.linkedin.com/in/belal-khobieh-427477324" target='_blank'><span className="socialMedia__icon"><PiLinkedinLogoBold /></span></a>
        </div>
      </div>
      <div className="home__img">
        <svg className = "home__blob" viewBox="0 0 550 591" xmlns="http://www.w3.org/2000/svg">
        <mask id="maskBlob" mask-type="alpha">
        <path d="M263 47.1782C270.426 42.891 279.574 42.891 287 47.1782L501.157 
        170.822C508.583 175.109 513.157 183.032 513.157 191.606V438.894C513.157 
        447.468 508.583 455.391 501.157 459.678L287 583.322C279.574 587.609 270.426 
        587.609 263 583.322L48.843 459.678C41.4174 455.391 36.843 447.468 36.843 
        438.894V191.606C36.843 183.032 41.4174 175.109 48.843 170.822L263 47.1782Z"/>
        </mask>
        <g mask="url(#maskBlob)">
        <path d="M263 47.1782C270.426 42.891 279.574 42.891 287 47.1782L501.157 
        170.822C508.583 175.109 513.157 183.032 513.157 191.606V438.894C513.157 
        447.468 508.583 455.391 501.157 459.678L287 583.322C279.574 587.609 270.426 
        587.609 263 583.322L48.843 459.678C41.4174 455.391 36.843 447.468 36.843 
        438.894V191.606C36.843 183.032 41.4174 175.109 48.843 170.822L263 47.1782Z"/>

        <rect x="37" width="476" height="630" fill="url(#pattern0)"/>
        </g>

        <rect x="37" width="476" height="300" fill="url(#pattern1)"/>

        <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use href="#imageBlob" transform="matrix(0.00143057 0 0 0.00108108 0.0404062 0)"/>
        </pattern>

        <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use href="#imageBlob" transform="matrix(0.00143057 0 0 0.00226984 0.0404062 0)"/>
        </pattern>

        {/* <!-- Insert your profile (recommended size: 640 x 940) --> */}
        <image className='home__img--profile'  id="imageBlob" width="640" height="925" href="img/profile.png"/>
        </defs>
        </svg>
      </div>
    </section>
    </Container>
   
  )
}

export default Home
