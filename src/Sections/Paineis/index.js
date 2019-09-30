import React from 'react';
import { Route, Redirect } from "react-router-dom";
import PainelDaBeneficiaria from './PainelDaBeneficiaria/index';
import PainelDaGestora from './PainelDaGestora/index';
import './style.css';

export default function Paineis(props) {
  return (
    <>
      <Route exact path={props.match.url}>
        <Redirect to={`${props.match.url}/beneficiaria`} />
      </Route>
      <Route 
        path={`${props.match.url}/beneficiaria`} 
        component={PainelDaBeneficiaria} 
      />
      <Route 
        path={`${props.match.url}/gestora`} 
        component={PainelDaGestora} 
      />
      {/* 
      <Route
        path={`${props.match.url}/beneficiaria`}
        render={props => <PainelDaBeneficiaria path={props.match.url} />}
      />
      <Route
        path={`${props.match.url}/gestora`}
        render={props => <PainelDaGestora />}
      />
      */}
    </>
  );

}