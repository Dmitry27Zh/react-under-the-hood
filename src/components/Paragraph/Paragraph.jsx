const Paragraph = (props) => {
  const { children } = props
  console.log('Re-evaluation: Paragraph')

  return <p>{children}</p>
}

export default Paragraph
