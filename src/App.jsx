import { useState } from 'react'
import Header from './component/Header.jsx'
import Portafolio from './component/Portafolio.jsx'
import Footer from './component/Footer.jsx'

function App() {
  const [colorTexto, setColorTexto] = useState('black')
  
  return (
    <>
    <Header setColorTexto={setColorTexto}/>

    <Portafolio colorTexto={colorTexto}/>
    
    <Footer/>
    </>
  )
}

export default App
