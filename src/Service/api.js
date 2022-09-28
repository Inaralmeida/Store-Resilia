import axios from "axios";

const instancia = axios.create({
  baseURL: "https://api-resilia-store.herokuapp.com",
});

export const getProdutos = async () => {
  const response = await instancia.get("/produtos");
  const json = await response.data.produtos;
  return json;
};

export const getProdutosPorCategoria = async (categoria) => {
  const response = await instancia.get(`/produtos/categoria/${categoria}`);
  const json = await response.data.produtos;
  return json;
};

export const postProduto = async (body) => {
  const response = await instancia.post("/produtos/novo", body);
  const json = await response.data.msg;
  return json;
};

export const deleteProduto = async (id) => {
  const response = await instancia.delete(`/produtos/deletar/${id}`);
};

export const editaProduto = async (id, body) => {
  const response = await instancia.patch(`/produtos/alterar/${id}`, body);
};
