
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
        <Project img = {'GamesViewer'} title = {'Games Viewer'} info={'Responseive website Worked using React ,Sass, with use of Database (note:turn on vpn )'} url ={'https://games-viewer-reactapp.onrender.com'}/>
        <Project img = {'Amazon'} title={'Amazon '} info={'Responseive website (Immitation of Amazon) Worked using JavaScript,HTML ,Css'} url ={'https://belal-01.github.io/Amazon-app/amazon.html'}/>
        <Project img = {'NoteApp'} title={'Note App'} info={'Responseive website Worked using React ,Sass, with use of Database'} url={'https://note-app-react-app.onrender.com'}/>
        <Project img = {'facebook'} title={'Facebook'} info={'Immitation of facebook worked using HTML , Sass '} url = {'https://belal-01.github.io/facebook-web/'}/>
        <Project img = {'Tenzies'} title={'Tenzes Game'} info={'Worked using React ,impementation of state managment'} url = {'https://tenzies-react-app.onrender.com'}/>
        <Project img = {'Portfolio'} title={'Portfolio Design'} info={'worked using javaScript,HTML,Sass,'} url = {'https://portfolio-grwg.onrender.com/'}/>


      </div>

    </section>
    </Container>
  )
}

export default Projects
