import React, { useState } from 'react'
import Button from '../../components/Button/Button'
import Fieldsets from '../../components/Fieldsets/Fieldsets'
import { postProduto } from '../../Service/api'
import S from './Formulario.module.css'

const Formulario = () => {
  const campos = [
    { keyState: 'nome_completo', label: 'Nome', type: 'text' },
    { keyState: 'url', label: 'URL da foto', type: 'text' },
    { keyState: 'nome_abreviado', label: 'Nome abreviado', type: 'text' },
    { keyState: 'categoria', label: 'Categoria', type: 'text' },
    { keyState: 'marca', label: 'Marca', type: 'text' },
    { keyState: 'quantidade', label: 'Quantidade', type: 'number' },
    { keyState: 'cor', label: 'Cor', type: 'text' },
    { keyState: 'preco', label: 'Preço', type: 'number' },
    { keyState: 'porcentagem_desconto', label: 'Porcentagem de desconto', type: 'number' }]
  const [dadosForm, setDadosForm] = useState({
    nome_completo: '',
    nome_abreviado: '',
    url: '',
    categoria: '',
    marca: '',
    quantidade: '',
    cor: '',
    preco: '',
    porcentagem_desconto: '',
    descricao: '',
  })

  function handleChange(target, key) {
    const value = target.value
    setDadosForm({ ...dadosForm, [key]: value })

  }

  function handleCancel() {

  }
  function handleDelete() {

  }
  function handleSave() {
    postProduto(dadosForm)
  }
  return (

    <form action="" className={S.form}>
      <figure className={S.figure}>
        <img src={dadosForm.url ? dadosForm.url : 'http://cdn.onlinewebfonts.com/svg/img_103323.png'} alt="add foto" />
      </figure>
      {campos.map((campo, index) => {
        return (
          <Fieldsets
            style={{ gridArea: campos.keyState }}
            key={index}
            label={campo.label}
            type={campo.type}
            keyState={campo.keyState}
            value={dadosForm[campo.keyState]}
            onChange={handleChange}
          />
        )
      })}
      <fieldset className={S.descricao}>
        <label htmlFor="descricao">Descrição do Produto</label>
        <textarea name="descricao"
          value={dadosForm.descricao}
          onChange={({ target }) => handleChange(target, 'descricao')}
        ></textarea>
      </fieldset>
      <section className={S.buttons}>

        <Button text='cancelar' color='preto' />
        <Button text='Excluir' color='preto' />
        <Button text='Salvar' color='amarelo' onclick={handleSave} />

      </section>
    </form>

  )
}

export default Formulario