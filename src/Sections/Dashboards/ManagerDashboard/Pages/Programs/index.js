import React, { useState, useEffect } from "react";
import './style.css';
import FilterRow from './Componentes/FilterRow';
import ContainerCards from './Componentes/ContainerCards';
import api from './../../../../../Services/api';

export default function PainelGestoraProgramas() {
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
      if(res.data.meta.codigo === '0004002001'){
        setValues({ 
          ...values, 
          programas: res.data.programas,
          consultouAPI: true
        });
      }
    })
    .catch(function (error) {
        console.log(error);
    })
  }, []);

  return (
    <>
      <FilterRow />
      <ContainerCards todosOsProgramas={values.programas} />
    </>
  );
}