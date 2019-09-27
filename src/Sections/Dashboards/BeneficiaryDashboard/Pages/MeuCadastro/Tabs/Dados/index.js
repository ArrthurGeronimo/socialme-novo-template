import React, { useState, useEffect } from "react";
import './style.css';
import api from './../../../../../../../Services/api';
//import TabCamposPessoais from './Components/CamposDadosPessoais';
//import TabCamposEndereco from './Components/CamposDadosEndereco';

//TABS
const beneficiaryMeuCadastroDados = [
  {
    "icone" : "far fa-user",
    "titulo" : "Pessoais",
    "slug" : "pessoais"
  },
  {
    "icone" : "far fa-address-card",
    "titulo" : "Endereço",
    "slug" : "endereco"
  }
]

export default function DashboardBeneficiaryMeuCadastroDados() {
  const [values, setValues] = useState({
    userId: '5d8d2bef6c84083f3c07919b',
    quantidadeDeItensNasTabs : beneficiaryMeuCadastroDados.length,
    tamanhoSlider: 0,
    translateSlider: 0,
    activeTab: 'dados',
    //Dados
    dadosDaPessoa: [],
    nome: '',
    nomeSocial: '',
    sexo: '',
    generoSocial: '',
    estadoCivil: '',
    dataDeNascimento: '',
    dataDeFalecimento: '',
    cpf: '',
    cns: '',
    pis: '',
    rg: '',
    escolaridade: '',
    profissao: '',
    telefoneFixo: '',
    telefoneCelular: '',
    email: '',
    //Nascimento
    dataNascimento: '',
    nacionalidade: '',
    paisNascimento: '',
    estadoNascimento: '',
    cidadeNascimento: '',
    //Endereço
    logradouro: '',
    numero: '',
    bairro: '',
    cidade: '',
    estadoProvincia: '',
    pais: '',
    cep: '',
    lat: '',
    lgn: '',
    inscricaoImobiliaria: '',
    complemento: '',
    //Outros
    beneficiaria: false,
    doadora: false,
    fornecedora: false

  });
//HANDLE CHANGE
const handleChange = name => event => {
  setValues({ ...values, [name]: event.target.value });
};
//PEGA DADOS DA PESSOA DA API
  useEffect(() => {
    api.get(`/pessoa/${values.userId}`)
    .then(res => {
      console.log(res.data);
      if(res.data.codigo === 'CODIGOPESSOAENCONTADA'){
        const dados = res.data.pessoa.dados;
        const nascimento = res.data.pessoa.dados.nascimento;
        const endereco = res.data.pessoa.dados.endereco;
        setValues({ 
          ...values, 
          dadosDaPessoa: res.data.pessoa,
          nome: dados.nome,
          nomeSocial: dados.nomeSocial,
          sexo: dados.sexo,
          generoSocial: dados.generoSocial,
          estadoCivil: dados.estadoCivil,
          dataDeFalecimento: dados.dataDeFalecimento,
          cpf: dados.cpf,
          cns: '',
          pis: '',
          rg: '',
          escolaridade: dados.escolaridade,
          profissao: dados.profissao,
          telefoneFixo: '',
          telefoneCelular: '',
          email: dados.email,
          //Nascimento
          /*
          dataNascimento: nascimento.data,
          nacionalidade: nascimento.nacionalidade,
          paisNascimento: nascimento.paisNascimento,
          estadoNascimento: nascimento.estadoNascimento,
          cidadeNascimento: nascimento.cidadeNascimento,
          */
          //Endereço
          logradouro: endereco.logradouro,
          numero: endereco.numero,
          bairro: endereco.bairro,
          cidade: endereco.cidade,
          estadoProvincia: endereco.estadoProvincia,
          pais: endereco.pais,
          cep: endereco.cep,
          lat: endereco.lat,
          lng: endereco.lng,
          inscricaoImobiliaria: endereco.inscricaoImobiliaria,
          complemento: endereco.complemento
        });
      }
    })
    .catch(function (error) {
        console.log(error);
    })
  }, []);
//ARRUMA TAMANHO DO SLIDER
  useEffect(() => {
    let valor = 100/values.quantidadeDeItensNasTabs;
    setValues({ ...values, tamanhoSlider: valor });
  }, []);
//TOGGLE TAB ATIVA
  const toogleActiveTab = (tabClicada) => {
    for (let i = 0; i < beneficiaryMeuCadastroDados.length; i++){
      if(beneficiaryMeuCadastroDados[i].titulo === tabClicada){
        let valorTranslate = i*100;
        setValues({ ...values, activeTab: tabClicada, translateSlider: valorTranslate });
        break;
      }
    }
  }
//RENDERIZA O CONTEÚDO DA TAB
  const renderContentTab = () => {
    switch (values.activeTab) {
      case 'Pessoais':
      default:
        return <TabCamposPessoais values={values} />;
      case 'Endereço':
          return <TabCamposEndereco />;
    }
  }

//FORMS DOS CAMPOS PESSOAIS
  const TabCamposPessoais = () => {
    return(
      <>
        <div className="row">
          {/* NOME */}
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="form-group">
              <label className="form-label">Nome Completo</label>
              <input 
                type="text" 
                className="form-control input-text" 
                placeholder="Digite seu nome completo"
                value={values.nome}
                onChange={handleChange('nome')}
              />
            </div>
          </div>
          {/* Sexo */}
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="form-group">
              <label className="form-label">Sexo</label>
              <input 
                type="text" 
                className="form-control input-text" 
                placeholder=""
                value={values.sexo}
                onChange={handleChange('sexo')}
              />
            </div>
          </div>
          {/* NOME SOCIAL */}
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="form-group">
              <label className="form-label">Nome Social</label>
              <input 
                type="text" 
                className="form-control input-text" 
                placeholder="Digite seu nome completo"
                value={values.nomeSocial}
                onChange={handleChange('nomeSocial')}
              />
            </div>
          </div>
          {/* GENERO SOCIAL */}
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="form-group">
              <label className="form-label">Genero Social</label>
              <input 
                type="text" 
                className="form-control input-text" 
                placeholder="Digite seu nome completo"
                value={values.generoSocial}
                onChange={handleChange('generoSocial')}
              />
            </div>
          </div>
          {/* Estado Civil */}
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="form-group">
              <label className="form-label">Estado Civil</label>
              <input 
                type="text" 
                className="form-control input-text" 
                placeholder=""
                value={values.estadoCivil}
                onChange={handleChange('estadoCivil')}
              />
            </div>
          </div>
          {/* CPF */}
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="form-group">
              <label className="form-label">CPF</label>
              <input 
                type="text" 
                className="form-control input-text" 
                placeholder=""
                value={values.cpf}
                onChange={handleChange('cpf')}
              />
            </div>
          </div>
          {/* CNS */}
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="form-group">
              <label className="form-label">CNS</label>
              <input 
                type="text" 
                className="form-control input-text" 
                placeholder=""
                value={values.cns}
                onChange={handleChange('cns')}
              />
            </div>
          </div>
          {/* PIS */}
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="form-group">
              <label className="form-label">PIS</label>
              <input 
                type="text" 
                className="form-control input-text" 
                placeholder=""
                value={values.pis}
                onChange={handleChange('pis')}
              />
            </div>
          </div>
          {/* RG */}
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="form-group">
              <label className="form-label">RG</label>
              <input 
                type="text" 
                className="form-control input-text" 
                placeholder=""
                value={values.rg}
                onChange={handleChange('rg')}
              />
            </div>
          </div>
          {/* Escolaridade */}
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="form-group">
              <label className="form-label">Escolaridade</label>
              <input 
                type="text" 
                className="form-control input-text" 
                placeholder=""
                value={values.escolaridade}
                onChange={handleChange('escolaridade')}
              />
            </div>
          </div>
          {/* Profissão */}
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="form-group">
              <label className="form-label">Profissão</label>
              <input 
                type="text" 
                className="form-control input-text" 
                placeholder=""
                value={values.profissao}
                onChange={handleChange('profissao')}
              />
            </div>
          </div>
          {/* Telefone Fixo */}
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="form-group">
              <label className="form-label">Telefone Fixo</label>
              <input 
                type="text" 
                className="form-control input-text" 
                placeholder=""
                value={values.telefoneFixo}
                onChange={handleChange('telefoneFixo')}
              />
            </div>
          </div>
          {/* Telefone Celular */}
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="form-group">
              <label className="form-label">Telefone Celular</label>
              <input 
                type="text" 
                className="form-control input-text" 
                placeholder=""
                value={values.telefoneCelular}
                onChange={handleChange('telefoneCelular')}
              />
            </div>
          </div>
          {/* Email */}
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="form-group">
              <label className="form-label">Email</label>
              <input 
                type="text" 
                className="form-control input-text" 
                placeholder=""
                value={values.email}
                onChange={handleChange('email')}
              />
            </div>
          </div>
        </div>
      </>
    )
  }

//FORMS DOS CAMPOS DE ENDEREÇO
  const TabCamposEndereco= () => {
    return(
      <div className="row">
        {/* Logradouro */}
        <div className="col-sm-12 col-md-4 col-lg-4">
          <div className="form-group">
            <label className="form-label">Logradouro</label>
            <input 
              type="text" 
              className="form-control input-text" 
              placeholder=""
              value={values.logradouro}
              onChange={handleChange('logradouro')}
            />
          </div>
        </div>
        {/* Número */}
        <div className="col-sm-12 col-md-4 col-lg-4">
          <div className="form-group">
            <label className="form-label">Número</label>
            <input 
              type="text" 
              className="form-control input-text" 
              placeholder=""
              value={values.bairro}
              onChange={handleChange('bairro')}
            />
          </div>
        </div>
        {/* Bairro */}
        <div className="col-sm-12 col-md-4 col-lg-4">
          <div className="form-group">
            <label className="form-label">Bairro</label>
            <input 
              type="text" 
              className="form-control input-text" 
              placeholder=""
              value={values.bairro}
              onChange={handleChange('bairro')}
            />
          </div>
        </div>
        {/* Cidade */}
        <div className="col-sm-12 col-md-4 col-lg-4">
          <div className="form-group">
            <label className="form-label">Cidade</label>
            <input 
              type="text" 
              className="form-control input-text" 
              placeholder=""
              value={values.cidade}
              onChange={handleChange('cidade')}
            />
          </div>
        </div>
        {/* Estado Provincia */}
        <div className="col-sm-12 col-md-4 col-lg-4">
          <div className="form-group">
            <label className="form-label">Estado Provincia</label>
            <input 
              type="text" 
              className="form-control input-text" 
              placeholder=""
              value={values.estadoProvincia}
              onChange={handleChange('estadoProvincia')}
            />
          </div>
        </div>
        {/* País */}
        <div className="col-sm-12 col-md-4 col-lg-4">
          <div className="form-group">
            <label className="form-label">País</label>
            <input 
              type="text" 
              className="form-control input-text" 
              placeholder=""
              value={values.pais}
              onChange={handleChange('pais')}
            />
          </div>
        </div>
        {/* CEP */}
        <div className="col-sm-12 col-md-4 col-lg-4">
          <div className="form-group">
            <label className="form-label">CEP</label>
            <input 
              type="text" 
              className="form-control input-text" 
              placeholder=""
              value={values.cep}
              onChange={handleChange('cep')}
            />
          </div>
        </div>
        {/* Latitude */}
        <div className="col-sm-12 col-md-4 col-lg-4">
          <div className="form-group">
            <label className="form-label">Latitude</label>
            <input 
              type="text" 
              className="form-control input-text" 
              placeholder=""
              value={values.lat}
              onChange={handleChange('lat')}
            />
          </div>
        </div>
        {/* Longitude */}
        <div className="col-sm-12 col-md-4 col-lg-4">
          <div className="form-group">
            <label className="form-label">Longitude</label>
            <input 
              type="text" 
              className="form-control input-text" 
              placeholder=""
              value={values.lgn}
              onChange={handleChange('lgn')}
            />
          </div>
        </div>
        {/* Inscrição Imobiliária */}
        <div className="col-sm-12 col-md-4 col-lg-4">
          <div className="form-group">
            <label className="form-label">Inscrição Imobiliária</label>
            <input 
              type="text" 
              className="form-control input-text" 
              placeholder=""
              value={values.inscricaoImobiliaria}
              onChange={handleChange('inscricaoImobiliaria')}
            />
          </div>
        </div>
        {/* Complemento */}
        <div className="col-sm-12 col-md-4 col-lg-4">
          <div className="form-group">
            <label className="form-label">Complemento</label>
            <input 
              type="text" 
              className="form-control input-text" 
              placeholder=""
              value={values.complemento}
              onChange={handleChange('complemento')}
            />
          </div>
        </div>
      </div>
    )
  }
//ATUALIZA OS DADOS
  const atualizarOsDados = () => {
    const obj = {
      dados:{
        //OBJETO AQUI
      }
    }; 
  }

//RETURN
  return (
    <>
        <div className="dashboardBeneficiaryMeuCadastro">
        <div className="col-sm-12 col-md-12 col-lg-12">
          <h2>{values.dadosDaPessoa.porcentagemCadastro}%</h2>
        </div>
          <div className="beneficiaryMeuCadastroTabs">
              <ul className="beneficiaryMeuCadastroTabs-ul">
                {beneficiaryMeuCadastroDados.map(item => 
                  <li
                    key={item.slug}
                    className={"beneficiaryMeuCadastroTabs-li"}
                    onClick={() => toogleActiveTab(item.titulo)}
                  >
                    <label>
                    <i className={item.icone}></i>
                    <span>{item.titulo}</span>
                    </label>
                  </li>
                )}
              </ul>
              <div className="slider" 
                style={{width: `${values.tamanhoSlider}%`, transform: `translateX(${values.translateSlider}%)`}}
              >
                <div className="indicator"></div>
              </div>
          </div>
          {renderContentTab()}
          <div className="row">
            <button onClick={() => atualizarOsDados()} className="btn btn-primary">Salvar Alterações</button>
          </div>
        </div>
    </>
  );
}