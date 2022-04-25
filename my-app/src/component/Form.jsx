import React,{ useEffect,useState} from "react";
import "./Style.css";
import {useDispatch,useSelector} from "react-redux"
import {userloginaction} from "../Action/Authaction"

export default function Form({history}) {
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const {userinfo}=useSelector(state=>state.login)
    // console.log(userinfo);
    console.log(email);
    console.log(password);
    const dispatch = useDispatch()

    const logdata=(e)=>{
        
        e.preventDefault()
         dispatch(userloginaction({email,password}))
    //    userinfo&& history.push("/Dashboard")
        }
    useEffect(()=>{
        
          userinfo &&history.push("/Dashboard")
        

    },[userinfo])
  return (
    <div className="conta">

        {/* {JSON.stringify(formik.errors)} */}
      <div
        className="row d-flex align-items-center "
        style={{
          height: "100vh",
        
        background: "linear-gradient(to right, #1f705f, #FFFF00	)",
        

          
        }}
      >
        <div className="col-sm-8 offset-sm-2  " >
          <div className="card-group shadow-lg ">
            <div className="card border-0 " >
              <div className="card-body g1 image1 ">
                <div className="">
                  {/* <img src="https://media.istockphoto.com/photos/leaf-background-picture-id844226534?b=1&k=20&m=844226534&s=170667a&w=0&h=6vewaNAkalbEXZ5EPuKxXMYwhvCUPR5QmykZlv6SA48=" alt="" /> */}
                </div>
                <div></div>
              </div>
            </div>
            <div className="card border-0 ">
              <div className="card-body text-center p-5 flow1">
                <h3>Welcome</h3>
                <p>Log in to your account to continue</p>
                <form action="" onSubmit={logdata}>
                    
                    

                  <input
                   style={{
                    borderRadius: "100px",
                }}
                onChange={e=>(
                    setemail(e.target.value)
    
                    )}
                
                     name="email"
                    type="email"
                    placeholder="Enter Email"

                    className="form-control "
                  />
                  
                    
                  <br />
                  <input
                  style={{
                      borderRadius: "100px",
                  }}
                  onChange={e=>(
                      setpassword(e.target.value)
                        // formik.handleChange
                        )}
                  
                  name="password"
                    type="password"
                    placeholder="Enter Password"
                    className="form-control"
                  />
                  
                  <p className="text-end" style={{textDecoration:"underline",opacity:".75"}}>Forget Your Password</p>
                  <br />
                  <button className="btn btn-info">Log in</button> <br />

                  <span className="text1">Don,t Have an account?  </span>
                  <span className="text">Sign in!</span>
                  <br />

                  <div className="d-flex justify-content-evenly font">
                  <i class="bi bi-facebook"></i>
                  <i class="bi bi-twitter"></i>
                  <i class="bi bi-linkedin"></i>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
