import { useState } from 'react'
import './App.css'
import Button from './components/UI/Button/Button'
import ParagraphOutput from './components/Output/ParagraphOutput/ParagraphOutput'

function App() {
  const [isParagraphShown, setIsParagraphShown] = useState(false)
  const toggleParagraph = () => {
    setIsParagraphShown((prevState) => !prevState)
  }
  console.log('Re-evaluation: App')

  return (
    <div className="app">
      <h1>React под Капотом</h1>
      {<ParagraphOutput isShown={false} />}
      <Button onClick={toggleParagraph}>Toggle Paragraph</Button>
    </div>
  )
}

export default App
