import React from 'react';
import './Login2.css';
import Logo from './../../Assets/Images/logo.png';
import SelectLanguage from './../../Components/SelectLanguage';
import { NotificationAnimation } from './../../Components/NotificationAnimation';
import { Verification } from './Steps/Verification';

const Login = () => {
    return ( 
        <div className="Login-ContainerGeral">
            <div className="Login-Navbar">
                <img className="Login-Navbar-Logo" src={Logo} alt="Logo" />
                <div className="Login-Navbar-RightItens">
                    <SelectLanguage />
                </div>
            </div>
            <div className="Login-Notification-GeneralContainer">
                <div className="Login-Notification-ContainerBox">
                    <NotificationAnimation 
                        icon="em em-smiley"
                        text="Coloque seu CPF ou CNPJ para se REGISTRAR ou ENTRAR no Social Me"
                        color="info"
                    />
                </div>
            </div>
            <div className="container">
                <div className="Login-Card-GeneralContainer">
                    <Verification />
                </div>
            </div>
            <div className="Login-Footer">
                <ul className="Login-Footer-ul">
                    <li className="Login-Footer-li">
                        <a href="/">Sobre</a>
                    </li>
                    <li className="Login-Footer-li">
                        |
                    </li>
                    <li className="Login-Footer-li">
                        <a href="/">Termos</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
 
export default Login;
