import React, { useState } from "react";
import './Login2.css';
import Logo from './../../Assets/Images/logo.png';
import SelectLanguage from './../../Components/SelectLanguage';
import { Verification } from './Steps/Verification';
import { LoginReal } from './Steps/LoginReal';
import { RegisterPerson } from './Steps/RegisterPerson';

const Login = () => {
    const [values, setValues] = useState({
        inProgress: false,
        login: '',
        stepVerification: true,
        stepRegisterPerson: false
    });
// RENDER CARDS
    const renderCards = () => {
        if(values.stepVerification){
            return(
                <Verification changeLogin={changeLogin.bind(this)} verificationResponse={verificationResponse.bind(this)}  />
            )
        }else if(values.stepRegisterPerson){
            return(
                <RegisterPerson login={values.login} registerPersonBack={registerPersonBack.bind(this)}  />
            )
        }
    }
// CHANGE LOGIN
const changeLogin = (login) => {
    setValues({ ...values, login: login })
}
// VERIFICATION RESPONSE
    const verificationResponse = (message, mainDocument) => {
        // Não encontrou ninguém : ABF54A98CD1A6ED
        // Encontrou alguém, mas sem senha: ABF54A98CDE1987
        // Encontrou alguém, com senha: ABF54A98CDE14AA
        console.log('RESPONSE -> '+message);
        console.log('MAINDOCUMENT -> '+mainDocument);
        switch(message.toUpperCase()){
            default:
            case 'ABF54A98CD1A6ED':
                return(
                    setValues({ ...values, stepVerification: false, stepRegisterPerson: true })
                )
        }
    
        
    }
// REGISTER PERSON BACK
const registerPersonBack = () => {
    setValues({ ...values, stepVerification: true, stepRegisterPerson: false })
}
    return ( 
        <div className="Login-ContainerGeral">
            <div className="Login-Navbar">
                <img className="Login-Navbar-Logo" src={Logo} alt="Logo" />
                <div className="Login-Navbar-RightItens">
                    <SelectLanguage />
                </div>
            </div>
            <div className="container">
                <div
                    className={"Login-Card-GeneralContainer "
                    +(values.stepVerification ? ' Login-Card-VerificationContainer ' : '')
                    +(values.stepRegisterPerson ? ' Login-Card-RegisterPersonContainer ' : '')
                    }
                >
                    {renderCards()}
                </div>
            </div>
            {/* 
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
            */}
        </div>
    );
}
 
export default Login;
