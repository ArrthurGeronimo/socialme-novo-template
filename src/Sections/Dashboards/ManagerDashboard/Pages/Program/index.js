import React from 'react';
import { Link } from "react-router-dom";
import './style.css';

export default function ManagerDashboardProgram({match}) {
  console.log(match);
  return (
    <>
      <div className="managerDashboardProgram-containerGeral">
        <div className="row">
          <div className="col-md-12">
            <Link to={'/'}>
              <p>Breadcrumbs</p>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
           
          </div>
        </div>
      </div> 
    </>
  );
}