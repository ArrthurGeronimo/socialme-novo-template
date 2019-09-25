import React from 'react';
import { Link } from "react-router-dom";
import Logo from './../../../Assets/Images/logo.png';
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
          </nav>
        </>
    );
}