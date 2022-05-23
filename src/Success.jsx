import React from 'react';
import{ Link} from 'react-router-dom'
import Button from '@mui/material/Button';

const Timer =()=>{
  
return <div>

<h1>Payment successful</h1>
<Link to='/Theatre'><h3>Book another seat</h3>
<Button variant="contained" >click here</Button></Link>

</div>
}
export default Timer;