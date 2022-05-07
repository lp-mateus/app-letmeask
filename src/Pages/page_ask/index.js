import './style.css';
import Icon from '../../Images/askicon.jpg';
import Header from '../../Components/comp_header';
import Grid from '@mui/material/Grid';

function PageAsk() {
    
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
                        <br></br>
                        <img src={Icon} alt="Card Icon de User" className="img-resize"></img>
                        <h1>Faça sua pergunta a comunidade...</h1>
                        <br></br>
                        <form>                        
                            <label>Qual a sua pergunta?</label>
                            <br></br>
                            <br></br>
                            <input type="text" id="question"></input>
                            <br></br>                      
                        </form>
                        <br></br>
                        <button>Perguntar</button>       
                    </div>                
                </Grid>
            </Grid>
        </div>
        );
}
  
  export default PageAsk;
  