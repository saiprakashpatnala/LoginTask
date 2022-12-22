import{useState} from  'react'

import './index.css'

const Login=()=>{

    const[name,setName]=useState("")
    const[password,setPassword]=useState("")
    const[nameErrorMsg,setNameErrorMsg]=useState(false)
   const[passwordErrorMsg,setPasswordErrorMsg]=useState(false)


    const enterName=(event)=>{
        setName(event.target.value)
    }

    const enterPassword=(event)=>{
        setPassword(event.target.value)
    }


    const submitForm=(event)=>{
        event.preventDefault()
        if(name===""  && password===""){
        setNameErrorMsg(true)
        setPasswordErrorMsg(true)
        }
        else if(name===""){
            setNameErrorMsg(true)
        }
        else if(password===""){
            setPasswordErrorMsg(true)
        }
        else if(name!=="" && password!==""){
            setNameErrorMsg(false)
            setPasswordErrorMsg(false)
        }
    }


    return(
        <div className='parent-container'>
        <form  onSubmit={submitForm}  className="form">
            <h1 className='heading'>Login</h1>
            <div  className='input-container'>
                <label htmlFor='name' className='lebel-element'>Name</label>
                <input id="name" type="text" onChange={enterName}  value={name} />
            </div>
            <div>
                {nameErrorMsg===true?<p>*Please Enter Name</p>:null}
            </div>
            <div className='input-container'>
                <label htmlFor="password" className="password-element">Password</label>
                <input type="password"  onChange={enterPassword}  className='input-element' value={password}/>
            </div>
            <div>
                {passwordErrorMsg===true?<p>*Please Enter Password</p>:null}
            </div>
            <button className='button' type="submit">Login</button>
          
        </form>
        </div>
    )
}

export default Login


