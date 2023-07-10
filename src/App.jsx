import { useState } from 'react'
import Header from './components/Header'
import HomeSection from './components/HomeSection'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <HomeSection />
    </>
  )
}

export default App
