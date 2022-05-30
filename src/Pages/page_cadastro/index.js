// React Hooks
import { useState } from 'react';

//import './style.css';
import Icon from '../../Images/askicon.jpg';
import Header from '../../Components/comp_header';
import Grid from '@mui/material/Grid';

// Services Import
import { consumirApiGithub } from '../../Services/github';

function PageCadastro() {

    // Criando variaveis de estados para os inputs
    const [userGithub, setuserGithub] = useState("");

    // Método de alteração do estado do input
    function handleInputGithub(event) {
        setuserGithub(event.target.value);
        console.log(userGithub);
    }

    // Método chamada de service api github
    function handleGithub() {        
        // Método da apiGithub
        consumirApiGithub(userGithub);
        alert("Cadastro realizado com sucesso!");
    }

    return (
        <div>
            <Header />
            <Grid 
                container 
                justifyContent="center"
                alignItems="center"
                spacing={1} 
            >
                <Grid item xs={12} md={12} lg={12} align="center">
                    <div className="main-question">
                        <img src={Icon} alt="Card Icon de User" className="img-resize"></img>
                        <h1>Realize seu cadastro com Github...</h1>
                        <br></br>
                        <form>                        
                            <label>Usuario no github: </label>
                            <input 
                                type="text" 
                                id="cad-name" 
                                placeholder="nome@email.com"
                                onChange={handleInputGithub}
                            ></input>
                            <br></br>                  
                        </form>
                        <br></br>
                        <button onClick={handleGithub}>Realizar meu cadastro</button>      
                        <br></br> 
                        <div><br></br></div>
                    </div>                
                </Grid>
            </Grid>
        </div>
        );
}

export default PageCadastro;
  