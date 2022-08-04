import React from 'react'
import S from './Button.module.css'

const Button = ({ text, onclick, color }) => {
  const cores = {
    preto: {
      color: '#ffb200',
      backgroundColor: '#101010'
    },
    amarelo: {
      backgroundColor: '#ffb200',
      color: '#101010'
    }
  }
  return (
    <button
      className={S.btn}
      style={cores[color]}
      onClick={onclick}>{text}</button>
  )
}

export default Button