import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Booksmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleBookmarks = blog =>{
    setBookmarks([...bookmarks, blog]);
  }

  return (
    <>
      <Header/>
      <main className='md:flex gap-8 max-w-[1220px] mx-auto'>
      <Blogs handleBookmarks={handleBookmarks} />
      <Bookmarks bookmarks={bookmarks} />
      </main>
    </>
  )
}

export default App
