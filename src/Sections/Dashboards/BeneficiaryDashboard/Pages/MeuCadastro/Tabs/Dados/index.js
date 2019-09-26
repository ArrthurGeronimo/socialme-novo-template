import React, { useState, useEffect } from "react";
import './style.css';
import TabCamposPessoais from './Components/CamposDadosPessoais';
import TabCamposEndereco from './Components/CamposDadosEndereco';

const beneficiaryMeuCadastroDados = [
  {
    "icone" : "far fa-user",
    "titulo" : "Pessoais",
    "slug" : "pessoais"
  },
  {
    "icone" : "far fa-address-card",
    "titulo" : "Endereço",
    "slug" : "endereco"
  }
]

export default function DashboardBeneficiaryMeuCadastroDados() {
  const [values, setValues] = useState({
    quantidadeDeItensNasTabs : beneficiaryMeuCadastroDados.length,
    tamanhoSlider: 0,
    translateSlider: 0,
    activeTab: 'dados'
  });
  useEffect(() => {
    let valor = 100/values.quantidadeDeItensNasTabs;
    setValues({ ...values, tamanhoSlider: valor });
    console.log('Arrumou o Tamanho');
  }, []);
  const toogleActiveTab = (tabClicada) => {
    for (let i = 0; i < beneficiaryMeuCadastroDados.length; i++){
      if(beneficiaryMeuCadastroDados[i].titulo === tabClicada){
        let valorTranslate = i*100;
        setValues({ ...values, activeTab: tabClicada, translateSlider: valorTranslate });
        break;
      }
    }
  }
  const renderContentTab = () => {
    switch (values.activeTab) {
      case 'Pessoais':
        return <TabCamposPessoais />;
      case 'Endereço':
          return <TabCamposEndereco />;
      default:
        return <TabCamposPessoais />;
    }
  }
  return (
    <>
        <div className="dashboardBeneficiaryMeuCadastro">
          <div className="beneficiaryMeuCadastroTabs">
              <ul className="beneficiaryMeuCadastroTabs-ul">
                {beneficiaryMeuCadastroDados.map(item => 
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