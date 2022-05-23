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
      <Grid container spacing={{ xs: 1, md:1  }} columns={{ xs: 2, sm: 2, md: 2 }}>
        {Array.from(Array(1)).map((_, index) => (
          <Grid item xs={5} sm={5} md={5} key={index}>
            {Movie.map((dd)=>{
 return <Item style={{width:'30%',display:'inline-block' }}>
   <h1 style={{color:'brown'}}>{dd.name}</h1>
 <img style={{width:'50%'}} src={dd.img} alt=""/>
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
