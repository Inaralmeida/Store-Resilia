import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Button from '../../components/Button/Button'
import ItemLista from '../../Components/ItemLista/ItemLista'
import { getProdutos } from '../../Service/api'
import S from './Administracao.module.css'
import { useNavigate } from 'react-router-dom'

const Administracao = () => {
  const navigate = useNavigate()

  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    const request = async () => {
      const response = await getProdutos()
      setProdutos(response)
    }
    request()
  }, [])

  return (
    <div className={S.container}>


      <section className={S.section}
      >
        <h2>Produtos</h2>
        <Button text='Adicionar produto' color='amarelo'
          onclick={() => {
            navigate('/admin/new', { replace: true })
          }}
        />
      </section>

      <section className={S.lista}>
        {!!produtos && produtos.map(produto => {
          return (<ItemLista produto={produto} key={produto.id} />)
        })}
      </section>
    </div>
  )
}

export default Administracao