import React, { useState, useEffect } from "react";
import './style.css';
import TabDados from './Tabs/Dados';
import TabRelacionamentos from './Tabs/Relacionamentos';

const beneficiaryMeuCadastroItensDoMenu = [
  {
    "icone" : "far fa-user",
    "titulo" : "Dados",
    "slug" : "dados"
  },
  {
    "icone" : "far fa-address-card",
    "titulo" : "Relações",
    "slug" : "relacoes"
  }
]

export default function DashboardBeneficiaryMeuCadastro() {
  const [values, setValues] = useState({
    quantidadeDeItensNasTabs : beneficiaryMeuCadastroItensDoMenu.length,
    tamanhoSlider: 0,
    translateSlider: 0,
    activeTab: 'Dados'
  });

  useEffect(() => {
    let valor = 100/values.quantidadeDeItensNasTabs;
    setValues({ ...values, tamanhoSlider: valor });
  }, []);

  const toogleActiveTab = (tabClicada) => {
    for (let i = 0; i < beneficiaryMeuCadastroItensDoMenu.length; i++){
      if(beneficiaryMeuCadastroItensDoMenu[i].titulo === tabClicada){
        let valorTranslate = i*100;
        setValues({ ...values, activeTab: tabClicada, translateSlider: valorTranslate });
        break;
      }
    }
  }

  const renderContentTab = () => {
    switch (values.activeTab) {
      case 'Dados':
        return <TabDados />;
      case 'Relações':
          return <TabRelacionamentos />;
      default:
        return <TabDados />
    }
  }

  return (
    <>
      <div className="dashboardBeneficiaryMeuCadastro">
        <div className="beneficiaryMeuCadastroTabs">
            <ul className="beneficiaryMeuCadastroTabs-ul">
              {beneficiaryMeuCadastroItensDoMenu.map(item => 
                <li
                  key={item.slug}
                  className={"beneficiaryMeuCadastroTabs-li"}
                  onClick={() => toogleActiveTab(item.titulo)}
                >
                  <label>
                  <i className={item.icone}></i>
                  <span>{item.titulo}</span>
                  </label>
                </li>
              )}
            </ul>
            <div className="slider" 
              style={{width: `${values.tamanhoSlider}%`, transform: `translateX(${values.translateSlider}%)`}}
            >
              <div className="indicator"></div>
            </div>
        </div>

        {renderContentTab()}

      </div>
    </>
  );
}