import React,{useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { singleaction } from '../Action/Authaction';
import { allpaymentaction } from '../Action/paymentaction';
import Navbar from '../component/Navbar';

export default function Profile() {
  const dispatch=useDispatch()
    const [state,setstate]=useState("")
    // const {id}=useParams()

    
    const {single}=useSelector(state => state.singledata)
    const {allpayment}=useSelector(state=>state.allpayment)
    console.log(allpayment);
    // console.log(single);
    // console.log(paymentsingle);
    // setstate(alldata)
    useEffect(() => {
      const  local=  JSON.parse(localStorage.getItem('userdata'))
      dispatch(allpaymentaction())
      console.log(local.id);
      dispatch(singleaction(local.id))
    }, [])
    
    
    


  return (
    <div className='containe ' style={{
      background:"linear-gradient(to right, #00dbde, #fc00ff)",
      height:"100vh",

      width:"100%",
      boxSizing:"border-box",

    }}>
      <Navbar/>
 
 
   <div className="row mt-5">
     <div className="col-sm-6 offset-sm-2">
        <div className="card alert alert-danger shadow-lg">
          <div className="card-header alert alert-warning">Profile</div>
       <div className="card-body">
          
            <h4>Name   : {single?.name}</h4>
            <h4>email  : {single?.email}</h4>
            <h4>Mob.No : {single?.number}</h4>
            <h4>City   : {single?.city}</h4>
            <h4>Account No: {single?._id}</h4>
            
          
       </div>
       </div>
     </div>
   </div>
   
   <table class="table bg-warning container shadow-lg">
     <thead>
       <tr>
         <th>Sr no</th>
         <th>Account No</th>
         <th>amount</th>
       </tr>
     </thead>
     {
        allpayment?.map((item,index)=>{
          return(
            <tbody>
              <tr>
                <td>{index+1}</td>
                <td>{item.reciver}</td>
                <td> &#8377; {item.Amount}</td>
              </tr>
            </tbody>
          )
        })
     }
   </table>
   

    </div>
  )
}
