import React from 'react'
import S from './Fieldsets.module.css'

const Fieldsets = ({ label, value, onChange, keyState, type }) => {
  return (
    <fieldset className={S.fieldset}>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        name={label}
        value={value}
        onChange={({ target }) => onChange(target, keyState)}
      />
    </fieldset>
  )
}

export default Fieldsets