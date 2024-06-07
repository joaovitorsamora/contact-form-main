import { TextComponent, ButtonComponent, InputComponent, AlertComponent } from './components'
import emailjs from 'emailjs-com'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const userID = import.meta.env.REACT_APP_USER_ID
  const templateID = import.meta.env.REACT_APP_TEMPLATE_ID
  const serviceID = import.meta.env.REACT_APP_SERVICE_ID

  const [showAlert, setShowAlert] = useState(false)
  const [formData, setFormData] = useState({
    from_first_name: '',
    from_last_name: '',
    user_email: '',
    query: '',
    message: '',
    consent: false,
  })

  const [isValidForm, setIsValidForm] = useState(false)

  useEffect(() => {
    const { from_first_name, from_last_name, user_email, query, message, consent } = formData
    setIsValidForm(
      from_first_name !== '' && from_last_name !== '' && user_email !== '' && query !== '' && message !== '' && consent
    )
  }, [formData])

  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    emailjs.sendForm(serviceID, templateID, e.target as HTMLFormElement, userID).then(
      (result) => {
        console.log(result.text)
      },
      (error) => {
        console.log(error.text)
      }
    )
    ;(e.target as HTMLFormElement).reset()
  }
  function handleClickAlert() {
    setShowAlert(true)
    setTimeout(() => setShowAlert(false), 3000)
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    const { name, value, type } = e.target
    let checkedValue = undefined
    if (type === 'checkbox' || type === 'radio') {
      const target = e.target
      checkedValue = target
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: checkedValue ?? value,
    }))
  }

  return (
    <main className="main-container">
      {showAlert && (
        <section style={{ position: 'fixed', top: '1rem', left: '29rem', zIndex: 1000 }}>
          <AlertComponent
            message="Message Sent!"
            subMessage="Thanks for completing the form. We'll be in touch soon."
          />
        </section>
      )}
      <header>
        <TextComponent style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'Karla' }}>
          Contact Us
        </TextComponent>
      </header>
      <form onSubmit={sendEmail}>
        <section className="name-container">
          <section className="first-name-container">
            <TextComponent style={{ fontSize: '0.8rem', fontFamily: 'Karla' }}>First Name *</TextComponent>
            <InputComponent
              style={{
                backgroundColor: '#fff',
                width: '100%',
                padding: '0.4rem',
                borderRadius: '0.3rem',
                borderColor: '#C7CAC9',
                border: '1px solid #C7CAC9',
                outlineColor: '#82A49D',
              }}
              type="text"
              name="from_first_name"
              value={formData.from_first_name}
              onChange={handleInputChange}
            />
          </section>
          <section className="last-name-container">
            <TextComponent style={{ fontSize: '0.8rem', fontFamily: 'Karla' }}>Last Name *</TextComponent>
            <InputComponent
              style={{
                backgroundColor: '#fff',
                width: '100%',
                padding: '0.4rem',
                borderRadius: '0.3rem',
                borderColor: '#C7CAC9',
                border: '1px solid #C7CAC9',
                outlineColor: '#82A49D',
              }}
              type="text"
              name="from_last_name"
              value={formData.from_last_name}
              onChange={handleInputChange}
            />
          </section>
        </section>

        <TextComponent style={{ fontSize: '0.8rem', fontFamily: 'Karla' }}>Email Address *</TextComponent>
        <InputComponent
          style={{
            backgroundColor: '#fff',
            width: '100%',
            padding: '0.4rem',
            borderRadius: '0.3rem',
            borderColor: '#C7CAC9',
            border: '1px solid #C7CAC9',
            outlineColor: '#82A49D',
          }}
          type="email"
          name="user_email"
          value={formData.user_email}
          onChange={handleInputChange}
        />

        <TextComponent style={{ fontSize: '0.8rem', fontFamily: 'Karla' }}>Query Type *</TextComponent>
        <section className="query-type-container">
          <label style={{ width: '100%' }}>
            <section className="general-enquiry-container">
              <InputComponent
                style={{ margin: '0 1rem', backgroundColor: '#E0F1E7' }}
                type="radio"
                name="query"
                value="General Enquiry"
                onChange={handleInputChange}
              />
              <TextComponent style={{ fontSize: '1rem', fontFamily: 'Karla' }}>General Enquiry</TextComponent>
            </section>
          </label>
          <label style={{ width: '100%' }}>
            <section className="support-request-container">
              <InputComponent
                style={{ margin: '0 1rem', backgroundColor: '#E0F1E7' }}
                type="radio"
                name="query"
                value="Support Request"
                onChange={handleInputChange}
              />
              <TextComponent style={{ fontSize: '1rem', fontFamily: 'Karla' }}>Support Request</TextComponent>
            </section>
          </label>
        </section>
        <section>
          <TextComponent style={{ fontSize: '0.8rem', fontFamily: 'Karla' }}>Message *</TextComponent>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange(e)}
          ></textarea>
        </section>
        <footer>
          <section className="terms-container">
            <InputComponent
              style={{ marginRight: '1rem', outlineColor: '#82A49D' }}
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleInputChange}
            />

            <TextComponent style={{ fontSize: '0.8rem', fontFamily: 'Karla' }}>
              I consent to being contacted by the team *
            </TextComponent>
          </section>
          <section className="button-container">
            <ButtonComponent
              style={{
                backgroundColor: '#0C7D69',
                padding: '0.6rem',
                width: '100%',
                borderRadius: '0.4rem',
                outlineStyle: 'none',
                border: 'none',
                fontFamily: 'Karla',
                color: '#FFF',
              }}
              type="submit"
              value="Submit"
              onClick={handleClickAlert}
              disabled={!isValidForm}
            >
              Submit
            </ButtonComponent>
          </section>
        </footer>
      </form>
    </main>
  )
}

export default App
