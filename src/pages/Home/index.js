import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Home = () => {
  return(
    <>
      <Header />
        <section>
          <h1>Bem-vindo de volta!</h1>
          <p>
            Acesse os menus para consultar ou cadastrar produtos e clientes da Biblioteca Virtual
          </p>
        </section>
      <Footer />
    </>
  )
}

export default Home;