import { useState } from 'react'
import Title from '../Title/Title'
import './RegistrationPage.css'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
import StatSection from '../StatSection/StatSection'
import { useNavigate } from 'react-router-dom'

const RegistrationPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rePassword, setRePassword] = useState('')
  const [error, setError] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const navigate = useNavigate()

  function register(e) {
    e.preventDefault()
    if (rePassword !== password) {
      setError('Password didn`t match')
      return
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user)
        setError('')
        setEmail('')
        setPassword('')
        setRePassword('')
        navigate('/login')
      })
      .catch((error) => {
        console.log(error)
      })
  }
  const isFormValid = () => {
    return (
      email !== '' &&
      password !== '' &&
      rePassword !== '' &&
      isChecked &&
      password === rePassword
    )
  }
  return (
    <>
      <section className="reg-page-banner">
        <div className="container">
          <Title textTitle={'Register'} textSubTitle={'Online storage'} />
          <div className="register-form-container">
            <form onSubmit={register} className="register-form">
              <div className="register-form-container-input-solo">
                <label className="email-label">Email </label>
                <input
                  className="register-form-input"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                />
              </div>
              <div className="register-form-container-input-solo">
                <label className="password-label">Pass</label>
                <input
                  className="register-form-input"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                />
              </div>
              <div className="register-form-container-input-solo">
                <label>re-Pass</label>
                <input
                  className="register-form-input"
                  placeholder="re-Password"
                  value={rePassword}
                  onChange={(e) => setRePassword(e.target.value)}
                  type="password"
                />
              </div>
              <div className="btn-reg-sec">
                <label className="custom-checkbox">
                  <input
                    type="checkbox"
                    onChange={(e) => setIsChecked(e.target.checked)}
                  />
                  <span className="checkmark"></span>
                  <span className="checkmark-text">I agree with terms</span>
                </label>
                <button
                  className="reg-create-btn"
                  disabled={!isFormValid()}
                  style={{
                    cursor:
                      isChecked && isFormValid() ? 'pointer' : 'not-allowed',
                  }}
                >
                  Register
                </button>
              </div>
              {error ? <p style={{ color: 'red' }}>{error}</p> : ''}
            </form>
          </div>
        </div>
      </section>
      <StatSection />
    </>
  )
}

export default RegistrationPage
