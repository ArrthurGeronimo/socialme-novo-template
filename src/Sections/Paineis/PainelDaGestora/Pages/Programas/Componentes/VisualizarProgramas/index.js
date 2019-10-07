import React, { useState, useEffect } from "react";
import './style.css';
import api from './../../../../../../../Services/api';
import CardDoPrograma from './../CardDoPrograma';

export default function PainelGestoraProgramasVisualizar() {
  const [values, setValues] = useState({
    gestoraId: '5d93a0417e87f339288f189b',
    programas: [],
    consultouAPI: false
});
//PEGA DADOS DA PESSOA DA API
  useEffect(() => {
    const obj = {
      quantidade :"25",
      pagina: "1",
      ordenar: {
        por:"valor",
        ordem:"asc"
      }
    };
    api.post(`/programas/${values.gestoraId}`, obj)
    .then(res => {
      console.log(res.data);
      setValues({ 
        ...values, 
        programas: res.data.programas,
        consultouAPI: true
      });
    })
    .catch(function (error) {
        console.log(error);
    })
  }, []);

  return (
    <>
      <div className="row">
        {values.programas.map((item, index) =>
          <div key={index} className="col-md-3">
            <CardDoPrograma imagem={item.imagem.url} nome={item.nome} situacao="success" />
          </div>
        )}
      </div>
    </>
  );
}