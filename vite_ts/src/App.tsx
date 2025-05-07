import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import News from './pages/News'
import Anime from './pages/Anime'
import List from './pages/List'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <>
      <div style={styles.container}>
        <Header />
        <div style={styles.content}>
          <BrowserRouter>
            <Routes>
              <Route path='/news' element={<News/>}/>
              <Route path='/anime' element={<Anime/>}/>
              <Route path='/list' element={<List/>}/>
            </Routes>
          </BrowserRouter>
        </div>
        <Footer />
      </div>
    </>
  )
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  content: {
    position: 'fixed',
    flexGrow: 1,
    paddingTop: '10%',
    paddingBottom: '10%',
  }
};

export default App