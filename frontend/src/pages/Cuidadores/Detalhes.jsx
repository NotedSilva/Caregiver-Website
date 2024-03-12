import React from 'react';

import img01 from '../../assets/images/doctor-img02.png';

const Detalhes = () => {
  return <section>
    <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-[50px]">

          <div className="md:col-span-2"></div>
            <div className="flex items-center gap-5">
              <Figure className="max-w-[200px] max-h-[200px]">
                <img src={img01} alt="Cuidador imagem" />
              </Figure>
            </div>
          <div></div>

        </div>
    </div>
  </section>
}

export default Detalhes;