import React, { useContext } from 'react';
import './style.css';
import HeaderImage from './../../../../Assets/Images/header-image.png';
import { LanguageContext } from './../../../../Contexts/LanguageContext';

export default function HeaderHome() {
  const { language, translate } = useContext(LanguageContext);
  console.log(translate)
  return (
    <>
        <div className="headerHome">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-6">
                <h1>{translate.headerSite}</h1>
                <div className="dividerHorizontal"></div>
                <p>{translate.headerText}</p>
                <div>
                <button className="btn btn-outline">{translate.headerButton1}</button>
                <button className="btn btn-outline">{translate.headerButton2}</button>
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <img src={HeaderImage} alt="Imagem do Header" />
              </div>
            </div>
            <div className="boxMouseAnimate">
              <div className="mouse"></div>
            </div>
          </div>
        </div>
    </>
  );
}