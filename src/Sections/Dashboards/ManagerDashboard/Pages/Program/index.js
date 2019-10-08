import React from 'react';

export default function ManagerDashboardProgram({match}) {
  console.log(match);
  return (
    <>
      <div className="content-generic">
        <h1>ID: {match.params.idDoPrograma}</h1>
      </div>
    </>
  );
}