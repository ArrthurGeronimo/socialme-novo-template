import React from 'react';
import { Link } from "react-router-dom";
import Logo from './../../../Assets/Images/logo.png';
import Michael from './../../../Assets/Images/michael.jpg';
import Dunder from './../../../Assets/Images/dunder.jpg';
import './style.css';

export default function NavbarDashboard(props) {
    const renderUserInformation = () => {
      switch(props.urlPai) {
        case '/me/beneficiaria':
        default:
          return(
            <div className="actionsUserProfile">
              <div className="containerImagemUsuario" style={{backgroundImage: `url(${Michael})`}} />
              <p>Michael Scott</p>
              <i className="fas fa-chevron-down"></i>
            </div>
          )
        case '/me/gestora':
          return(
            <div className="actionsUserProfile">
              <div className="containerImagemUsuario" style={{backgroundImage: `url(${Dunder})`}} />
              <p>Dunder Mifflin</p>
              <i className="fas fa-chevron-down"></i>
            </div>
          )
      }
    }
    return (
        <>
          <nav className="navbar-dashboard">
              <div className="containerBotaoToggleSidebar" onClick={() => props.avisaPaiSeBotaoSidebarFoiApertado(true)}>
                <div className="arrowBotaoToggleSidebar">
                  <i className={"fas fa-arrow-right " + (props.sidebarOpen ? 'espelharIcone' : '')}></i>
                </div>
                <div className="iconBotaoToggleSidebar">
                  {props.sidebarOpen ?
                    <i className="fas fa-bars"></i>
                  :
                    <i className="fas fa-grip-vertical"></i>
                  }
                </div>
              </div>
              <div className="rightItens">
                <Link to={"/me/beneficiaria"}>
                  <i className="far fa-smile"></i>
                </Link>
                <Link to={"/me/gestora"}>
                  <i className="far fa-building"></i>
                </Link>
                <i className="far fa-envelope"></i>
                <i className="far fa-bell"></i>
                
                {renderUserInformation()}
                
              </div>
          </nav>
        </>
    );
}