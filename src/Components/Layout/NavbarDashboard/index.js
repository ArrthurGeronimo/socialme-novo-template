import React from 'react';
import { Link } from "react-router-dom";
import Logo from './../../../Assets/Images/logo.png';
import Michael from './../../../Assets/Images/michael.jpg';
import './style.css';

export default function NavbarDashboard(props) {

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
                <i className="far fa-envelope"></i>
                <i className="far fa-bell"></i>
                <div className="actionsUserProfile">
                  <img src={Michael} alt="Michael Scott" />
                  <p>Michael Scott</p>
                  <i className="fas fa-chevron-down"></i>
                </div>
              </div>
          </nav>
        </>
    );
}