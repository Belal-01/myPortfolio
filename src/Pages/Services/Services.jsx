
import Service from '../../Components/service/Service'
import Container from '../../Components/Container/Container'

const Services = () => {
  return (
    <Container black={false}>
      <section className='services section' id='Services'>
      <div className="services__header">
        <span className="second-title">My </span>
        <span className="second-sub-title"> Services</span>
      </div>
      <div className="services__title">
        <span className='title'>What I Do</span>
      </div>
      <div className="services__gallery">
          <Service
           logo = {'BsLayoutTextWindow'} 
          title ={ 'Frontend Developer'} 
          describtion={'Building responsive websites Using  HTML ,CSS and JacaScript, Creating scalable and high-performance web applications using React'}
          key={1} />  
           <Service
          logo = {'RiPantoneLine' } 
          title ={ 'User Interface/UI'} 
          describtion={ "Creating visually engaging layouts for websites and applications ,Designing buttons, icons, and other UI elements that enhance usability " }
            key={1} /> 
         <Service
          logo = {'FaPenNib'} 
          title ={ 'User Experience /UX'} 
          describtion={'Conducting usability testing to improve user experience , Analyzing user feedback and behavior to refine designs'}
          key={1}
          />
          

      </div>

    </section>
    </Container>
    
  )
}

export default Services
