import React, { useState } from "react";
import './style.css';
import PopoverSimples from './../../../../../../../Components/PopoverSimples';
import BoxVincula from './../BoxVincula';

export default function PainelGestoraProgramasCardDoPrograma(props) {
  const [values, setValues] = useState({
      boxParaVincularAberto: false
    });
  //HANDLE CHANGE
  const abrirBoxParaVincular = () => {
    if(values.boxParaVincularAberto){
      setValues({ ...values, boxParaVincularAberto: false });
    }else{
      setValues({ ...values, boxParaVincularAberto: true });
    }
  };
  return (
    <>
        <div className="cardProgramaIsometric-containerGeral">
            <div className="cardProgramaIsometric cardProgramaIsometricWhite">
              <div 
                className={"cardProgramaIsometric-border " + 
                (props.situacao === 'success' ? 'backgroundSuccess' : '') +
                (props.situacao === 'danger' ? 'backgroundDanger' : '') +
                (props.situacao === 'warning' ? 'backgroundWarning' : '')
              }
              ></div>
              <div className="cardProgramaIsometric-body">
                <div className="cardProgramaImagem-container">
                  <img src={`/assets/icones/programas/${props.imagem}.svg`} alt="Imagem do Programa" />
                </div>
                <div className="cardProgramaInformacoes-container">
                  <h2>{props.nome}</h2>
                  <div className="cardProgramaInformacoes-botoesDeAcao">
                    <PopoverSimples 
                      gatilho={
                        <button className="btn btn-outline btn-outline-primary">
                          <i className="fas fa-info"></i>
                        </button>
                      }
                      texto={
                        'Lorem Ipsum'
                      }
                    />
                    <button className="btn btn-outline btn-outline-primary">
                      <i className="fas fa-pencil-alt"></i>
                    </button>
                    <button onClick={() => abrirBoxParaVincular()} className="btn btn-outline btn-outline-primary">
                      <i className="far fa-copy"></i>
                    </button>
                    <button className="btn btn-outline btn-outline-primary">
                      <i className="far fa-trash-alt"></i>
                    </button>
                  </div>
                </div>
              </div>
              <BoxVincula aberto={values.boxParaVincularAberto}/>
            </div>
        </div>
    </>
  );
}