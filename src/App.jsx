import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import TopBar from './components/TopBar'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import TeamProfile from './pages/TeamProfile'

function App() {
  return (
    <div className="page">
      <ScrollToTop />
      <TopBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team/:slug" element={<TeamProfile />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
