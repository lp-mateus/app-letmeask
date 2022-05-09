//import './style.css';
import Icon from '../../Images/askicon.jpg';
import Header from '../../Components/comp_header';
import Grid from '@mui/material/Grid';

function PageCadastro() {
    
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
                        <h1>Realize seu cadastro...</h1>
                        <br></br>
                        <form>                        
                            <label>Nome: </label>
                            <input type="text" id="cad-name"></input>
                            <br></br>    
                            <br></br>  
                            <label>Email: </label>
                            <input type="text" id="cad-name"></input>
                            <br></br>   
                            <br></br>  
                            <label>Idade: </label>
                            <input type="text" id="cad-name"></input>
                            <br></br>     
                            <br></br>  
                            <label>Senha: </label>
                            <input type="text" id="cad-name"></input>
                            <br></br>              
                        </form>
                        <br></br>
                        <button>Realizar meu cadastro</button>      
                        <br></br> 
                        <div><br></br></div>
                    </div>                
                </Grid>
            </Grid>
        </div>
        );
}

export default PageCadastro;
  