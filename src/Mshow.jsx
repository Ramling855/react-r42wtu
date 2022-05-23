import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Movie from './Movie'
import{ Link} from 'react-router-dom'
import Button from '@mui/material/Button';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(1)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            {Movie.map((dd)=>{
 return <Item>
   <h1 style={{color:'brown'}}>{dd.name}</h1>
 <img src={dd.img} alt=""/>
 {/* <Link to='/Theatre'><h3>Book your seat</h3> */}
{/* <Button variant="contained" >click here</Button> */}
{/* </Link> */}
<Link to='/Theatre'><h3>Book your seat</h3>
<Button variant="contained" >click here</Button>
</Link>


 </Item>
 } )}
           
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
