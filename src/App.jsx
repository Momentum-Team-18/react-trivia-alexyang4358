import './App.css'
import Category from './components/Category'
import Quiz from './components/Quiz'
import { useState } from 'react'

function App() {

  // const [selectedCategory, setSelectedCategory] = useState('')
  // {selectedCategory ? <Category /> : <Quiz />}

  return (
    <>
      <Category />
    </>
  )
}

export default App
