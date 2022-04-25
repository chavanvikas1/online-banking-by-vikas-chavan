import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { alluseraction, updateaction } from '../Action/Authaction';
import Navbar from '../component/Navbar';


export default function Alluser() {
    const [name, setname] = useState('');
    const [email, setemail] = useState("");
    const [city, setcity] = useState("");
    const [number,setnumber]=useState("")
    const [state,setstate]=useState("")
    const [toggle,settoggle]=useState(false)
    const dispatch=useDispatch()

    const {alldata}=useSelector(state => state.dataall)
    console.warn(alldata);
    
    useEffect(() => {
        dispatch(alluseraction())
    }, [toggle])
    const handledata=(e)=>{

        e.preventDefault()
        const obj={
            name,
            email,
            city,
            number
        }
        
        settoggle(pre=>!pre)

        dispatch(updateaction(state,obj))

        // dispatch(alluseraction(obj))
    }
    const updatehandle=(id)=>{
        setstate(id)
        const updatedata=alldata.find(item=>item._id==id)
        console.log(updatedata);
        setname(updatedata.name)
        setemail(updatedata.email)
        setcity(updatedata.city)
        setnumber(updatedata.number)


        

    }
    




  return (
    <div>
        <Navbar/>

        <div className="container bg-warning shadow-lg mt-5">
            <table class="table">
                <thead>
                    <tr>
                        <th>Sr No</th>
                        <th>Account Number</th>
                        <th>Client Name </th>
                        <th>Mobail No</th>
                        <th>Email</th>

                        <th>City</th>
                        <th>Action</th>
                    </tr>
                </thead>
               {
                     alldata?.map((item,index)=>{
                    return <tbody>
                        <tr key={index._id}>
                            <td>{index+ 1}</td>
                            <td>{item?._id}</td>
                            <td>{item?.name}</td>
                            <td>{item?.number}</td>
                            <td>{item?.email}</td>
                            <td>{item?.city}</td>
                            <td><button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modelId" onClick={()=>updatehandle(item?._id)}>Update</button></td>
                        </tr>
                    </tbody>
                })
               }

            </table>
            
            
            
            {/* <!-- Modal --> */}
            <div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Update Client</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        <form onSubmit={handledata}>
                            <input type="text" className='form-control' value={name} onChange={e=>setname(e.target.value)} placeholder='Enter Your Name'/> <br />

                            <input type="text" className='form-control' value={number} onChange={e=>setnumber(e.target.value)} placeholder='Enter Number'/> <br />
                            <input type="text" className='form-control' value={city} onChange={e=>setcity(e.target.value)} placeholder='Enter Your City'/> <br />
                            <input type="text" className='form-control' value={email} onChange={e=>setemail(e.target.value)} placeholder='Enter Email'/> <br />
                            <button className='btn btn-outline-success form-control' data-bs-dismiss="modal" >update</button>

                        </form> 
                        </div>
                        {/* <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save</button>
                        </div> */}
                    </div>
                </div>
            </div>
            
            
        </div>
    </div>
  )
}
