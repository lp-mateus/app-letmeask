import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PageHome from "./Pages/page_home";
import PageAsk from "./Pages/page_ask";
import PageCadastro from "./Pages/page_cadastro";
import './global.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*<Route path="*" />*/}
        <Route path="/" exact element={<PageHome />}/>
        <Route path="/ask" exact element={<PageAsk />}/>
        <Route path="/cadastro" exact element={<PageCadastro />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
