import './App.css'
import About from './assets/About'
import Contact from './assets/Contact'
import Header from './assets/Header'
import Home from './assets/Home'
import Newsletter from './assets/Newsletter'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Shampoo from './assets/Shampoo'
import Features from './assets/Features'
import Htuse from './assets/Htuse'
import Testimonial from './assets/Testimonial'
import Articles from './assets/Articles'
import Notfound from './assets/Notfound'
import Cart from './assets/Cart'

function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Shampoo' element={<Shampoo/>}/>
      <Route path='/Features' element={<Features/>}/>
      <Route path='/Htuse' element={<Htuse/>}/>
      <Route path='/Testimonial' element={<Testimonial/>}/>
      <Route path='/Articles' element={<Articles/>}/>
      <Route path='/Notfound' element={<Notfound/>}/>
      <Route path='/Cart' element={<Cart/>}/>
    </Routes>
    <Newsletter/>
    </BrowserRouter>
    </>
  )
}

export default App
