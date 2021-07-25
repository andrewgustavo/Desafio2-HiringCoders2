import CreateGlobalStyle from './globalStyle';
import Routes from "./routes";
import Home from "./pages/Home";

function App() {
  return (
    <main>
      <CreateGlobalStyle />
      <Routes>
        <Home />
      </Routes>
    </main>
  );
}

export default App;
