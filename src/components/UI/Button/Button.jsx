import React from 'react'
import styles from './Button.module.css'

const Button = (props) => {
  const { className, type, onClick, disabled, children } = props
  const getClasses = () => {
    let result = `${styles.button} ${className}`

    return result
  }
  console.log('Re-evaluation: Button')

  return (
    <button className={getClasses()} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  className: '',
  type: 'button',
}

export default React.memo(Button)
