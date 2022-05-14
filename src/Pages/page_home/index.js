// Hooks do React
import { useState } from 'react';

// Material UI
import './style.css';
import { NavLink } from 'react-router-dom';
import Figure from '../../Images/bgfigure.jpg';
import Grid from '@mui/material/Grid';

// Firebase
import auth from '../../Services/firebase';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function PageHome() {

    // FireBaser Integration
    const provider = new GoogleAuthProvider();

    // Criando usuario e seu estado para ter acesso aos dados do user
    const [usuario, setUsuario] = useState({});

    // Metodo de Login do Usuario com Google
    function handleLogin(){
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                console.log("SUCESSO: " + result);
                // Salvando e mapeando os dados do login no estado do objeto Usuario
                setUsuario({
                    id: result.user.uid,
                    name: result.user.displayName,
                    email: result.user.email,
                    phone: result.user.phoneNumber,
                });
                                    
            }).catch((error) => {
                // Handle Errors here.
                console.log(error);
                alert("Failed Login ... Try again with a Google Account!" + error);
            });
    }
    
    return (
      <div>
        <Grid 
            container 
            justifyContent="center"
            alignItems="center"
            spacing={1} 
        >
            <Grid item xs={6} md={6} lg={6}>
                <div className="bg-purple">
                    <img src={Figure} alt="Card Icon de User" className="img-resize"></img>  
                    <h1>Toda pergunta tem uma resposta?</h1>
                    <br></br>
                    <p>Aprenda e compartilhe conhecimento com outras pessoas!</p>
                    <p>Plataforma cria um forum digital para compartilhar dúvidas e conhecimentos com a comunidade...</p>
                    <p>Saiba mais sobre o projeto criado por @MateusLeite Pedrosa - Github/Linkedin...</p>                    
                </div>                
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
                <div className="bg-white">
                    <h1>LetMeAsk</h1>       
                    <hr></hr>            
                    <h3>Cadastre-se ou realize Login para acessar todo os conteúdos!</h3>
                    <h3>{usuario.name}</h3>
                    <br></br>
                    <form>                        
                        <label>E-mail:</label>
                        <input type="text" id="email"></input>
                        <br></br>
                        <label>Senha:</label>
                        <input type="text" id="email"></input>                       
                    </form>
                    <br></br>
                    <button onClick={handleLogin}>Google Login</button>
                    <br></br>
                    <br></br>
                    <button>
                        <NavLink to="/cadastro" className="link">Cadastrar</NavLink>
                    </button>
                </div>                
            </Grid>            
        </Grid>
      </div>
    );
}
  
export default PageHome;
