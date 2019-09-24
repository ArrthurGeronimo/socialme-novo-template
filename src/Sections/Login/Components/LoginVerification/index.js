import React, { useState } from 'react';
import './style.css';

export default function LoginVerification(props) {
  const [values, setValues] = useState({
    login:'',
    tipoDeLogin: '',
    verificando: false
  });
//HANDLE CHANGE
const handleChange = name => event => {
  switch(name) {
    default:
      return setValues({ ...values, [name]: event.target.value });
  }
};

  return (
    <div className="loginVerification">
        <h3>Entre com o seu <span>CPF</span> ou seu <span>CNPJ</span></h3>
        <div className="form-group">
            <input 
            type="text" 
            className="form-control" 
            placeholder="Digite seu CPF ou CNPJ" 
            value={values.login}
            onChange={handleChange('login')}
            />
        </div>
        <div className="rowCard">
            {values.verificando ? 
                <p><i className="fas fa-spinner icone-rodando"></i> Verificando CPF</p>
            :
                <p></p>
            }
            <button className="btn btnPrimary">Próximo</button>
        </div>
    </div>
  );
}