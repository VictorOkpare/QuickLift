import { useState } from 'react'
import Header from "./Header/Header.jsx"
import Footer from "./Footer/Footer.jsx"
import Comment from "./Comment/comment.jsx"
import Download from './Download/download.jsx'
import SignUp from "./SignUp/sign-up.jsx"

import How from "./How/how.jsx"



function App() {
  

  return (
    <>
     <Header/>  
     <SignUp/> 
     <How/>  
     <Comment/>
     <Download/>
     <Footer/>

    </>
  )
}

export default App
