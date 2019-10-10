import React from 'react';
import './style.css';

export default function ManagerDashboardProgram() {
  return (
    <>
        <div className="managerDashboardProgram-informations-generalContainer">
            <div className="managerDashboardProgram-informations-imageContainer">
            <div className="managerDashboardProgram-informations-image"></div>
            </div>
            <div className="managerDashboardProgram-informations-informations">
            <h3>Nome do Programa</h3>
            <p>Beneficiarios no programa: <span>221</span></p>
            <p>Atividades Desenvolvidas: <span>1.329</span></p>
            <p>Investimentos no programa: <span>R$ 18.445</span></p>
            </div>
        </div>
    </>
  );
}