import React, { useState } from 'react';

import {Link} from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = e => {
    setFormData(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  

  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">Olá, <span className="text-orange-500">Bem-vindo</span> de volta🎉</h3>
        <form className="py-4 md:py-0">
          <div className="mb-5">
            <input 
              type="email"
              placeholder="Insira seu email"
              name="email" 
              value={formData.email}
              onChange={handleInputChange} 
              className="w-full py-3 border-b border-solid border-[#778899] focus:outline-none focus:border-b-orange-500
              text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer"
              required
            />
          </div>

          <div className="mb-5">
            <input 
              type="password"
              placeholder="Insira sua senha"
              name="password" 
              value={formData.password}
              onChange={handleInputChange} 
              className="w-full py-3 border-b border-solid border-[#778899] focus:outline-none focus:border-b-orange-500
              text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer"
              required
            />
          </div>

            <div className="mt-7 ">
              <button type="submit" className="w-full bg-orange-500 text-white text-[18px] leading-[30px] rounded-lg px-4 py-3">Entrar</button>
            </div>

            <p className="mt-5 text-textColor text-center">Não possui uma conta? <Link to='/cadastro' className="text-orange-400 font-medium ml-1">Registrar-se</Link>
            </p>

        </form>
      </div>
    </section>
  );
};

export default Login;
