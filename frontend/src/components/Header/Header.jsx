import {useEffect, useRef} from 'react';
import {NavLink, Link} from 'react-router-dom';

import userImg from '../../assets/images/avatar-icon.png';
import logo from '../../assets/images/logo.png';

import {BiMenu} from 'react-icons/bi';

const navLinks = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/cuidadores',
    display: 'Encontre um cuidador'
  },
  {
    path: '/servicos',
    display: 'Serviços'
  },
  {
    path: '/contato',
    display: 'Contato'
  },
]

const Header = () => {

const headerRef = useRef(null)
const menuRef = useRef(null)

const handleStickyHeader = () => {
  window.addEventListener('scroll', ()=>{
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      headerRef.current.classList.add('sticky__header')
    }else{
      headerRef.current.classList.remove('sticky__header')
    }
  })
}

useEffect(()=>{
  handleStickyHeader()

  return()=> window.removeEventListener('scroll', handleStickyHeader)
});

const toggleMenu = () => menuRef.current.classList.toggle('show__menu')

  return <header className="header flex items-center" ref={headerRef}>
    <div className="container ">
      <div className="flex items-center justify-between">
        {/* LOGO */}
          <div>
            <img src={logo} alt="Logo" />
          </div>

        {/* MENU*/}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]"> 
                {
                  navLinks.map((link, index) =><li key={index}>
                    <NavLink to={link.path} className={navClass=> navClass.isActive
                       ? 'text-orange-600 text-[16px] leading-7 font-[600]'
                       : 'text-textColor text-[16px] leading-7 font-[500] hover:text-orange-600'}>{link.
                       display}</NavLink>
                  </li>)
                }
            </ul>
          </div>

                {/* NAV DIREITA */}
          <div className="flex items-center gap-4">
                <div className="hidden">
                  <Link to='/'>
                    <figure className="w-[55px] h-[35px] rounded-full cursor-pointer">
                      <img  src={userImg} classname="w-full rounded-full" alt="Avatar" />
                    </figure>
                  </Link>
                </div>
          </div>

          <Link to='/login'>
                <button className="bg-orange-500 py-2 px-8 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">Entrar</button>
          </Link>

          <span className="md:hidden" onClick={toggleMenu}>
            <BiMenu className="w-6 h-6 cursor-pointer" />
          </span>

      </div>
    </div>
  </header>
};

export default Header;