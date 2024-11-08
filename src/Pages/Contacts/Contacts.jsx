import React, { useEffect } from 'react'
import PrimaryButton from '../../Components/PrimaryButton/Button';
import emailjs from '@emailjs/browser';
import Container from '../../Components/Container/Container';
import { RiMailSendFill } from "react-icons/ri";
import ContactItem from '../../Components/Contact-item/ContactItem';


const Contacts = (props) => {
  const contactForm = React.useRef(); 
  const messageState = React.useRef(); 
  const formName =  React.useRef();
   const formEmail = React.useRef();
   const formSubject = React.useRef();
   const formMessage = React.useRef(); 

   useEffect(()=>{
    props.anim.reveal('.contact');
    props.anim.reveal('.contact__item',{origin:'left',interval:200});
    props.anim.reveal('.contact__information--info--location',{origin:'right'});
    props.anim.reveal('.contact__information--info--data-header',{origin:'top'});
    props.anim.reveal('.input',{origin:'right',interval:200});

   },[])

    const sendEmail = (e)=>{    
      e.preventDefault();
      emailjs
      .sendForm('service_cv9gu5e', 'template_38n43y6', contactForm.current, {
        publicKey: 'rTEHcCrqmXIB2lDnn',
      })

      .then(
        () => {
          messageState.current.textContent = 'The Message has sent successfully ✔'
          formName.current.value = ''
          formEmail.current.value = ''
          formSubject.current.value = ''
          formMessage.current.value = ''
         setTimeout(() => {
          messageState.current.textContent = ''
          }, 2000);

        },
        (error) => {
         // console.log('FAILED...', error.text);
          messageState.current.textContent = 'Failed to send 😢'+error.text;
          setTimeout(() => {
            messageState.current.textContent = ''
            }, 2000);
            
          
        },
      );

    }

  return (
   <Container black={false}>    
      <section className='contact section' id='Contact'>
          <div className="contact__header">
            <span className="second-title">Get in</span>
            <span className="second-sub-title"> Touch</span>
          </div>
          <div className="contact__title">
            <span className='title'>Let's Talk About Your Next </span>
            <span className="sub-title">Project</span>
          </div>

          <form action="" ref={contactForm} className='contact__form' id='contact-form' onSubmit={sendEmail}>
            <div className="contact__form--email">
              <input className='input' type="text" ref={formName} name='client-name' id='client-name' required placeholder='Enter Your Name' />
              <input className='input' type="email" ref={formEmail} name='client-email' id='client-email' required placeholder='Enter Your Email' />
              <input className='input' type="text" ref={formSubject} name='client-subject' id='client-subject' required placeholder='Enter Your Subject' />
            </div>
            <div className="contact__form--message">
              <textarea className='input' name="client-message" ref={formMessage} id="client-message" required placeholder='Enter Your Message'></textarea>
              <p ref={messageState}></p>
            </div>      
            <a type='submit'>
              <PrimaryButton>
                Send Message <RiMailSendFill/>
              </PrimaryButton>
            </a>
        </form>      
      </section>

      <section className="contact__information">
        <div className="contact__information--header"><span className="title"><span className="sub-title">Contact </span>Me</span></div>
        <div className="contact__information--info">
          <div className="contact__information--info--data">
            <div className="contact__information--info--data-header">
              <span className="sub-title">Contact </span>
              <span className="title"> Information</span>
            </div>
            
            <ContactItem title = {'Phone'} data={'+963-981-091-343'}/>
            <ContactItem title = {'Email'} data={'belalkhobieh343@gmail.com'}/>
            <ContactItem title = {'Address'} data={'Syria-Damascus'}/>
            
          </div>
          <div className="contact__information--info--location">
            <iframe  frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=80%25&amp;height=600&amp;hl=en&amp;q=syria/damascuss+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps systems</a></iframe>
            
          </div>
        </div>

      </section>

  </Container>
  )
}

export default Contacts
