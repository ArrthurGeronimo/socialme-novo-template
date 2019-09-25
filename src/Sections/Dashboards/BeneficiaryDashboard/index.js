import React, { useState } from 'react';
import NavbarDashboard from './../../../Components/Layout/NavbarDashboard';
import SidebarDashboardBeneficiary from './../../../Components/Layout/SidebarDashboardBeneficiary';

export default function BeneficiaryDashboard(props) {
    const [values, setValues] = useState({
        sidebarOpen: true,
        pageAtiva: 'Minha Conta',
      });
    const navbarFilhoAvisaSeBotaoSidebarFoiApertado = (value) => {
        if(values.sidebarOpen){
            setValues({ ...values, sidebarOpen: false });
        }else{
            setValues({ ...values, sidebarOpen: true });
        }
    }
    const navbarFilhoAvisaQualPaginaEstaAtiva = (value) => {
        console.log('PAGINA CLICADA -> ' + value);
        setValues({ ...values, pageAtiva: value });
    }
    console.log(props);
    return (
        <>
            <div className="dashboardGeral">
                <div 
                    className={"containerSidebar " + (values.sidebarOpen ? 'containerSidebarOpen' : 'containerSidebarClose')}
                >
                    <SidebarDashboardBeneficiary 
                        sidebarOpen={values.sidebarOpen}
                        pageAtiva={values.pageAtiva}
                        avisaPaiQualPaginaEstaAtiva={navbarFilhoAvisaQualPaginaEstaAtiva.bind(this)}
                    />
                </div>
                <div className="containerContent">
                    <NavbarDashboard 
                        avisaPaiSeBotaoSidebarFoiApertado={navbarFilhoAvisaSeBotaoSidebarFoiApertado.bind(this)} 
                        sidebarOpen={values.sidebarOpen}
                    />
                    <p>TESTE</p>
                </div>
            </div>
        </>
    );
}