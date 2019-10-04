import React from 'react';
import './style.css';
import LinhaDeFiltros from './Componentes/LinhaDeFiltros';
import CardDoPrograma from './Componentes/CardDoPrograma';

export default function PainelGestoraProgramas() {
  return (
    <>
    <LinhaDeFiltros />
      <div className="row">
        <div className="col-md-3">
          <CardDoPrograma imagem="alvo" nome="Nome do Programa" situacao="success" />
        </div>
        <div className="col-md-3">
          <CardDoPrograma imagem="chart" nome="Nome do Programa" situacao="success" />
        </div>
        <div className="col-md-3">
          <CardDoPrograma imagem="curriculo" nome="Nome do Programa" situacao="danger" />
        </div>
        <div className="col-md-3">
          <CardDoPrograma imagem="quebra-cabeca" nome="Nome do Programa" situacao="success" />
        </div>
      </div>
    </>
  );
}