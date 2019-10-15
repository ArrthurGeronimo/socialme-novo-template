import React from 'react';
import './Header.css';
import ImagemSection1 from './../../../../Assets/Images/image1.svg';

const HeaderHome = () => {
    return ( 
        <>
            <div className="HeaderHome-GeneralContainer">
                <div className="HeaderHome-Section1">
                    <div className="container" style={{display: 'flex'}}>
                        <div className="HeaderHome-Section1-ImageContainer">
                            <img src={ImagemSection1} className="HeaderHome-Section1-Image" alt="Testando" />
                        </div>
                        <div className="HeaderHome-Section1-Texts">
                            <h1>Lorem Ipsum</h1>
                            <p>Donec at augue a urna mattis lobortis a quis orci. Mauris non erat nec ante fermentum maximus non quis nulla.</p>
                            <button className="btn btn-3d btn-3d-secondary">Começar</button>
                        </div>
                    </div> 
                </div>
                <div className="HeaderHome-Section1Diagonal"></div>
                <div className="HeaderHome-Section1-Circle">
                    <i className="fas fa-chevron-down"></i>
                </div>
            </div>
        </>
     );
}
 
export default HeaderHome;