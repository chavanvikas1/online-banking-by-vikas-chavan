import React,{useState} from 'react'
import Navbar from '../component/Navbar'
import {useDispatch ,useSelector} from 'react-redux'
import {adduseraction } from '../Action/Authaction'

export default function Adduser() {
    const [name,setname]=useState('')
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const [number,setnumber]=useState("")
    
    const [state,setstate]=useState("")
    const [city,setcity]=useState("")
    const [image,setimage]=useState("")
    const [money,setmoney]=useState(5000)
    const dispatch=useDispatch()
    
    const obj={
        name,
        email,
        password,
        number,
        state,
        city,
        image,
        money
    }



    const handledata=async(e)=>{
        e.preventDefault()
        e.target.reset()
        // console.log(obj);

        // dispatch(userloginaction(obj))
        // const fd=new FormData()
        // fd.append('name',name)
        // fd.append('email',email)
        // fd.append('password',password)
        // fd.append('number',number)
        // fd.append('state',state)
        // fd.append('city',city)
        // fd.append('image',image)

        // const config={
        //     headers:{
        //         'content-type':'multipart/form-data'
        //     }
        // }
        
        
        dispatch(adduseraction(obj))


    }
  return (
    <div className='bg-warning'>
        <Navbar/>
        <div className='bg-warning mt-5'>
        <div className="row  ">
            <div className="col-sm-6 offset-sm-3 ">
                <div className="card shadow-lg">
                    <div className="card-header bg-info">Add user</div>
                    <div className="card-body">
                        <form onSubmit={handledata}>
                            <input type="text" className='form-control' onChange={e=>setname(e.target.value)} placeholder='Enter Your Name'/> <br />

                            <input type="text" className='form-control' onChange={e=>setnumber(e.target.value)} placeholder='Enter Number'/> <br />
                            <input type="text" className='form-control' onChange={e=>setcity(e.target.value)} placeholder='Enter Your City'/> <br />
                            <input type="text" className='form-control' onChange={e=>setstate(e.target.value)} placeholder='Enter Your State'/> <br />
                            <input type="text" className='form-control' onChange={e=>setemail(e.target.value)} placeholder='Enter Email'/> <br />
                            <input type="text" className='form-control' onChange={e=>setpassword(e.target.value)} placeholder='Enter password'/> <br />
                            <input type="file" className='form-control' onChange={e=>setimage(e.target.files[0])} placeholder='Enter password'/> <br />
                            <input type="text" className='form-control' onChange={e=>setmoney(e.target.value)}   placeholder='Enter amount'/> <br />
                            <button className='btn btn-outline-success form-control'>Submit</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
