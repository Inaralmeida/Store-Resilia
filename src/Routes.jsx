import React from 'react'
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Administracao from './pages/Administracao/Administracao'
import Formulario from './pages/Formulario/Formulario'
import Home from './pages/Home/Home'
import Produto from './pages/Produto/Produto'
import Produtos from './pages/Produtos/Produtos'

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />

      <Switch>

        <Route path='/' element={<Home />} />
        <Route path='/produtos/:categoria' element={<Produtos />} />
        <Route path='/produto' element={<Produto />} />
        <Route path='/admin' element={<Administracao />} />
        <Route path='/admin/new' element={<Formulario />} />

      </Switch>

    </BrowserRouter>
  )
}

export default Routes