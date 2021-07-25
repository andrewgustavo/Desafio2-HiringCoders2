import React, {useState, useEffect } from "react";
import {useHistory} from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ImPencil, ImBook, ImBooks, ImFilesEmpty, ImList, ImCoinDollar, ImCheckmark} from "react-icons/im"
import { RiNumbersFill} from "react-icons/ri"



export default function NovoProduto() {
  const [produtos, setProdutos] = useState([]);
  const [nome, setNome] = useState('');
  const [autor, setAutor] = useState('');
  const [editora, setEditora] = useState('');
  const [paginas, setPaginas] = useState('');
  const [categoria, setCategoria] = useState('Tecnologia');
  const [valor, setValor] = useState(0);
  const [quantidade, setQuantidade] = useState(0);
  const [descricao, setDescricao] = useState('');

  const history = useHistory();

  function handleForm(e){
    e.preventDefault();
    const produto = {
      id: produtos.length + 1,
      nome: nome,
      autor: autor,
      editora: editora,
      paginas: paginas,
      categoria: categoria,
      valor: valor,
      quantidade: quantidade,
      descricao: descricao,
    };
    const newProdutos = [...produtos, produto];
    setProdutos(newProdutos);
    setTimeout(()=>{
      history.push("/produtos");
    }, 1000);
   
  }

  useEffect(()=>{
    if(produtos.length > 0){
      localStorage.setItem('produtos',JSON.stringify(produtos));
    }
  },[produtos]);

  useEffect(()=>{
    const prod = JSON.parse(localStorage.getItem('produtos'));
    if(prod && prod.length > 0){
      setProdutos(prod);
    }
  },[]);

  return (
    <>
    <Header />
      <section>
        <h1>Cadastro de produto</h1>
        <div className="content_wrapper">
          <form onSubmit={handleForm}>
            <fieldset>
              <label htmlFor="nome"><ImBook/> Nome: </label>
              <input type="text" id="nome" inputMode="text" value={nome} 
                onChange={e => setNome(e.target.value)} 
                placeholder="Insira o nome do livro" 
                required
              />
            </fieldset>
            <div className="field-group">
              <fieldset>
                <label htmlFor="autor"><ImPencil/> Autor: </label>
                  <input type="text" id="valor" value={autor} 
                  onChange={e => setAutor(e.target.value)}
                  placeholder="Nome completo do autor"
                  required
                  />         
              </fieldset>
              <fieldset>
                <label htmlFor="editora"><ImBooks/> Editora: </label>
                  <input type="text" id="valor" value={editora} 
                  onChange={e => setEditora(e.target.value)}
                  placeholder="Editora"
                  required
                  />         
              </fieldset>
              <fieldset>
                <label htmlFor="paginas"><ImFilesEmpty/> Páginas: </label>
                  <input type="number" id="valor" value={paginas} 
                  onChange={e => setPaginas(e.target.value)}
                  placeholder="Quantidade de páginas"
                  required
                  />         
              </fieldset>
            </div>
            <div className="field-group">
              <fieldset>
                <label htmlFor="categoria"><ImList/> Categoria: </label>
                <select id="categoria" value={categoria} onChange={e => setCategoria(e.target.value)} >
                  <option value="Biografias">Biografias</option>
                  <option value="Ficção Científica">Ficção Científica</option>
                  <option value="Literatura Brasileira">Literatura Brasileira</option>
                  <option value="Literatura Estrangeira">Literatura Estrangeira</option>
                  <option value="Poesia">Poesia</option>
                  <option value="Linguagem de programacao">Linguagem de programação</option>
                </select>
              </fieldset>
              <fieldset>
                <label htmlFor="valor"><ImCoinDollar/> Valor: </label>
                <input type="number" inputMode="decimal" id="valor" value={valor} 
                  onChange={e => setValor(e.target.value)} 
                  required 
                />
              </fieldset>
              <fieldset>
                <label htmlFor="quantidade"><RiNumbersFill/> Quantidade: </label>
                <input type="number" id="valor" value={quantidade} 
                  onChange={e => setQuantidade(e.target.value)} 
                  required
                />
              </fieldset>
            </div>
            <fieldset>
                <label htmlFor="descricao">Descrição: </label>
                <textarea id="descricao" rows="10" placeholder="Insira uma descrição"
                  onChange={e => setDescricao(e.target.value)} value={descricao}
                  required
                ></textarea>
            </fieldset>
            <fieldset>
              <button type="submit"><ImCheckmark/> Finalizar Cadastro</button>
            </fieldset>
          </form>
        </div>
      </section>
    <Footer />
    </>
  );
}

