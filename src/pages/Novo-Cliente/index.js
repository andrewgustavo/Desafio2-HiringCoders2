import React, {useState, useEffect } from "react";
import {useHistory} from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FiMail, FiUser, FiPhone } from "react-icons/fi";
import { ImCheckmark } from "react-icons/im"

function NovoCliente() {
  const history = useHistory();
  const [clientes, setClientes] = useState([]);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [cep, setCep] = useState('');

  function handleForm(e){
    e.preventDefault();
    const cliente = {
      id: clientes.length + 1,
      nome: nome,
      email: email,
      telefone: telefone,
      endereco: endereco,
      complemento: complemento,
      bairro: bairro,
      cidade: cidade,
      cep: cep,
    }
    const newClientes = [...clientes, cliente];
    setClientes(newClientes);
    setTimeout(()=>{
      history.push("/clientes");
    }, 500);
  }

  useEffect(()=>{
    if(clientes.length > 0){
      localStorage.setItem('clientes',JSON.stringify(clientes));
    }
  },[clientes]);

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
        <h1>Cadastro de cliente</h1>
        <div className="content_wrapper">
          <form onSubmit={handleForm}>
            <fieldset>
              <label htmlFor="nome"><FiUser/> Nome: </label>
              <input type="text" id="nome" inputMode="text" value={nome} 
                onChange={e => setNome(e.target.value)} 
                placeholder="Nome completo" 
                required
              />
            </fieldset>
            <div className="field-group">
              <fieldset>
                <label htmlFor="email"><FiMail/> E-mail: </label>
                <input type="email" id="email" value={email} 
                  onChange={e => setEmail(e.target.value)} 
                  placeholder="email@email.com"
                />
              </fieldset>
              <fieldset>
                <label htmlFor="telefone"><FiPhone/> Telefone: </label>
                <input type="phone" id="telefone" value={telefone} 
                  onChange={e => setTelefone(e.target.value)} 
                  placeholder="(XX) XXXXX-XXXX"
                  required 
                />
              </fieldset>
            </div>
            <fieldset>
              <label htmlFor="endereco">Endereço: </label>
              <input type="text" id="endereco" value={endereco} 
                onChange={e => setEndereco(e.target.value)} 
                placeholder="Rua ... , nº ..." 
                required
              />
            </fieldset>
            <div className="field-group">
              <fieldset>
                <label htmlFor="complemento">Complemento: </label>
                <input type="text" id="complemento"  value={complemento} 
                  onChange={e => setComplemento(e.target.value)} 
                  placeholder="Condomínio/Bloco/Apto" 
                  
                />
              </fieldset>
              <fieldset>
                <label htmlFor="bairro">Bairro: </label>
                <input type="text" id="bairro" value={bairro} 
                  onChange={e => setBairro(e.target.value)} 
                  placeholder="Centro" 
                  required
                />
              </fieldset>
            </div>
            <div className="field-group">
              <fieldset>
                <label htmlFor="cidade">Cidade: </label>
                <input type="text" id="cidade"  value={cidade} 
                  onChange={e => setCidade(e.target.value)} 
                  placeholder="Cidade" 
                  required
                />
              </fieldset>
              <fieldset>
                <label htmlFor="cep">CEP: </label>
                <input type="text" id="cep" value={cep} 
                  onChange={e => setCep(e.target.value)} 
                  placeholder="00000-000" 
                  required
                />
              </fieldset>
            </div>
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

export default NovoCliente;