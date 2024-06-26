import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Booksmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  return (
    <>
      <Header/>
      <main className='md:flex items-center'>
      <Blogs/>
      <Bookmarks/>
      </main>
    </>
  )
}

export default App
