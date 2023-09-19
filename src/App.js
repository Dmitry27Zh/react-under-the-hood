import { useCallback, useState } from 'react'
import './App.css'
import Button from './components/UI/Button/Button'
import ParagraphOutput from './components/Output/ParagraphOutput/ParagraphOutput'

function App() {
  const [isParagraphShown, setIsParagraphShown] = useState(false)
  const [isTogglingActivated, setIsTogglingActivated] = useState(false)
  const toggleParagraph = useCallback(() => {
    if (isTogglingActivated) {
      setIsParagraphShown((prevState) => !prevState)
    }
  }, [isTogglingActivated])
  const activateToggling = () => {
    setIsTogglingActivated(true)
  }
  console.log('Re-evaluation: App')

  return (
    <div className="app">
      <h1>React под Капотом</h1>
      {<ParagraphOutput isShown={isParagraphShown} />}
      <Button onClick={activateToggling}>Activate toggle</Button>
      <Button onClick={toggleParagraph}>Toggle Paragraph</Button>
    </div>
  )
}

export default App
