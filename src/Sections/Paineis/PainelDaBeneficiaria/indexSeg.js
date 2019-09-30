import React, { useState } from 'react';
import NavbarDashboard from './../../../Components/Layout/NavbarDashboard';
import SidebarDashboardBeneficiary from './../../../Components/Layout/SidebarDashboardBeneficiary';
import PageMinhaConta from './Pages/MinhaConta';
import PageMeuCadastro from './Pages/MeuCadastro';
import PageDuvidas from './Pages/Duvidas';

export default function BeneficiaryDashboard(props) {
    console.log(props)

    const [values, setValues] = useState({
        sidebarOpen: true,
        pageAtiva: '',
    });
    const navbarFilhoAvisaSeBotaoSidebarFoiApertado = (value) => {
        if(values.sidebarOpen){
            setValues({ ...values, sidebarOpen: false });
        }else{
            setValues({ ...values, sidebarOpen: true });
        }
    }
    const navbarFilhoAvisaQualPaginaEstaAtiva = (value) => {
        setValues({ ...values, pageAtiva: value });
    }
    const renderPageActive = () => {
        switch (values.pageAtiva) {
            case 'Minha Conta':
              return <PageMinhaConta />;
            case 'Meu Cadastro':
                return <PageMeuCadastro />;
            case 'Dúvidas':
              return <PageDuvidas />;
            default:
            return <PageMinhaConta />
          }
    }
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
                    <div className="containerOnlyContent">
                        {renderPageActive()}
                    </div>
                </div>
            </div>
        </>
    );
}