import React from 'react';
import { Route, Redirect } from "react-router-dom";
import WhoWeAre from './WhoWeAre/index';

export default function About(props) {

  return (
    <>
      <Route exact path={props.match.url}>
        <Redirect to={`${props.match.url}/quem-somos`} />
      </Route>
      <Route
        path={`${props.match.url}/quem-somos`}
        render={props => <WhoWeAre />}
      />
    </>
  );

}