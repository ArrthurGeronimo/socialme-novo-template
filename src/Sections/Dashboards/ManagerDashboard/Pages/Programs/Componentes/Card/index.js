import React from 'react';
import { Link } from "react-router-dom";
import './style.css';

export default function ManagerDashboardProgramsCard(props) {
  return (
    <>
        <div className="managerDashboardProgramsCard-containerGeral">
            <div className="managerDashboardProgramsCard-containerGeral-card">
                <div className="managerDashboardProgramsCard-containerGeral-cardBorder"></div>
                <div className="managerDashboardProgramsCard-containerGeral-cardBody">
                    <div className="managerDashboardProgramsCard-containerGeral-cardBodyImageContainer">
                        <div className="managerDashboardProgramsCard-containerGeral-cardBodyImage"></div>
                    </div>
                    <div className="managerDashboardProgramsCard-containerGeral-cardBodyInformation">
                        <h3>{props.programa.nome}</h3>
                        <p>Beneficiarios no programa: <span>221</span></p>
                        <p>Atividades Desenvolvidas: <span>1.329</span></p>
                        <p>Investimentos no programa: <span>R$ 18.445</span></p>
                    </div>
                </div>
                <div className="managerDashboardProgramsCard-containerGeral-cardFooter">
                <Link to={`/me/painel-da-gestora/programa/${props.programa._id}`}>
                    <button>Visualizar</button>
                </Link>
                    <button>Editar Informações</button>
                    <button>Editar Regras</button>
                </div>
            </div>
        </div>
    </>
  );
}