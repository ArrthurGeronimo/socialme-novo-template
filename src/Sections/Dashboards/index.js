import React from 'react';
import { Route, Redirect } from "react-router-dom";
import BeneficiaryDashboard from './BeneficiaryDashboard/index';
import './style.css';

export default function Dashboards(props) {
  console.log(props)
  return (
    <>
      <Route exact path={props.match.url}>
        <Redirect to={`${props.match.url}/beneficiaria`} />
      </Route>
      <Route
        path={`${props.match.url}/beneficiaria`}
        render={props => <BeneficiaryDashboard />}
      />
    </>
  );

}