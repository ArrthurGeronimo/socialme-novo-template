import React from 'react';
import { Route, Redirect } from "react-router-dom";
import PainelGeral from './../../../Components/Layout/PainelGeral';
import PageMovimentacoes from './Pages/Movimentacoes';
import PageProgramas from './Pages/Programas';
import PageGestorDeBeneficios from './Pages/GestorDeBeneficios';
import PageDuvidas from './Pages/Duvidas';

export default function PainelDaBeneficiaria(props) {
  const urlPai = props.match.url;
  return (
    <>
      <Route exact path={props.match.url}>
        <Redirect to={`${props.match.url}/gestor-de-beneficios`} />
      </Route>
      <Route
        path={`${props.match.url}/movimentacoes`}
        render={props => <PainelGeral conteudo={<PageMovimentacoes />} urlPai={urlPai} paginaAtiva={'movimentacoes'} />}
      />
      <Route
        path={`${props.match.url}/programas`}
        render={props => <PainelGeral conteudo={<PageProgramas />} urlPai={urlPai} paginaAtiva={'programas'} />}
      />
      <Route
        path={`${props.match.url}/gestor-de-beneficios`}
        render={props => <PainelGeral conteudo={<PageGestorDeBeneficios />} urlPai={urlPai} paginaAtiva={'gestor-de-beneficios'} />}
      />
      <Route
        path={`${props.match.url}/duvidas`}
        render={props => <PainelGeral conteudo={<PageDuvidas />} urlPai={urlPai} paginaAtiva={'duvidas'} />}
      />
    </>
  );
}