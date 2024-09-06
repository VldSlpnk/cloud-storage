import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { auth } from '../../../firebase'
import './UserPage.css'
import Title from '../../Title/Title'

const UserPage = () => {
  const [authUser, setAuthUser] = useState(null)
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user)
      } else setAuthUser(null)
    })
    return () => {
      listen()
    }
  }, [])
  function userSignOut() {
    signOut(auth)
      .then(() => console.log('Succsess'))
      .catch((e) => console.log(e))
  }
  return (
    <section className="user-page-main-banner">
      <div className="container">
        <Title textTitle={'Account'} textSubTitle={'Online storage'} />
        {authUser ? (
          <div>
            <p>{`Signed in as ${authUser.email}`}</p>
            <button onClick={userSignOut}>Sign out</button>
          </div>
        ) : (
          <p>Signed Out</p>
        )}
      </div>
    </section>
  )
}

export default UserPage
