
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
        <Project anim={anim} img = {'portfolio2'} title={'My Portfolio'} info={'Responseive website Coded using React,Sass'} url = {'https://belalmustafa-portfolio-reactapp.onrender.com/'} github={'https://github.com/Belal-01/myPortfolio.git'}/>

        <Project anim={anim} img = {'znCompany'} title={'Construction Company'} info={'Multi Pages website for instruction and building Company'} url = {'https://zn-constructioncompany.onrender.com'}
        github={'https://github.com/Belal-01/ZN-ConstructionCompany.git'}/>

        <Project anim={anim} img = {'storeDashboard'} title={'Store Dashboard'} info={'Displays data analytics using charts to present the store data in an easy way, the dashboard is linked with local apis'} url = {'https://storedashboard.onrender.com/'}
        github={''}/>

        <Project anim={anim} img = {'GamesViewer'} title = {'Games Viewer'} info={'Responseive website Coded using React ,Sass, with use of Database (Note:Turn on VPN)'} url ={'https://games-viewer-reactapp.onrender.com'} github={'https://github.com/Belal-01/CYBROG-Game.git'}/>
        <Project anim={anim} img = {'iPhone'} title = {'3D iPhone'} info={'A website resembling Apples iPhone 15 Pro page developed using React , Three.js and GSAP.'} url ={'https://threed-iphonee.onrender.com'} github={'https://github.com/Belal-01/3D-iPhon.git'}/>
        <Project anim={anim} img = {'Amazon'} title={'Amazon '} info={'A website resembling Amazone web pages developed using JavaScript,HTML ,Css'} url ={'https://belal-01.github.io/Amazon-app/amazon.html'} 
        github={'https://github.com/Belal-01/Amazon-app.git'}/>
        <Project anim={anim} img = {'NoteApp'} title={'Note App'} info={'Responseive website Coded using React ,Sass, with use of Database (Note:Turn on VPN)'} url={'https://note-app-react-app.onrender.com'} github={'https://github.com/Belal-01/Note-app.git'}/>
        {/* <Project anim={anim} img = {'facebook'} title={'Facebook'} info={'Main page of Facebook Coded using HTML , Sass '} url = {'https://belal-01.github.io/facebook-web/'}/> */}
        <Project anim={anim} img = {'KanBan'} title={'Todo List'} info={'Coded using React , React-router,state managment using zustand'} url = {'https://kanban-6ln6.onrender.com/'}
        github={'https://github.com/Belal-01/KanBan.git'}/>
        <Project anim={anim} img = {'Tenzies'} title={'Tenzes Game'} info={'Coded using React ,implementation of state managment'} url = {'https://tenzies-react-app.onrender.com'}
        github={'https://github.com/Belal-01/Tenzies-Game.git'}/>
        <Project anim={anim} img = {'quiz app'} title={'Quiz App'} info={'Coded using React ,React Router,state managment using React-redux'} url = {'https://quiz-app-9hi8.onrender.com/'}
         github={'https://github.com/Belal-01/Quiz-App.git'}/>
        {/* <Project anim={anim} img = {'Portfolio'} title={'Portfolio Design'} info={'Coded using javaScript,HTML,Sass,'} url = {'https://portfolio-grwg.onrender.com/'}/> */}
      </div>
    </section>
    </Container>
  )
}

export default Projects
