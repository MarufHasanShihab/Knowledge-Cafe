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
  const [readingTime, setReadingTime] = useState(0)
  const handleMarksAsRead = (id, time)=>{
    setReadingTime(readingTime + time);
    // bookmark blog remove title
    const reaminingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(reaminingBookmarks)
  }

  return (
    <>
      <Header/>
      <main className='md:flex gap-8 max-w-[1220px] mx-auto'>
      <Blogs handleBookmarks={handleBookmarks} handleMarksAsRead={handleMarksAsRead} />
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime} />
      </main>
    </>
  )
}

export default App
