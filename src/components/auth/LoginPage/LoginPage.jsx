import { useState } from 'react'
import { auth } from '../../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

import Title from '../../Title/Title'
import StatSection from '../../StatSection/StatSection'

import './LoginPage.css'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  function logIn(e) {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user)
        setError('')
        setEmail('')
        setPassword('')
        navigate('/account')
      })
      .catch((error) => {
        console.log(error)
        setError('Sorry, couldn`t find your account!')
      })
  }

  return (
    <>
      <section className="login-page-banner">
        <div className="container">
          <Title textTitle={'Login'} textSubTitle={'Online storage'} />

          <div className="login-form-container">
            <form onSubmit={logIn} className="login-form">
              <div className="login-form-container-input-solo">
                <label className="email-label">Email </label>
                <input
                  className="login-form-input"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                />
              </div>
              <div className="login-form-container-input-solo">
                <label className="password-label">Pass</label>
                <input
                  className="login-form-input"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                />
              </div>

              <button className="login-btn">Login</button>
              {error ? <p style={{ color: 'red' }}>{error}</p> : ''}
            </form>
          </div>
        </div>
      </section>
      <StatSection />
    </>
  )
}
export default LoginPage
