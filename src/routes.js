import React from 'react';
import { MakeRouteWithSubRoutes } from './makeRouteWithSubRoutes';
import { Switch, Link } from 'react-router-dom';

//Páginas Gerais
import Home from './Sections/Home';
import Page404 from './Sections/404';
//Páginas de Lógicas
import Dashboards from './Sections/Dashboards';
//Painel da Gestora
import ManagerDashboard from './Sections/Dashboards/ManagerDashboard';
import ManagerDashboardMoves from './Sections/Dashboards/ManagerDashboard/Pages/Moves';
import ManagerDashboardProgramsAdd from './Sections/Dashboards/ManagerDashboard/Pages/ProgramsAdd';
import ManagerDashboardPrograms from './Sections/Dashboards/ManagerDashboard/Pages/Programs';
import ManagerDashboardProgram from './Sections/Dashboards/ManagerDashboard/Pages/Program';
import ManagerDashboardBenefitManager from './Sections/Dashboards/ManagerDashboard/Pages/BenefitManager';
import ManagerDashboardFQA from './Sections/Dashboards/ManagerDashboard/Pages/FQA';
//Painel da Beneficiária
import BeneficiaryDashboard from './Sections/Dashboards/BeneficiaryDashboard';
import BeneficiaryDashboardMyAccount from './Sections/Dashboards/BeneficiaryDashboard/Pages/MyAccount';
import BeneficiaryDashboardMyRegister from './Sections/Dashboards/BeneficiaryDashboard/Pages/MyRegister';
import BeneficiaryDashboardFQA from './Sections/Dashboards/BeneficiaryDashboard/Pages/FQA';

import { TopicList } from './views/TopicList';



const TopicDetail = ({ routes, match }) => {
  return (
    <div>
      <hr />
      <h3>{match.params.topicId}</h3>
      <ul>
        <li>
          <Link to="/Topics">Back to Topics</Link>
        </li>
      </ul>
    </div>
  );
};

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/me",
    component: Dashboards,
    routes: [
      {
        path: "/me/painel-da-gestora",
        component: ManagerDashboard,
        routes: [
          {
            path: "/me/painel-da-gestora/movimentacoes",
            component: ManagerDashboardMoves
          },
          {
            path: "/me/painel-da-gestora/programas",
            component: ManagerDashboardPrograms,
          },
          {
            path: "/me/painel-da-gestora/adicionar-programa",
            component: ManagerDashboardProgramsAdd,
          },
          {
            path: "/me/painel-da-gestora/programa/:idDoPrograma",
            component: ManagerDashboardProgram,
          },
          {
            path: "/me/painel-da-gestora/gestor-de-beneficios",
            component: ManagerDashboardBenefitManager
          },
          {
            path: "/me/painel-da-gestora/duvidas",
            component: ManagerDashboardFQA
          },
        ]
      },
      {
        path: "/me/painel-da-beneficiaria",
        component: BeneficiaryDashboard,
        routes: [
          {
            path: "/me/painel-da-beneficiaria/minha-conta",
            component: BeneficiaryDashboardMyAccount
          },
          {
            path: "/me/painel-da-beneficiaria/meu-cadastro",
            component: BeneficiaryDashboardMyRegister,
          },
          {
            path: "/me/painel-da-beneficiaria/duvidas",
            component: BeneficiaryDashboardFQA,
          },
        ]
      }
    ]
  },
  {
    path: "/Topics",
    component: TopicList,
    routes: [
      {
        path: "/Topics/:topicId",
        component: TopicDetail
      },
    ]
  },
  {
    path: "/:WhereTheHeckIsThat",
    component: Page404,
  }
];

export const Routes = (props) => {
  return (
    <div>
      <Switch>
        {
          routes.map(
            (route, index) => <MakeRouteWithSubRoutes key={index} {...route} />
          )
        }
      </Switch>
    </div>
  );
};
