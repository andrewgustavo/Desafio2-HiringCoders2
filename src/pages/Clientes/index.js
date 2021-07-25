import {useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import {ListItem} from "./style";


function Clientes() {
  const [clientes, setClientes] = useState([]);
  
  function removerCliente(id){
    const newClientes = clientes.filter(item => item.id !== id);
    setClientes(newClientes);
    localStorage.setItem('clientes',JSON.stringify(newClientes));
  }

  useEffect(()=>{
    const client = JSON.parse(localStorage.getItem('clientes'));
    if(client && client.length > 0){
      setClientes(client);
    }
  },[]);

  return(
    <>
      <Header />
      <section>
        <h1>Clientes</h1>
        <div className="content_wrapper">
          <div className="items_wrapper">
            <Link to="/novo-cliente" className="new_client">Cadastrar Cliente</Link>
            {clientes && clientes.length === 0 ? <div className="alert">Nenhum cliente cadastrado!</div> : 
            <div className="lista">
              {clientes.map(item =>(
                <ListItem key={item.id}>
                  <div><span>Cliente: </span>{item.nome}</div>
                  <div><span>E-mail: </span> {item.email}</div>
                  <div><span>Telefone: </span> {item.telefone}</div>
                  <div><span>Endereço: </span> {item.endereco}</div>
                  <div><span>Complemento: </span> {item.complemento}</div>
                  <div><span>Bairro: </span> {item.bairro}</div>
                  <div><span>Cidade: </span> {item.cidade}</div>
                  <div><span>Cep: </span> {item.cep}</div>
                  <div className="remove">
                    <button onClick={()=>{removerCliente(item.id)}}>Excluir</button>
                  </div>
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

export default Clientes;