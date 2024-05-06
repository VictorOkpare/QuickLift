import { useState } from 'react'
import Header from "./Header/Header.jsx"
import Footer from "./Footer/Footer.jsx"
import Comment from "./Comment/comment.jsx"
import Download from './Download/download.jsx'
import Memories from './Memories/Memories.jsx'
import How from "./How/how.jsx"



function App() {
  

  return (
    <>
     <Header/>  
     {/* <Memories/>  */}
     <How/>  
     <Comment/>
     <Download/>
     <Footer/>

    </>
  )
}

export default App
