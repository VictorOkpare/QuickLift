import { useState } from 'react'
import Header from "./Header/Header.jsx"
import Footer from "./Footer/Footer.jsx"
import Comment from "./Comment/comment.jsx"
import Download from './Download/download.jsx'
import About from './About/About.jsx'



function App() {
  

  return (
    <>
     <Header/>     
     
     <Comment/>
     <Download/>
     <Footer/>
     <About/>

    </>
  )
}

export default App
