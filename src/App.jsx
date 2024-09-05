import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Contact from './pages/Сontact/Contact'
import Price from './pages/Price/Price'
import Footer from './components/Footer/Footer'
import ScrollToTop from './hooks/ScrollToTop'
import Registration from './pages/Registration/Registration'
import Login from './pages/Login/Login'

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Price />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
