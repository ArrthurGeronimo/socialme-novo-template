import React from 'react';
import { Route, Redirect } from "react-router-dom";
import PainelGeral from './../../../Components/Layout/PainelGeral';
import PageMinhaConta from './Pages/MinhaConta';
import PageMeuCadastro from './Pages/MeuCadastro';
import PageDuvidas from './Pages/Duvidas';

export default function PainelDaBeneficiaria(props) {
  const urlPai = props.match.url;
  return (
    <>
      <Route exact path={props.match.url}>
        <Redirect to={`${props.match.url}/meu-cadastro`} />
      </Route>
      <Route
        path={`${props.match.url}/minha-conta`}
        render={props => <PainelGeral conteudo={<PageMinhaConta />} urlPai={urlPai} paginaAtiva={'minha-conta'} />}
      />
      <Route
        path={`${props.match.url}/meu-cadastro`}
        render={props => <PainelGeral conteudo={<PageMeuCadastro />} urlPai={urlPai} paginaAtiva={'meu-cadastro'} />}
      />
      <Route
        path={`${props.match.url}/duvidas`}
        render={props => <PainelGeral conteudo={<PageDuvidas />} urlPai={urlPai} paginaAtiva={'duvidas'} />}
      />
    </>
  );
}