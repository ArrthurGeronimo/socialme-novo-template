import React, { useState, useEffect } from "react";
import './LoginReal.css';


const LoginReal = () => {
    const [login, setLogin] = useState({
        mainDocument: '',
        warranty: ''
    });
    const [mainDocument, setMainDocument] = useState({
        value: ''
    });
    return ( 
        <>
            <div className="Login-LoginReal-GeneralContainer">
                
            </div>
        </>
    );
}
 
export default LoginReal;
