import React from 'react'
import S from './Produtos.module.css'
import { useParams } from 'react-router-dom'
import { getProdutosPorCategoria } from '../../Service/api'
import { useState } from 'react'
import { useEffect } from 'react'
import CardProduto from '../../components/CardProduto/CardProduto'

const Produtos = () => {
  const params = useParams()
  const [produtos, setProdutos] = useState([])

  async function requisicao() {
    const response = await getProdutosPorCategoria(params.categoria)
    setProdutos(response)
  }

  useEffect(() => {
    requisicao()
  }, [params.categoria])

  return (
    <div className={S.container}>
      <h2>{params.categoria}</h2>
      <section className={S.produtos}>

        {!!produtos && produtos.map(produto => {
          return (<CardProduto
            nome={produto.nome_abreviado}
            foto={produto.url}
            textoBotao='Comprar'
            url={`/produto/${produto.id}`}
            key={produto.id} />)
        })}
      </section>
    </div>
  )
}

export default Produtos