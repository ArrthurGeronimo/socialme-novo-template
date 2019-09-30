import React from 'react';
import { Link } from "react-router-dom";

const itensDoMenu = [
    {
      "icone" : "far fa-user",
      "titulo" : "Movimentações",
      "slug" : "movimentacoes"
    },
    {
      "icone" : "far fa-address-card",
      "titulo" : "Programas",
      "slug" : "programas"
    },
    {
      "icone" : "far fa-question-circle",
      "titulo" : "Gestor de Benefícios",
      "slug" : "gestor-de-beneficios"
    },
    {
      "icone" : "far fa-question-circle",
      "titulo" : "Dúvidas",
      "slug" : "duvidas"
    },
  ]

export default function SidebarDaGestora(props) {
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