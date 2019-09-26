import React from 'react';
import './style.css';
import ImageUser from './../../../../../../../Assets/Images/user.png';
import ImageAdd from './../../../../../../../Assets/Images/add.png';

export default function DashboardBeneficiaryMeuCadastroRelacionamento() {

  const renderRowAdicionaRelacionamento = () => {
    return (
      <li className="dashboardBeneficiaryMeuCadastroRelacionamento-li">
        <div className="dashboardBeneficiaryMeuCadastroRelacionamento-li-imgContainer">
          <img src={ImageAdd} alt="Imagem padrão de usuário" />
        </div>
        <div className="dashboardBeneficiaryMeuCadastroRelacionamento-li-addText">
          <p>Adicionar um membro da família</p>
        </div>
      </li>
    )
  }

  const renderRowRelacionamentos = () => {
    return (
      <li className="dashboardBeneficiaryMeuCadastroRelacionamento-li">
        <div className="dashboardBeneficiaryMeuCadastroRelacionamento-li-imgContainer">
          <img src={ImageUser} alt="Imagem padrão de usuário" />
        </div>
        <div className="dashboardBeneficiaryMeuCadastroRelacionamento-li-addText">
          <p>Nome do Fulano aqui</p>
        </div>
      </li>
    )
  }

  return (
    <>
      <div className="dashboardBeneficiaryMeuCadastroRelacionamento">
        <ul className="dashboardBeneficiaryMeuCadastroRelacionamento-ul">
          {renderRowAdicionaRelacionamento()}
          {renderRowRelacionamentos()}
        </ul>
      </div>
    </>
  );
}