import {
  getAuth,
  onAuthStateChanged,
  sendSignInLinkToEmail,
  signOut,
} from 'firebase/auth'
import { useEffect, useState } from 'react'
import { auth } from '../../../firebase'

import Title from '../../Title/Title'
import crown from '../../../assets/img/profile/crown.svg'
import calendar from '../../../assets/img/profile/calendar.svg'
import storage from '../../../assets/img/profile/storage.svg'

import userStatusInfo from './userStatusInfo'

import './UserPage.css'

const user = userStatusInfo.find((user) => user.id === 1)

const UserPage = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const auth = getAuth()

  const actionCodeSettings = {
    url: 'http://google.com',
    handleCodeInApp: true,
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings)
      setMessage('Подтверждение отправлено на ваш email. Проверьте почту!')
    } catch (error) {
      setMessage(`Ошибка: ${error.message}`)
    }
  }
  return (
    <section className="user-page-main-banner">
      <div className="container">
        <Title textTitle={'profile'} textSubTitle={'Online storage'} />
        <div className="account-type">
          <div className="account-status">
            <img src={crown} alt={crown} />
            <div className="account-status_text">
              <span className="account-status_title">Account type:</span>
              <span className="account-status_subtitle">
                {user.accountType}
              </span>
            </div>
          </div>
          <div className="account-status">
            <img src={calendar} alt={calendar} />
            <div className="account-status_text">
              <span className="account-status_subtitle">{user.duration}</span>
            </div>
          </div>
          <div className="account-status">
            <img src={storage} alt={storage} />
            <div className="account-status_text">
              <span className="account-status_title">File stored total:</span>

              <span className="account-status_subtitle">{user.features}</span>
            </div>
          </div>
        </div>
        <div className="verify-email-form">
          <h2 className="verify-email-sec">
            Введите ваш email для подтверждения
          </h2>
          <form onSubmit={handleSubmit} className="verify-email-form_form">
            <div className="input-container">
              <input
                className="verify-email-form_input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Введите email"
                required
              />
              <button type="submit" className="verify-email-form_btn">
                Отправить подтверждение
              </button>
            </div>
            {message && <p>{message}</p>}
          </form>
          {message && <p>{message}</p>}
        </div>
      </div>
    </section>
  )
}

export default UserPage

// const [authUser, setAuthUser] = useState(null)
// useEffect(() => {
//   const listen = onAuthStateChanged(auth, (user) => {
//     if (user) {
//       setAuthUser(user)
//     } else setAuthUser(null)
//   })
//   return () => {
//     listen()
//   }
// }, [])
// function userSignOut() {
//   signOut(auth)
//     .then(() => console.log('Succsess'))
//     .catch((e) => console.log(e))
// }
// {
//   /* {authUser ? (
//   <div>
//     <p>{`Signed in as ${authUser.email}`}</p>
//     <button onClick={userSignOut}>Sign out</button>
//   </div>
// ) : (
//   <p>Signed Out</p>
// )} */
// }
