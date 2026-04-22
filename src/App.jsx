import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Barbers from './pages/Barbers'
import Contact from './pages/Contact'
import Store from './pages/Store'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/barbers" element={<Barbers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
