import './style.css';
import Icon from '../../Images/askicon.jpg';
import Header from '../../Components/comp_header';
import Grid from '@mui/material/Grid';

function PageAsk() {

    // Variavel local Usuario
    const Usuario = {};

    // Recuperando dados do local storage
    Usuario.id = localStorage.getItem("id");
    Usuario.name = localStorage.getItem("name");
    Usuario.email = localStorage.getItem("email");
    Usuario.phone = localStorage.getItem("phone");
    
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
                        <h1>Olá, {Usuario.name}! Faça sua pergunta a comunidade...</h1>
                        <br></br>
                        <div>
                            <h2>Informações do usuário</h2>
                            <hr></hr>                            
                            <h3>Nome: {Usuario.name}</h3>
                            <h3>E-mail: {Usuario.email}</h3>
                            <h3>Contato: {Usuario.phone}</h3>                            
                        </div>
                        <br></br>
                        <form>                        
                            <label>Qual a sua pergunta?</label>
                            <br></br>
                            <input type="text" id="question" className="form-question"></input>
                            <br></br>                      
                        </form>
                        <br></br>
                        <button>Perguntar</button>      
                        <br></br> 
                        <div><br></br></div>
                    </div>                
                </Grid>
            </Grid>
        </div>
        );
}
  
  export default PageAsk;
  