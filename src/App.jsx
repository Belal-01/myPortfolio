
import './App.css'
import Header from './Sections/Header/Header'
import Home from './Pages/Home/Home'
import Services from './Pages/Services/Services'
import Projects from './Pages/Projects/Projects'
import Contacts from './Pages/Contacts/Contacts'
import About from './Pages/About/About'
import Footer from './Sections/Footer/Footer'
import ScrollReveal from 'scrollreveal'



function App() {

  const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400
    // reset :true   // animations  repeat 
  })
 

  return (
    <>
       
      <Header anim ={sr}/>       
      <Home anim={sr}/>
      <About anim ={sr}/>
      {/* <Services anim ={sr}/> */}
      <Projects anim ={sr}/>
      <Contacts anim ={sr}/>
   

        {/* <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About />}/>
          <Route path='/Services' element={<Services/>}/>
          <Route path='/Projects' element={<Projects/>}/>
          <Route path='/Contacts' element={<Contacts />}/>
        </Routes>  */}  

   
    <Footer anim ={sr}/>


    

    </>
  )
}

export default App
