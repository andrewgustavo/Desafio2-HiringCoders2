import {useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import {ListItem} from "./style";

function Produtos() {
  const [produtos, setProdutos] = useState([]);
  
  function removerProduto(id){
    const newProdutos = produtos.filter(item => item.id !== id);
    setProdutos(newProdutos);
    localStorage.setItem('produtos',JSON.stringify(newProdutos));
  }

  useEffect(()=>{
    const prod = JSON.parse(localStorage.getItem('produtos'));
    if(prod && prod.length > 0){
      setProdutos(prod);
    }
  },[]);

  return(
    <>
    <Header />
      <section>
        <h1>Produtos</h1>
        <div className="content_wrapper">
          <div className="items_wrapper">
            <Link to="/novo-produto" className="new_product">Cadastrar Produto</Link>
            {produtos && produtos.length === 0 ? <div className="alert">Nenhum produto cadastrado!</div> : 
            <div className="lista">
              {produtos.map(item =>(
                <ListItem key={item.id}>
                  <div><span>Produto: </span>{item.nome}</div>
                  <div><span>Autor: </span>{item.autor}</div>
                  <div><span>Editora: </span>{item.editora}</div>
                  <div><span>Páginas: </span>{item.paginas}</div>
                  <div><span>Categoria: </span> {item.categoria}</div>
                  <div><span>Valor: </span>R$ {item.valor}</div>
                  <div><span>Descrição: </span> {item.descricao}</div>
                  <div className="remove"><button onClick={()=>{removerProduto(item.id)}}>Excluir</button></div>
                </ListItem>
              ))}  
            </div>
            }
          </div>
        </div>
      </section>
    <Footer />
    </>
  );
}

export default Produtos;