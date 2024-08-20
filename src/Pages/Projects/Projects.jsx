
import Project from '../../Components/Project/Project'
import Container from '../../Components/Container/Container'

const Projects = () => {
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
         <Project img = {'portfolio2'} title={'My Portfolio'} info={'Responseive website Coded using React,Sass'} url = {'https://belalmustafa-portfolio-reactapp.onrender.com/'}/>
        <Project img = {'GamesViewer'} title = {'Games Viewer'} info={'Responseive website Coded using React ,Sass, with use of Database (note:turn on vpn )'} url ={'https://games-viewer-reactapp.onrender.com'}/>
        <Project img = {'Amazon'} title={'Amazon '} info={'Responseive website (Immitation of Amazon) Coded using JavaScript,HTML ,Css'} url ={'https://belal-01.github.io/Amazon-app/amazon.html'}/>
        <Project img = {'NoteApp'} title={'Note App'} info={'Responseive website Coded using React ,Sass, with use of Database'} url={'https://note-app-react-app.onrender.com'}/>
        <Project img = {'facebook'} title={'Facebook'} info={'Immitation of facebook Coded using HTML , Sass '} url = {'https://belal-01.github.io/facebook-web/'}/>
        <Project img = {'Tenzies'} title={'Tenzes Game'} info={'Coded using React ,impementation of state managment'} url = {'https://tenzies-react-app.onrender.com'}/>
        <Project img = {'youtube'} title={'Youtube Design'} info={'Coded using ,HTML,CSS'} url = {'https://belal-01.github.io/youtube/'}/>
        <Project img = {'Portfolio'} title={'Portfolio Design'} info={'Coded using javaScript,HTML,Sass,'} url = {'https://portfolio-grwg.onrender.com/'}/>


      </div>

    </section>
    </Container>
  )
}

export default Projects
