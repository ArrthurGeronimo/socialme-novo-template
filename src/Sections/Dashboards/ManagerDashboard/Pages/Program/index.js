import React from 'react';
import { Link } from "react-router-dom";
import './style.css';
import ActionBox from './Components/ActionBox';
import Informations from './Components/Informations';
import TableLatestRegisters from './Components/TableLatestRegisters';
import TableBenefits from './Components/TableBenefits';
import { MakeRouteWithSubRoutes } from '../../../../../makeRouteWithSubRoutes';
import api from './../../../../../Services/api';

export default function ManagerDashboardProgram({routes, match}) {
  return (
    <>
      <div className="managerDashboardProgram-generalContainer">
        <div className="row">
          <div className="col-md-12">
            <Link to={'/me/painel-da-gestora/programas'}>
              <p>Breadcrumbs</p>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5">
           <Informations />
          </div>
          <div className="col-md-7">
            <div className="managerDashboardProgram-actionsGeneralContainer">
              <ActionBox 
                titulo="Visão Geral"
                url={`/me/painel-da-gestora/programas/ver/${match.params.idDoPrograma}`} 
              />
              <ActionBox 
                titulo="Dados do Programa"
                url={'# '}
              />
              <ActionBox 
                titulo="Regras do Programa"
                url={'# '}
              />
              <ActionBox 
                titulo="Víncular Beneficiário"
                url={`/me/painel-da-gestora/programas/ver/${match.params.idDoPrograma}/vincular-beneficiario`} 
              />
            </div>
          </div>
        </div>

        {window.location.pathname === `/me/painel-da-gestora/programas/ver/${match.params.idDoPrograma}` ?
          <>
            <div className="row">
              <div className="col-md-5">
                <TableLatestRegisters idDoPrograma={match.params.idDoPrograma} />
              </div>
              <div className="col-md-7">
                <TableBenefits />
              </div>
            </div>
          </>
        :
          routes.map((route, index) => <MakeRouteWithSubRoutes key={index} {...route} />)
        }

      </div> 
    </>
  );
}