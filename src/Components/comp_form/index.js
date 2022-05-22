// React Hooks
import { useState } from 'react';

import './style.css';

// Componente Formulario de pergunta do usuario
function Formulario(){
    // Criando variaveis de estados para os inputs
    // De forma a poderem ser manipulados posteriormente
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [question, setQuestion] = useState("");
    const [share, setShare] = useState(false);

    // Métodos de tratar os inputs do formulario
    function handleInputEmail(event){
        setEmail(event.target.value);
        console.log("Email do form: " + email);
    }

    function handleInputDate(event){
        setDate(event.target.value);
        console.log("Date do form: " + date);
    }

    function handleInputQuestion(event){
        setQuestion(event.target.value);
        console.log("Question do form: " + question);
    }

    function handleInputShare(event){
        setShare(event.target.value);
        console.log("Share do form: " + share);
    }

    // Metodo de Submit do formulario
    function handleSubmit(){

        // Armazenando dados no localstorage
        localStorage.setItem("form-email", email);
        localStorage.setItem("form-date", date);
        localStorage.setItem("form-question", question);
        localStorage.setItem("form-share", share);

        // Verificação
        const emailLogin = localStorage.getItem("email");
        const emailForm = localStorage.getItem("form-email");
        if(emailLogin === emailForm){
            alert("Pergunta submetida com sucesso!");
        }else{
            alert("Email inserido não corresponde ao cadastrado!")
        }

    }
    
    return(
        <form className="ask-form">
            <h2>Formulário</h2>
            <hr></hr>
            <label>Confirme seu e-mail:</label>
            <br></br>
            <input 
                type="email" 
                id="email" 
                className="main-input" 
                placeholder="nome@email.com"
                onChange={handleInputEmail}
            >
            </input>
            <br></br>
            <br></br>
            <label>Insita a data atual:</label>
            <br></br>
            <input type="date" id="date" className="main-input" onChange={handleInputDate}></input>
            <br></br>
            <br></br>
            <label>Digite sua pergunta:</label>
            <br></br>
            <input type="text" id="question" className="ask-input" onChange={handleInputQuestion}></input>
            <br></br>
            <br></br>
            <label>Compartilhar com a comunidade: </label>
            <input type="checkbox" id="share" onChange={handleInputShare}></input>
            <br></br>
            <br></br>
            <input type="button" id="form-button" value="Submit" className="main-input" onClick={handleSubmit}></input>
            <br></br>
            <div>
                <br></br>
            </div>
        </form>
    );
}

export default Formulario;