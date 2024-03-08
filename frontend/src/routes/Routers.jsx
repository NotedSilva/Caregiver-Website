import Home from "../pages/Home";
import Servicos from "../pages/Servicos";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Contato from "../pages/Contato";
import Cuidadores from "../pages/Cuidadores/Cuidadores";
import Detalhes from "../pages/Cuidadores/Detalhes";

import {Routes, Route} from 'react-router-dom';

const Routers = () => {
  return <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/home" element={<Home/>} /> 
    <Route path="/cuidadores" element={<Cuidadores/>} /> 
    <Route path="/cuidadores/:id" element={<Detalhes/>} /> 
    <Route path="/login" element={<Login/>} /> 
    <Route path="/cadastro" element={<Cadastro/>} /> 
    <Route path="/contato" element={<Contato/>} /> 
    <Route path="/servicos" element={<Servicos/>} /> 
  </Routes>
};

export default Routers;