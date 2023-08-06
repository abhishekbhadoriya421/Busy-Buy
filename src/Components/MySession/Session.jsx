import { createRef, useState } from 'react';
import style from './sessionStyle.module.css';
function CreateSession(){
    const [formType,setFormType] = useState('Login');
    let username = createRef();
    let password = createRef();
    let name = createRef();
    function handleSessionForm(type){
        setFormType(type);
        return;
    }

    // login to exist user
    function handleLogIn(username,password){
        console.log( username,password)
    }

    // Create new Account of user
    function handleSignUp(email,password,name){
        console.log(email,password,name);
    }

    // Handle Form on submit
    const handleFormSubmit = (e)=>{
        e.preventDefault();
        if(formType==='Login'){
            handleLogIn(username.current.value,password.current.value);
        }else{
            handleSignUp(username.current.value,password.current.value,name.current.value);
            name.current.value="";
        }
        username.current.value="";
        password.current.value="";
        
    }
    return(<>
        <div className={style.sessionForm}>
            <h2 className={style.sessionHeading}>{formType}</h2><br/>
            <form onSubmit={handleFormSubmit}>
                {(formType==='SignUp')?
                    <div>
                        <input type='Name' ref={name} className={style.sessionInput} placeholder='Enter Name' required/>
                    </div>
                :
                    false  
                }
                <div>
                    <input type='email' ref={username} className={style.sessionInput} placeholder='Enter Username' required/>
                </div>
                <div>
                    <input type="password" ref={password} className={style.sessionInput} placeholder="Password" required/>
                </div>
                <button className={style.sessionBtn}>{formType}</button>
            </form>
            {/* Go To Login Or Sign Page Directly */}
            {(formType==='Login')? 
                <p style={{color:'black'}}>
                    <span style={{color:'#020ac2', cursor:'pointer'}}
                        onClick={()=>handleSessionForm('SignUp')}>
                            <b>Click-here </b>
                    </span>
                    To Create new account
                </p>
            :
                <p style={{color:'black'}}>
                    <span style={{color:'#020ac2', cursor:'pointer'}}
                        onClick={()=>handleSessionForm('Login')}>
                            <b>Click-here </b>
                    </span>
                    To LogIn
                </p>
            }
            
        </div>
    </>)
}

export default CreateSession;