import { useState, useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'
import Loader from '../components/Loader/Loader'

const ProtectedRoutes = () => {
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
    return <Loader />
  }

  return user ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoutes
