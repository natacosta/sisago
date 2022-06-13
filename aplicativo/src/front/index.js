import React from "react";
import "./stylee.css"


                        
function Front() {

    return (
       
        <div>
        <div className="background">
            <div className="filter">

                <div className="containerText">

                    <div className="logo"></div>
                    <h1 className="textSlogan"> Tecnologia com soluções para o agronegócio </h1>

                    <p className="textDescriptive">
                        Facilitamos a adequação ás legislações 
                        referentes a rastreabilidade vegetal,
                        garantindo a segurança dos alimentos.
                    </p>

                    <div className="social">

                        <div className="faceboock"></div>
                        <div className="instagran"></div>
                        <div className="whatsapp"></div>

                    </div>

                </div>


                <div className="formContainer">
                    <div className="form">

                        <h2 className="formTitleAccess"> Acesse sua conta</h2>

                        <input type="text" className="input1" placeholder="Empresa"></input>
                        <input type="text" className="input2" placeholder="Usuário"></input>
                        <input type="password" className="input3" placeholder="Senha"></input>
                        <div className="imgSenha"></div>

                        <a href="#" className="formForget"> Esqueceu sua senha ? </a>

                        <button className="btn">Login</button>

                        <h3 className="formSolicitaion"> Não possui uma conta ?</h3>
                        <p className="footerForm"> Solicitar cadastro</p>

                    </div>
                </div>
            </div>
        </div>
    </div>
    )

    

}





export default Front