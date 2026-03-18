'use client';

import { useState } from "react";

const Contato = () => {

    const[nome, setNome] = useState("")
    const[email, setEmail] = useState("")
    const[mensagem, setMensagem] = useState("")
    const[envioSucesso, setEnvioSucesso] = useState(false)

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Nome: ",nome);

        setEnvioSucesso(true);
        setNome("");
        setEmail("");
        setMensagem("");
        
    }

    return (
        <div>
            <h1>Contato</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nome" >Nome:</label>
                <input type="text" id="nome" placeholder="Digite o nome" value={nome} onChange={(event) => setNome(event.target.value)}/>
                
                <label htmlFor="email" >Email:</label>
                <input type="email" id="email" placeholder="Digite o email" value={email} onChange={(event) => setEmail(event.target.value)}/>

                <label htmlFor="mensagem" >Mensagem:</label>
                <textarea type="text" id="mensagem" placeholder="Digite a mensagem" value={mensagem} onChange={(event) => setMensagem(event.target.value)}/>

                <button type="submit">Enviar</button>
                {envioSucesso && <p>Mensagem enviada com Sucesso</p>}
                {envioSucesso && setTimeout(() => setEnvioSucesso(false),3000)}
            </form>
        </div>
    );
}

export default Contato;