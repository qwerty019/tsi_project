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
  const [count, setCount] = useState(0)

  return (
    <>
    

    <div style={styles.container}>
                <Header />
                <div style={styles.content}>
                    {/* Ваш основной контент здесь */}
                    <BrowserRouter>
      <Routes>
        <Route path='/news' element = {<News/>}/>
        <Route path='/anime' element = {<Anime/>}/>
        <Route path='/list' element = {<List/>}/>
      </Routes>
      </BrowserRouter>
                </div>
                <Footer />
            </div>
      
    </>
  )
}
const styles = {
  container: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh', // Заставляет контейнер занимать всю высоту экрана
  },
  content: {
      position: 'fixed',
      flexGrow: 1, // Позволяет контенту занимать оставшееся пространство
      paddingTop: '10%', // Отступ сверху для учета высоты заголовка
      paddingBottom: '10%', // Отступ снизу для учета высоты подвала
  }
};

export default App