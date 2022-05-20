import React,{useEffect,useState} from "react";
import "./style.css";
import {put,add} from './seatSlice';
import {useSelector,useDispatch}from 'react-redux'
import Timerj from'./Timer';
import{ Link} from 'react-router-dom'
// import{add} from './seatSlice'


export default function Show() {
  const[match,setMatch]=useState(0)
  const dispatch=useDispatch();
  const seat=useSelector((state)=>state.sea.data)
  const[out,setOut]=useState([])
const Payment=(all)=>{
  // dispatch(put(all))
dispatch(put(all.seatNo))
setMatch(all.seatNo);
// if(match!==all.seatNo){out.push(seat)}
}
console.log(match,'ma')
console.log(seat,'tt')


useEffect(()=>{
  

},[])

 
  const co=useSelector((state)=>state.sea.seat)
  
  return (
    <div>
       <Timerj/>
     
{seat.map((all,i)=>{return <li key={i} style={{margin:'30%',display:'inline'}}><h1>{all.seatNo}</h1>
<h1>{all.img}</h1> 
<h1>{all.Price}</h1>
<Link to='/Success'><button onClick={()=>Payment(all)} >Proced to paymnt</button></Link></li>
}

)}<br/>



    </div>
  );
}
