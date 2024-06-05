import { TextComponent, ButtonComponent, InputComponent, AlertComponent } from './components'
import emailjs from 'emailjs-com';
import './App.css'
import { useState } from 'react';

function App() {

  const userID = import.meta.env.REACT_APP_USER_ID
  const templateID = import.meta.env.REACT_APP_TEMPLATE_ID
  const serviceID = import.meta.env.REACT_APP_SERVICE_ID

  const [showAlert, setShowAlert] = useState(false)

  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    emailjs.sendForm(
      serviceID,
      templateID,
      e.target as HTMLFormElement,
      userID
    )
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      });
      (e.target as HTMLFormElement).reset();
  }

  function handleClickAlert() {
   setShowAlert(true)
   setTimeout(() => setShowAlert(false), 3000)
  }

  return (
    <main className='main-container'>
      {
        showAlert && (
        <section style={{position: 'fixed', top: '1rem', left: '29rem', zIndex: 1000}}>
          <AlertComponent
            message='Message Sent!'
            subMessage="Thanks for completing the form. We'll be in touch soon."
          />
        </section>
        )
      }
      <header>
        <TextComponent style={{fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'Karla'}} text='Contact Us'/>
      </header>
      <form onSubmit={sendEmail}>
        <section className='name-container'>
          <section className='first-name-container'>
            <TextComponent style={{fontSize: '0.8rem', fontFamily: 'Karla'}} text='First Name *'/>
            <InputComponent style={{
              backgroundColor: '#fff', width: '100%', padding: '0.4rem', borderRadius: '0.3rem', borderColor: '#C7CAC9',
              border: '1px solid #C7CAC9', outlineStyle: 'none'
            }} type='text' name='from_first_name'/>
          </section>
          <section className='last-name-container'>
            <TextComponent style={{fontSize: '0.8rem',fontFamily: 'Karla'}} text='Last Name *'/>
            <InputComponent style={{
              backgroundColor: '#fff', width: '100%', padding: '0.4rem', borderRadius: '0.3rem', borderColor: '#C7CAC9',
              border: '1px solid #C7CAC9', outlineStyle: 'none'
            }} type='text' name='from_last_name'/>
          </section>  
        </section> 
        
        <TextComponent style={{fontSize: '0.8rem', fontFamily: 'Karla'}} text='Email Address *'/>
        <InputComponent style={{
              backgroundColor: '#fff', width: '100%', padding: '0.4rem', borderRadius: '0.3rem', borderColor: '#C7CAC9',
              border: '1px solid #C7CAC9', outlineStyle: 'none'
            }} type='email' name='user_email'/>
        <TextComponent style={{fontSize: '0.8rem', fontFamily: 'Karla'}} text='Query Type *'/>
        <section className='query-type-container'>
        <label style={{width: '100%'}}>
          <section className='general-enquiry-container'>
              <InputComponent style={{margin: '0 1rem'}} type='radio' name='query_type' value='General Enquiry'/>
              <TextComponent style={{fontSize: '1rem', fontFamily: 'Karla'}} text='General Enquiry'/>
          </section>  
        </label>
        <label style={{width: '100%'}}>
          <section className='support-request-container'>
            <InputComponent style={{margin: '0 1rem'}} type='radio' name='query_type' value='Support Request'/>
            <TextComponent style={{fontSize: '1rem', fontFamily: 'Karla'}} text='Support Request'/>
          </section>  
          </label>
        </section>  
        <section>    
          <TextComponent style={{fontSize: '0.8rem', fontFamily: 'Karla'}} text='Message *'/>
          <textarea id='message' name='message' rows={5}></textarea>
        </section>
        <footer>
          <section className='terms-container'>
            <InputComponent style={{ marginRight: '1rem' }} type='checkbox'/>
            <TextComponent style={{fontSize: '0.8rem', fontFamily: 'Karla'}} text='I consent to being contacted by the team *'/>
          </section>
          <section className='button-container'>  
            <ButtonComponent style={{
              backgroundColor: '#0C7D69', padding: '0.6rem', width: '100%', borderRadius: '0.4rem',
              outlineStyle: 'none', border: 'none', fontFamily: 'Karla', color: '#FFF'
            }} type='submit' value='Submit' onClick={handleClickAlert}> Submit </ButtonComponent>
          </section>  
        </footer>    
      </form>
    </main>
  )
}

export default App
