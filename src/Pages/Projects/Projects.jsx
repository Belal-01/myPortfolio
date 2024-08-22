
import Project from '../../Components/Project/Project'
import Container from '../../Components/Container/Container'

const Projects = ({anim}) => {
  return (
    <Container black={true}>    
    <section className='projects section' id="Projects">
      <div className="projects__header">
        <span className="second-title">My </span>
        <span className="second-sub-title"> projects</span>
      </div>
      <div className="projects__title">
        <span className='title'>Recent Projects </span>
      </div>
      <div className="projects__gallery">
        <Project anim={anim} img = {'portfolio2'} title={'My Portfolio'} info={'Responseive website Coded using React,Sass'} url = {'https://belalmustafa-portfolio-reactapp.onrender.com/'}/>
        <Project anim={anim} img = {'GamesViewer'} title = {'Games Viewer'} info={'Responseive website Coded using React ,Sass, with use of Database (Note:Turn on VPN)'} url ={'https://games-viewer-reactapp.onrender.com'}/>
        <Project anim={anim} img = {'Amazon'} title={'Amazon '} info={'Responseive website Coded using JavaScript,HTML ,Css'} url ={'https://belal-01.github.io/Amazon-app/amazon.html'}/>
        <Project anim={anim} img = {'NoteApp'} title={'Note App'} info={'Responseive website Coded using React ,Sass, with use of Database (Note:Turn on VPN)'} url={'https://note-app-react-app.onrender.com'}/>
        <Project anim={anim} img = {'facebook'} title={'Facebook'} info={'Main page of Facebook Coded using HTML , Sass '} url = {'https://belal-01.github.io/facebook-web/'}/>
        <Project anim={anim} img = {'Tenzies'} title={'Tenzes Game'} info={'Coded using React ,implementation of state managment'} url = {'https://tenzies-react-app.onrender.com'}/>
        <Project anim={anim} img = {'youtube'} title={'Youtube Design'} info={'Main page of Youtube  Coded using ,HTML,CSS'} url = {'https://belal-01.github.io/youtube/'}/>
        <Project anim={anim} img = {'Portfolio'} title={'Portfolio Design'} info={'Coded using javaScript,HTML,Sass,'} url = {'https://portfolio-grwg.onrender.com/'}/>


      </div>

    </section>
    </Container>
  )
}

export default Projects
