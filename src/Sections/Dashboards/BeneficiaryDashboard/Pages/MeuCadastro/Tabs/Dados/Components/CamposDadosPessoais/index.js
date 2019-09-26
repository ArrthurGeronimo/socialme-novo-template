import React, { useState, useEffect } from "react";
import api from './../../../../../../../../../Services/api';

export default function DashboardBeneficiaryMeuCadastroDadosCamposPessoais() {
  const [values, setValues] = useState({
    userId: '5d8d2bef6c84083f3c07919b',
    nome: ''
  });
  useEffect(() => {
    api.get(`/pessoa/${values.userId}`)
    .then(res => {
      if(res.data.codigo === 'CODIGOPESSOAENCONTADA'){
        setValues({ ...values, nome: res.data.pessoa.dados.nome });
      }
    })
    .catch(function (error) {
        console.log(error);
    })
  }, []);
  //HANDLE CHANGE
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  return (
    <>
      <div className="dashboardBeneficiaryMeuCadastroDadosCamposPessoais">
        <div className="row">
          {/* NOME */}
          <div className="col-sm-12 col-md-8 col-lg-8">
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
            {/* SEXO */}
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="form-group">
                <div className="form-label">Sexo</div>
                <div className="custom-controls-stacked">
                  <label className="custom-control custom-radio custom-control-inline">
                    <input 
                      type="checkbox" 
                      className="custom-control-input"
                      checked={values.sexo === 'Feminino' ? true : false}
                      value="Feminino"
                      onChange={handleChange('sexo')} 
                    />
                    <span className="custom-control-label">Feminino</span>
                  </label>
                  <label className="custom-control custom-radio custom-control-inline">
                  <input 
                      type="checkbox" 
                      className="custom-control-input"
                      checked={values.sexo === 'Masculino' ? true : false}
                      value="Masculino"
                      onChange={handleChange('sexo')} 
                    />
                    <span className="custom-control-label">Masculino</span>
                  </label>
                  <label className="custom-control custom-radio custom-control-inline">
                    <input 
                      type="checkbox" 
                      className="custom-control-input"
                      checked={values.sexo === 'Outro' ? true : false}
                      value="Outro"
                      onChange={handleChange('sexo')} 
                    />
                    <span className="custom-control-label">Outro</span>
                  </label>
                </div>
              </div>
            </div>
        </div>
      </div>
      
    </>
  );
}