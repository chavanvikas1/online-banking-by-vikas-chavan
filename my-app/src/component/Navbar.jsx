import React, { useEffect,useState } from 'react'
import {Link,useHistory} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { userlogoutaction } from '../Action/Authaction'
export default function Navbar() {
    const history=useHistory()
    const [toggle,settoggle]=useState(false)
    const {userinfo}=useSelector(state=>state.login)
    const dispatch=useDispatch()
    const handlelogout=()=>{
        dispatch(userlogoutaction())
        // settoggle(pre=>!pre)
        // !userinfo&&history.push("/")
        history.push("/")
    }
    // useEffect(()=>{
    // },[toggle])
    

  return (
    <div>
        
        <nav class="navbar navbar-expand navbar-light bg-info  ">
              <div class="container">
                <a class="navbar-brand" href="#">Online Bank</a>
                <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#vikas" 
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="vikas">
                    <ul class="navbar-nav ms-auto ">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/Dashboard">Home </Link>
                        </li>
                       
                       
                        <li class="nav-item">
                        {
                                    userinfo
                                        ? <div className="nav-link " to="/">
                                            
                                                <button className="btn btn-sm btn-primary" type="button" >
                                                    {userinfo?.name}
                                                </button>
                                             </div>
                                        : <Link className="nav-link text-white" to="/">Login</Link>

                                }
                        </li>
                                 <li class="nav-item active">
                        <button class="btn btn-sm btn-primary mt-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle</button>


                    
                        </li>
                        
                            
                            
                        
                       
                    </ul>
                    
                </div>
          </div>
        </nav>
       

<div class="offcanvas offcanvas-end bg-dark" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasRightLabel">All Files</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  <ul class="navbar-nav ms-auto ">
                        <li class="nav-item active">
                            <Link class="nav-link btn btn-info form-control text-dark"  to="/Dashboard">Home </Link>
                        </li> <br />
                        
                        <li class="nav-item active">
                            <Link class="nav-link btn btn-info form-control text-dark" to="/transfer">Transfer Money </Link>
                        </li> <br />
                        <li class="nav-item">
                            <Link class="nav-link btn btn-info form-control text-dark" to="/Profile">Profile</Link>
                        </li> <br />


                       {
                           userinfo.isAdmin&& <li class="nav-item">
                           <Link class="nav-link btn btn-info form-control text-dark" to={"/Add-user"}>Add User</Link> <br />
                           <Link class="nav-link btn btn-info form-control text-dark" to={"/alldata"}>Clint histroy</Link> <br />
                       </li>
                       }
                        
                        <li class="nav-item">
                        <li><button className='btn btn-danger form-control text-dark' onClick={()=>handlelogout()}> LogOut</button></li>
                        </li>
                        
                            
                            
                        
                       
                    </ul>
                   
    
  </div>
</div>
        
    </div>
  )
}
