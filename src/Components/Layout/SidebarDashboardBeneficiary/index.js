import React from 'react';
import Logo from './../../../Assets/Images/logo.png';

const itensDoMenu = [
  {
    "icone" : "far fa-user",
    "titulo" : "Minha Conta"
  },
  {
    "icone" : "far fa-address-card",
    "titulo" : "Meu Cadastro"
  },
  {
    "icone" : "far fa-question-circle",
    "titulo" : "Dúvidas"
  },
]

export default function SidebarDashboardBeneficiary(props) {
  return (
    <div className="sidebarDashboard">
      <div className="sidebarContainerBrand">
        <img className={" "+(props.sidebarOpen ? 'logoSidebarOpen' : 'logoSidebarClose')} src={Logo} alt="Logo Social Me" />
      </div>
      <ul className="sidebarMenu">
        {itensDoMenu.map(item => 
          <li
            key={item.titulo}
            className={"sidebarItemMenu " + (props.pageAtiva === item.titulo ? 'sidebarItemActive' : '')}  
            onClick={() => props.avisaPaiQualPaginaEstaAtiva(item.titulo)}>
            <i className={item.icone}></i>
            <p className={(props.sidebarOpen ? '' : 'tituloSome')}>{item.titulo}</p>
          </li>
        )}
      </ul>
    </div>
  );
}