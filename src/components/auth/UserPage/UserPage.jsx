import {
  getAuth,
  onAuthStateChanged,
  sendSignInLinkToEmail,
  signOut,
} from 'firebase/auth'
import { useEffect, useState } from 'react'
import { auth, db } from '../../../firebase'

import Title from '../../Title/Title'
import crown from '../../../assets/img/profile/crown.svg'
import calendar from '../../../assets/img/profile/calendar.svg'
import storage from '../../../assets/img/profile/storage.svg'

import userStatusInfo from './userStatusInfo'

import './UserPage.css'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { Link } from 'react-router-dom'

const user = userStatusInfo.find((user) => user.id === 1)

const UserPage = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isEmailVerified, setIsEmailVerified] = useState(false)

  const auth = getAuth()

  const actionCodeSettings = {
    url: 'http://localhost:5173/verify-email', // Страница для завершения подтверждения email
    handleCodeInApp: true,
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const docRef = doc(db, 'users', email)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists() && docSnap.data().emailSent) {
        setMessage('Запрос на подтверждение уже был отправлен на этот email.')
        return
      }

      await sendSignInLinkToEmail(auth, email, actionCodeSettings)

      window.localStorage.setItem('emailForSignIn', email)

      await setDoc(docRef, { emailSent: true }, { merge: true })

      setMessage('Подтверждение отправлено на ваш email. Проверьте почту!')
    } catch (error) {
      setMessage(`Ошибка: ${error.message}`)
    }
  }
  useEffect(() => {
    const checkEmailVerification = async () => {
      const user = auth.currentUser
      if (user) {
        await user.reload()
        setIsEmailVerified(user.emailVerified)
      }
    }

    checkEmailVerification()
  }, [])
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
        {isEmailVerified ? (
          <div className="verified-message">
            <h2>Ваш email успешно подтвержден!</h2>
            <Link className="files-link" to="/user-files">
              My files
            </Link>
          </div>
        ) : (
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
              {<p className="verify-message-error">{message}</p> && (
                <p className="verify-message">{message}</p>
              )}
            </form>
          </div>
        )}
      </div>
    </section>
  )
}

export default UserPage
