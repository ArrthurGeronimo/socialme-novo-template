import React from "react";
import './style.css';
import PopoverSimples from './../../../../../../../Components/PopoverSimples';

export default function PainelGestoraProgramasCardDoPrograma(props) {

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
                    <button className="btn btn-outline btn-outline-primary">
                      <i className="far fa-copy"></i>
                    </button>
                    <button className="btn btn-outline btn-outline-primary">
                      <i className="far fa-trash-alt"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </>
  );
}