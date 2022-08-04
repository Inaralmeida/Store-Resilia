import React from 'react'
import { Link } from 'react-router-dom'
import S from './Header.module.css'

const Header = () => {
  return (
    <header className={S.container}>
      <h1>Resilia Store</h1>

      <nav>
        <Link className={S.link} to='/'>Home</Link>
        <Link className={S.link} to='/produtos/notebooks'>Notebooks</Link>
        <Link className={S.link} to='/produtos/monitores'>Monitores</Link>
        <Link className={S.link} to='/produtos/acessorios'>Acessorios</Link>
        <Link className={S.link} to='/admin'>Adm</Link>
      </nav>
    </header>
  )
}

export default Header