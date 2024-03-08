import React from 'react';
import {Link} from 'react-router-dom';

import img1 from '../assets/images/hero-img01.png';
import img2 from '../assets/images/hero-img02.png';
import img3 from '../assets/images/hero-img03.png';
import icon1 from '../assets/images/icon01.png';
import icon2 from '../assets/images/icon02.png';
import icon3 from '../assets/images/icon03.png';

import {BsArrowRight} from 'react-icons/bs';

const Home = () => {
  return <>
  
    {/* SEÇÃO PRINCIPAL*/}

    <section className="hero__section pt-[60px] 2xl:h-[800px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">

              {/* CONTEUDO PRINCIPAL*/}
              <div>
                <div className="lg:w-[570px]">
                  <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px]
                   md:leading-[70px]">
                    Seu Bem-Estar é a Nossa Prioridade
                    </h1>
                    <p className="text__para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet illum nisi quas earum sint consequuntur provident sit rerum eos nesciunt?
                     Obcaecati totam vero mollitia omnis accusantium, facere corrupti minus magni?
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eaque
                     commodi quisquam doloremque totam hic quam sit nisi assumenda consequuntur,
                     veritatis molestias obcaecati ex, asperiores eligendi enim reprehenderit voluptatum! Fugit.</p>

                    <button className="btn">Solicitar Cuidadores</button>
                </div>

                {/* SEÇÃO ABAIXO*/}
              <div className="mt-[30px] lg:mt[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                  
                  <div>
                      <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">15+</h2>
                      <span className="w-[100px] h-2 bg-amber-300 rounded-full block mt-[-14px]"></span>
                      <p className="text__para">Anos de Experiência</p>
                  </div>
                  <div>
                      <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">5K</h2>
                      <span className="w-[100px] h-2 bg-amber-400 rounded-full block mt-[-14px]"></span>
                      <p className="text__para">Clientes Satisfeitos</p>
                  </div>
                  <div>
                      <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">300+</h2>
                      <span className="w-[100px] h-2 bg-amber-500 rounded-full block mt-[-14px]"></span>
                      <p className="text__para">Cuidadores</p>
                  </div>





                </div>
              </div>

              <div className="flex gap-[30px] justify-end">
                <div>
                  <img className="w-full" src={img1} alt="Imagem Principal" />
                </div> 
                <div className="mt-[30px]">
                  <img className="w-full mb-[30px]" src={img2} alt="Imagem Secundaria" />
                  <img className="w-full" src={img3} alt="Imagem Terciaria" />
                </div>
              </div>
        </div>
      </div>
    </section>

    {/* SEÇÃO PRINCIPAL SEGUNDA PARTE*/}

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
              <h2 className="heading text-center">Fornecemos os melhores serviços de cuidadoria</h2>
              <p className="text__para text-center">Cuidados especializados para todos, garantimos uma qualidade de classe mundial.</p>
          </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">

                  <div className="py-[30px] px-5">
                      <div className="flex items-center justify-center"><img src={icon1} alt="Primeiro icone" />
                      </div>
                    <div className="mt-[30px]">
                      <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                      Pesquise um cuidador
                      </h2>
                      <p className="text-[16px] leading-7 text-headingColor font-[400] text-center">
                        Cuidados especializados para todos, garantimos uma qualidade de classe mundial.
                        </p>

                        <Link to='/cuidadores' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-orange-400 hover:border-none">
                            <BsArrowRight  className="group-hover:text-white w-6 h-5"/>
                        </Link>
                    </div>
                  </div>

                  <div className="py-[30px] px-5">
                      <div className="flex items-center justify-center"><img src={icon2} alt="Segundo icone" />
                      </div>
                    <div className="mt-[30px]">
                      <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                      Encontre um cuidador
                      </h2>
                      <p className="text-[16px] leading-7 text-headingColor font-[400] text-center">
                        Cuidados especializados para todos, garantimos uma qualidade de classe mundial.
                        </p>

                        <Link to='/cuidadores' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-orange-400 hover:border-none">
                            <BsArrowRight  className="group-hover:text-white w-6 h-5"/>
                        </Link>
                    </div>
                  </div>

                  <div className="py-[30px] px-5">
                      <div className="flex items-center justify-center"><img src={icon3} alt="Terceiro icone" />
                      </div>
                    <div className="mt-[30px]">
                      <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                      Solicite um cuidador
                      </h2>
                      <p className="text-[16px] leading-7 text-headingColor font-[400] text-center">
                        Cuidados especializados para todos, garantimos uma qualidade de classe mundial.
                        </p>

                        <Link to='/cuidadores' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-orange-400 hover:border-none">
                            <BsArrowRight  className="group-hover:text-white w-6 h-5"/>
                        </Link>
                    </div>
                  </div>

              </div>
        </div>
      </section>

    {/* INICIO DA SEÇÃO SOBRE*/}

  </>
};

export default Home;