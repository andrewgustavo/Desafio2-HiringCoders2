import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  a{
    text-decoration: none;
    color: #000;
    font-family: Monospace;
    transition: color .2s ease-in-out;
    &:hover{
      color: #6bd0ff;
    }
  }
  body{
    background-image: url("https://static.vecteezy.com/ti/vetor-gratis/p1/2215146-continuo-uma-linha-desenho-de-maca-acima-de-livros-pilha-minimalistaial-ilustracao-design-no-fundo-branco-isolado-linha-simples-moderno-grafico-estilo-mao-desenhado-grafico-conceito-para-educacao-vetor.jpg");
  }

  main{
    display: flex;
    flex-direction: column;
    width: 80vw;
    margin: 0 auto;
    font-family: Monospace;
  }

  section{
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 20px 0;
    
    & h1{
      font-size: 1.5rem;
      font-weight: 400;
      margin: 25px;
      
    }

    & h2{
      font-size: 1.1rem;
      font-weight: 400;
      padding: 10px 0;
    }

    & p{
      padding: 20px 0;
      font-size: 1rem;
      background: #fff;
    }

    form{
      display: flex;
      flex-direction: column;
      padding: 20px 0;
      margin: 0 auto;
      background: #fff;
      border: 2px solid #000;

      & fieldset{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        text-align: left;
        padding: 10px;
        border: none;

        & label{
          font-weight: 500;
          font-size: 1rem;
          padding: 2px 0px;
        }
        & input, select, textarea{
          height: 25px;
          padding-left: 5px;
          font-size: 15px;
          width: 100%;
        }
        & textarea{
          height: initial;
        }

        & button{
          padding: 10px 0;
          text-transform: uppercase;
          background: #6bd0ff;
          color: #fff;
          border: none;
          cursor: pointer;
        }

      }
      @media(max-width: 768px){
        width: 100%;
      }
      .field-group{
        display: flex;
        justify-content: space-between;
        & select{
          width: 150px;
        }

        @media(max-width: 768px){
          flex-direction: column;

          & select{
            width: 100%;
          }
        }
      }
    }
    .content_wrapper{
      display: flex;
      width: 100%;
      margin: 0 auto;
    }

    .content{
      display: flex;
      width: 400px;
      margin: 0 auto;

      @media(max-width: 768px){
        width: 90vw;
      }
    }
    .items_wrapper{
      width: 100%;
    }
    .lista{
      display: flex;
      flex-wrap: wrap;
      gap: 20px;

      @media(max-width: 768px){
        justify-content: center;
      }
    }    
    
    .alert{
      border: 1px solid #000;
      border-radius: 15px;
      box-shadow: 0 0 4px black;    
      padding: 10px 15px;
      text-align: center;
      background: #fff;
      margin: 0 auto;        
    }

    .new_product{
      display: block;
      width: 175px;
      padding: 10px 10px;
      text-align: center;
      background: #6bd0ff;
      color: #fff;
      margin-bottom: 5px;
      border-radius: 15px;
    }

    .new_client{
      display: block;
      width: 175px;
      padding: 10px 10px;
      text-align: center;
      background: #6bd0ff;
      color: #fff;
      margin-bottom: 5px;
      border-radius: 15px;
    }
  }

  @media(max-width: 768px){
    main{
      width: 90vw;
    }
  }
`;