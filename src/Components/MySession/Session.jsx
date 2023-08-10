import { createRef, useState } from 'react';
import style from './sessionStyle.module.css';
import { useContext } from 'react';
import {FireBaseContext} from '../../ContextAPI/FireBaseUtilityProvider';
import { useNavigate } from 'react-router-dom';


function CreateSession(){
    const [formType,setFormType] = useState('Login');
    const {handleSignUp,handleLogIn,userEmail} = useContext(FireBaseContext);
    const navigate = useNavigate();

    let username = createRef();
    let password = createRef();
    function handleSessionForm(type){
        setFormType(type);
        return;
    }

    // Handle Form on submit
    const handleFormSubmit = (e)=>{
        e.preventDefault();
        if(formType==='Login'){
            handleLogIn(username.current.value,password.current.value)
        }else{
            handleSignUp(username.current.value,password.current.value);
        }
        username.current.value="";
        password.current.value="";
    }
    return(<>

    {/* if user is not logged in only then show login page else redirect to home page */}
        {(userEmail==="")?
            <div className={style.sessionForm}>
            <h2 className={style.sessionHeading}>{formType}</h2><br/>
            <form onSubmit={handleFormSubmit}>
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
        :
            navigate('/')
        }
        
    </>)
}
// 

export default CreateSession;