import React,{useState} from 'react'
import Navbar from '../component/Navbar'
import {useDispatch ,useSelector} from 'react-redux'
import {paymentaction} from '../Action/paymentaction'

export default function Transfermoney() {
const [reciver,setreciver]=useState("")
const [Amount,setAmount]=useState("")
const dispatch=useDispatch()
const {paymentdata}=useSelector(state=>state.payment)
const {userinfo}=useSelector(state=>state.login)
console.log(paymentdata);

const handledata=async(e)=>{
    e.preventDefault()
    e.target.reset()
    // console.log(Account,Amount);
    dispatch(paymentaction({userId:userinfo.id, reciver,Amount}))
}
  return (
    <div >

        <div className="containe">
          <Navbar/>
          <div className="row mt-5">
            <div className="col-sm-6 offset-sm-3">
              <div className="card shadow-lg">
                  <div className="card-header bg-info ">
                  <h5 className="card-title">Transfer Money</h5>
                  </div>
                <div className="card-body">
                  <form action="" onSubmit={handledata}>
                  <input type="text" className="form-control" onChange={e=>setreciver(e.target.value)} placeholder='Account Number' /> <br />
                  <input type="text" className="form-control" onChange={e=>setAmount(e.target.value)} placeholder='Put Money'/> <br />
                  <button className='btn btn-outline-warning w-100'>Send Money</button>
                  </form>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
