import React, { useState } from 'react';
import './style.css';
import PainelNavbar from '../PainelNavbar';
import PainelSidebar from '../PainelSidebar';

export default function PainelGeral(props) {
    const [values, setValues] = useState({
        sidebarOpen: true,
        paginaAtiva: props.paginaAtiva,
    });
    const navbarFilhoAvisaSeBotaoSidebarFoiApertado = (value) => {
        if(values.sidebarOpen){
            setValues({ ...values, sidebarOpen: false });
        }else{
            setValues({ ...values, sidebarOpen: true });
        }
    }
    return (
        <>
            <div className="dashboardGeral">
                <div 
                    className={"containerSidebar " + (values.sidebarOpen ? 'containerSidebarOpen' : 'containerSidebarClose')}
                >
                    <PainelSidebar 
                        sidebarOpen={values.sidebarOpen}
                        paginaAtiva={props.paginaAtiva}
                        urlPai={props.urlPai}
                    />
                </div>
                <div className="containerContent">
                    <PainelNavbar 
                        avisaPaiSeBotaoSidebarFoiApertado={navbarFilhoAvisaSeBotaoSidebarFoiApertado.bind(this)} 
                        sidebarOpen={values.sidebarOpen}
                        urlPai={props.urlPai}
                    />
                    <div className="containerOnlyContent">

                       {props.conteudo}

                    </div>
                </div>
            </div>
        </>
    );
}