import React, { useEffect } from 'react'
import Navbar from './Navbar'
import {useSelector,useDispatch} from 'react-redux'
export default function Dashboard({history}) {
const {userinfo}=useSelector(state=>state.login)

useEffect(()=>{
    // !userinfo&&history.push("/")
},[])

  return (
    <div>
        <Navbar/>

        <div className="">
            <div>     

            <img style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                // marginBottom: '-20px'

                
            }} src={"https://thumbs.dreamstime.com/z/online-internet-banking-mobile-app-concept-vector-illustration-phone-hands-businessman-engaged-143630817.jpg"} alt="" />
            
           <div style={{
                position: 'absolute',
                top: '40%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'black',
                fontSize: '50px',
                fontWeight: 'bold',
                textAlign: 'center'

           }}>
           {/* <h2 className='text-primary'>Banking Solution</h2>
           <p className='fs-4 text-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quae animi, suscipit modi dolorum ea nihil quasi harum omnis? Alias reprehenderit beatae asperiores consequuntur optio.</p> */}
           </div>
           
            </div>

        </div>
    

    </div>
  )
}
