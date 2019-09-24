import React, { useState, useEffect } from 'react';
import './style.css';
import FlagPortugal from './../../../../../Assets/Flags/pt.svg';
import FlagBrazil from './../../../../../Assets/Flags/br.svg';

export default function SelectLanguage(props) {
    const [values, setValues] = useState({
        open: false,
        flag: FlagBrazil,
        language: 'POR'
      });
    //HANDLE CHANGE
    const handleChange = name => event => {
        switch(name) {
        case 'POR':
            return setValues({ ...values, flag: FlagBrazil, language: 'POR' });
        case 'PPO':
            return setValues({ ...values, flag: FlagPortugal, language: 'PPO' });
        default:
            return setValues({ ...values, [name]: event.target.value });
        }
    };
    const toggleSelect = () => {
        if(values.open){
            setValues({ ...values, open: false });
        }else{
            setValues({ ...values, open: true });
        }
    }
    return (
        <>
            <div className="select">
                <img onClick={() => toggleSelect()} src={values.flag} alt="Bandeira do Brasil" />
                <span onClick={() => toggleSelect()}>{values.language}</span>
                <i onClick={() => toggleSelect()} className={"fas fa-chevron-down " + (values.open ? 'selectIconRotateUp' : 'selectIconRotateDown')}></i>
                <div className={"box-select " + (values.open ? 'display-inline-block selectBoxOpen' : 'display-none')}>
                    <ul className="box-select-ul">
                        <li className="box-select-li" onClick={handleChange('POR')}>
                            <img src={FlagBrazil} alt="Bandeira do Brasil" />
                            POT
                        </li>
                        <li className="box-select-li" onClick={handleChange('PPO')}>
                            <img src={FlagPortugal} alt="Bandeira do Brasil" />
                            PPO
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}