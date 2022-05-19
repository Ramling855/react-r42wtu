import React,{useEffect} from "react";
import "./style.css";
import{pay} from './seatSlice';
import {useSelector,useDispatch}from 'react-redux'
import Timerj from'./Timer';
import{ Link} from 'react-router-dom'
// import{add} from './seatSlice'


export default function Show() {
  const dispatch=useDispatch();

useEffect(()=>{


})
const Payment=(all)=>{
 dispatch(pay(all.seatNo))

}


  const seat=useSelector((state)=>state.sea.data)
  console.log(seat)
// console.log(datta.data)
  return (
    <div>
       <Timerj/>
     
{seat.map((all)=>{
return <li style={{margin:'30%'}}><h1>{all.seatNo}</h1>
<h1>{all.img}</h1> 
<h1>{all.Price}</h1>
<Link to='/Success'><button onClick={()=>Payment(all)} >Proced to paymnt</button></Link></li>
})}<br/>



    </div>
  );
}
