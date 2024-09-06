import { useState, useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'

const PublicRoutes = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  if (loading) {
    return <div>Loading...</div> // Индикатор загрузки, пока проверяется статус
  }

  return !user ? <Outlet /> : <Navigate to="/account" /> // Перенаправление на аккаунт, если пользователь авторизован
}

export default PublicRoutes