import React from 'react'
import Paragraph from '../../Paragraph/Paragraph'

const ParagraphOutput = (props) => {
  const { isShown } = props
  const content = isShown ? 'New Paragraph' : ''
  console.log('Re-evaluation: ParagraphOutput')

  return <Paragraph>{content}</Paragraph>
}

export default React.memo(ParagraphOutput)
