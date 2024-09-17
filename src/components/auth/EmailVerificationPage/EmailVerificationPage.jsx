import {
  getAuth,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from 'firebase/auth'
import { useState, useEffect } from 'react'
import './EmailVerificationPage.css'

const EmailVerificationPage = () => {
  const [message, setMessage] = useState('')
  const auth = getAuth()

  useEffect(() => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem('emailForSignIn')

      if (!email) {
        email = window.prompt('Введите ваш email для завершения подтверждения:')
      }

      signInWithEmailLink(auth, email, window.location.href)
        .then((result) => {
          setMessage('Ваш email успешно подтвержден!')
          window.localStorage.removeItem('emailForSignIn')
        })
        .catch((error) => {
          setMessage(`Ошибка: ${error.message}`)
        })
    }
  }, [auth])

  return (
    <section className="verification-banner">
      <div className="container">
        <h2 className="emailverification-verify">Подтверждение email</h2>
        {message ? (
          <p className="emailverification-verify-done">{message}</p>
        ) : (
          <p>Загрузка...</p>
        )}
      </div>
    </section>
  )
}

export default EmailVerificationPage
