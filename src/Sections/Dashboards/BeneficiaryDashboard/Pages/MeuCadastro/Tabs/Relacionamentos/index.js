import React, { useState, useEffect } from "react";
import './style.css';
import api from './../../../../../../../Services/api';
import ImageUser from './../../../../../../../Assets/Images/user.png';
import ImageAdd from './../../../../../../../Assets/Images/add.png';
import ImageSquare from './../../../../../../../Assets/Images/check-box.png';

export default function DashboardBeneficiaryMeuCadastroRelacionamento() {
  const [values, setValues] = useState({
    mostrarFormAddRelacionamento: false,
    nomedaPessoaDoNovoRelacionamento: '',
    idDaPessoaDoNovoRelacionamento: '',
    cpfDoNovoRelacionamento: '02713530237',
    tipoDoNovoRelacionamento: '',
    todosOsRelacionamentos: [],
    userId: '5d8d2bef6c84083f3c07919b',
    pegouDadosDaAPI: false,
    aux: 0,
  });
  //HANDLE CHANGE
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  useEffect(() => {
    console.log('Consultando');
    api.get(`buscarParaRelacionamento/${values.userId}/${values.cpfDoNovoRelacionamento}`)
    .then(res => {
      console.log(res);
      setValues({ 
        ...values, 
        nomedaPessoaDoNovoRelacionamento: res.data.pessoa.dados.nome,
        idDaPessoaDoNovoRelacionamento: res.data.pessoa._id 
      });
    })
    .catch(function (error) {
      console.log(error);
    })
  }, [values.cpfDoNovoRelacionamento.length === 11]);

  useEffect(() => {
    console.log('PEGANDO RELACIONAMENTOS')
    api.get(`relacionamentos/${values.userId}`)
    .then(res => {
      console.log(res.data);
      setValues({ 
        ...values, 
        todosOsRelacionamentos: res.data.relacionamentos,
        pegouDadosDaAPI: true
      });
    })
    .catch(function (error) {
      console.log(error);
    })
  }, [values.aux]);

  const toggleMostrarFormAddRelacionamento = () => {
    if(values.mostrarFormAddRelacionamento){
      setValues({ ...values, mostrarFormAddRelacionamento: false });
    }else{
      setValues({ ...values, mostrarFormAddRelacionamento: true });
    }
  }

  const addRelacionamento = () => {
    const obj = {
      _id: values.userId,
      _idPessoa: values.idDaPessoaDoNovoRelacionamento,
      vinculo: values.tipoDoNovoRelacionamento
    };
    api.post(`novoRelacionamento`,obj)
    .then(res => {
      console.log(res);
      if(res.data.codigo === "CDIGOTUDOOK"){
        setValues({ ...values, mostrarFormAddRelacionamento: false, aux: values.aux+1 });
      }
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  const deletarRelacionamento = (idDoRelacionamento) => {
    api.delete(`removerRelacionamento/${values.userId}/${idDoRelacionamento}`)
    .then(res => {
      console.log(res.data);
      if(res.data.codigo === 'CODIGOOK'){
        setValues({ ...values, aux: values.aux+1 });
      }
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  const renderNomeDaConsulta = () => {
    return(
      <div className="form-group">
        <p>{values.nomedaPessoaDoNovoRelacionamento}</p>
      </div>
    )
  }

  const renderRowAdicionaRelacionamento = () => {
    return (
      <>
        <li onClick={() => toggleMostrarFormAddRelacionamento()} className="dashboardBeneficiaryMeuCadastroRelacionamento-li">
          <div className="dashboardBeneficiaryMeuCadastroRelacionamento-li-imgContainer">
            <img src={ImageAdd} alt="Imagem padrão de usuário" />
          </div>
          <div className="dashboardBeneficiaryMeuCadastroRelacionamento-li-addText">
            <p>Adicionar um membro da família</p>
          </div>
        </li>
        <div className={"drawer-out "+(values.mostrarFormAddRelacionamento ? 'opencan' : '')}>
          <div className="drawer">
            <li className="dashboardBeneficiaryMeuCadastroRelacionamento-li-addRelacionamento">
              <div className="dashboardBeneficiaryMeuCadastroRelacionamento-li-imgContainer">
                <img src={ImageSquare} alt="Imagem padrão de usuário" />
              </div>
              {renderNomeDaConsulta()}
              <div className="form-group">
                <input 
                  type="text" 
                  className="form-control input-text" 
                  placeholder="Digite o CPF da pessoa"
                  value={values.cpfDoNovoRelacionamento}
                  onChange={handleChange('cpfDoNovoRelacionamento')}
                />
              </div>
              <div className="form-group">
                <select 
                  className="form-control"
                  value={values.tipoDoNovoRelacionamento}
                  onChange={handleChange('tipoDoNovoRelacionamento')}
                >
                  <option value="">Selecione um relacionamento</option>
                  <option value="PAI">Pai</option>
                  <option value="MÃE">Mãe</option>
                  <option value="FILHO">Filho</option>
                  <option value="FILHA">Filha</option>
                  <option value="AVÔ">Avô</option>
                  <option value="AVÓ">Avó</option>
                  <option value="NETO">Neto</option>
                  <option value="NETA">Neta</option>
                  <option value="BISAVÔ">Bisavô</option>
                  <option value="BISAVÓ">Bisavó</option>
                  <option value="BISNETO">Bisneto</option>
                  <option value="BISNETA">Bisneta</option>
                  <option value="NOIVO">Noivo</option>
                  <option value="NOIVA">Noiva</option>
                  <option value="MARIDO">Marido</option>
                  <option value="ESPOSA">Esposa</option>
                </select>
              </div>
              <button onClick={() => addRelacionamento()} className="btn btn-primary">Salvar Alterações</button>
            </li>
          </div>
        </div>
      </>
    )
  }



  return (
    <>
      <div className="dashboardBeneficiaryMeuCadastroRelacionamento">
        <ul className="dashboardBeneficiaryMeuCadastroRelacionamento-ul">
          {renderRowAdicionaRelacionamento()}

          {values.todosOsRelacionamentos.map(item =>
            <li key={item._id} className="dashboardBeneficiaryMeuCadastroRelacionamento-li">
              <div className="dashboardBeneficiaryMeuCadastroRelacionamento-li-imgContainer">
                <img src={ImageUser} alt="Imagem padrão de usuário" />
              </div>
              <div className="dashboardBeneficiaryMeuCadastroRelacionamento-li-containerInfo">
                <p>{item.nome}</p>
                <span>{item.vinculo}</span>
              </div>
              <div className="dashboardBeneficiaryMeuCadastroRelacionamento-buttonsActions">
                <button className="btn btn-transparent btn-transparent-primary">
                    <i className="fas fa-pencil-alt"></i>
                    Editar
                </button>
                <button onClick={() => deletarRelacionamento(item._id)} className="btn btn-transparent btn-transparent-primary">
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </li>
          )}
          
        </ul>
      </div>
    </>
  );
}