import React from 'react';
import { Link } from "react-router-dom";

const itensDoMenu = [
    {
      "icone" : "far fa-user",
      "titulo" : "Minha Conta",
      "slug" : "minha-conta"
    },
    {
      "icone" : "far fa-address-card",
      "titulo" : "Meu Cadastro",
      "slug" : "meu-cadastro"
    },
    {
      "icone" : "far fa-question-circle",
      "titulo" : "Dúvidas",
      "slug" : "duvidas"
    },
  ]

export default function SidebarDaBeneficiaria(props) {
  return (
    <>
      <ul className="sidebarMenu">
        {itensDoMenu.map(item =>
          <Link to={`${props.urlPai}/${item.slug}`} key={item.titulo}>
          <li
            className={"sidebarItemMenu " + (props.paginaAtiva === item.slug ? 'sidebarItemActive' : '')}  
          >
            <i className={item.icone}></i>
            <p className={(props.sidebarOpen ? '' : 'tituloSome')}>{item.titulo}</p>
          </li>
          </Link>
          
        )}
      </ul>
    </>
  );
}