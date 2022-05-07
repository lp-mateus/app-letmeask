import './style.css';
import Grid from '@mui/material/Grid';

function Header() {
    
    return (
        <div>
            <Grid 
                container 
                justifyContent="center"
                alignItems="center"
                spacing={1} 
            >
                <Grid item xs={12} md={12} lg={12}>
                    <div className="bg-header">
            
                        <h2>Let Me Ask</h2>
                                        
                    </div>                
                </Grid>
            </Grid>
        </div>
        );
}
  
  export default Header;
  