import { useState } from 'react'
import './App.css'
import Button from './components/UI/Button/Button'

function App() {
  const [isParagraphShown, setIsParagraphShown] = useState(false)
  const toggleParagraph = () => {
    setIsParagraphShown((prevState) => !prevState)
  }
  console.log('Re-evaluation')

  return (
    <div className="app">
      <h1>React под Капотом</h1>
      {isParagraphShown && <p>New Paragraph</p>}
      <Button onClick={toggleParagraph}>Toggle Paragraph</Button>
    </div>
  )
}

export default App
