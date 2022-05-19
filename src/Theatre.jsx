import {useState} from 'react';
import * as React from 'react';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {useSelector,useDispatch}from 'react-redux'
import{add} from './seatSlice'
import seatDetail from './SeatDetail'
import {useNavigate} from 'react-router-dom'
import { pureFinalPropsSelectorFactory } from 'react-redux/es/connect/selectorFactory';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function FormRow() {
  const colorchange=useSelector((state)=>state.sea.All)
const [col,setCol]=useState([colorchange]);
console.log(colorchange)
  const dispatch=useDispatch();
  
  const navigate=useNavigate()
const detail=(data)=>{
  
dispatch(add(data))
navigate('/show')
} 
const color=(ele)=>{

// setCol('green')
  
}

  return (
    <React.Fragment>
     <Grid 
      onClick={()=>color()} item xs={4}
       >
      {seatDetail.map((ele,i)=>{
      const colors=col.includes(ele.seatNo)?'green':'red';

       return <div>
      
        <Item key={i} style={{backgroundColor:colors}}
         onClick={()=>detail(ele)}>{ele.img}</Item>
      
      
      </div>})}
      </Grid>
    </React.Fragment>
  );
}

export default function NestedGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
       
      </Grid>
    </Box>
  );
}