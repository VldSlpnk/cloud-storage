import './ContactPage.css'
import Title from '../Title/Title'
import StatSection from '../StatSection/StatSection'
import Footer from '../Footer/Footer'

const ContactPage = () => {
  return (
    <>
      <section className="contact-main-banner">
        <Title textTitle={'Contact'} textSubTitle={'Online storage'} />
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.77824573245!2d2.264634906379706!3d48.85893843461572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sua!4v1724318719638!5m2!1sen!2sua"
            width="100%"
            height="830"
            style={{ border: '0' }}
            loading="lazy"
          ></iframe>
          <div className="contact-second-banner">
            <div className="container">
              <div className="contact-form-container">
                <span className="contact-form-title">Drop us a line</span>
                <span className="contact-form-subtitle">
                  We will contact you within 24 hours.
                </span>
                <form
                  action="https://api.web3forms.com/submit"
                  method="POST"
                  className="contact-form"
                >
                  <input
                    type="hidden"
                    name="access_key"
                    value="8a4bc7a6-5ba9-422d-b677-a0aac2896161"
                  ></input>
                  <div className="contact-form-input">
                    <span>Email</span>
                    <input
                      type="email"
                      name="email"
                      placeholder="mail@example.com"
                      className="contact-input"
                      required
                    />
                  </div>
                  <div className="contact-form-input">
                    <span>Name</span>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      className="contact-input"
                      required
                    />
                  </div>
                  <div className="contact-text-area">
                    <textarea
                      name="message"
                      placeholder="Message"
                      className="contact-input"
                      required
                    />
                    <div className="contact-btn-container">
                      <span>We do not share your personal data.</span>
                      <button type="submit" className="contact-submit-btn">
                        <span>Subscribe</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <StatSection />
    </>
  )
}

export default ContactPage
