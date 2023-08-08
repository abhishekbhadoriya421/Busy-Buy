import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth';
import {app} from './fireBaseConnection/fireBaseInIt';
import { createContext, useEffect, useState } from 'react';
import { ProductData } from '../data';

// Notification Library
import { toast } from 'react-toastify';


const FireBaseContext  = createContext();
// Creating Auth instance 
const auth = getAuth(app);


function FireBaseProvider(props){
    const [userEmail,setUserEmail] = useState("");
    const [Products,setProducts] = useState(ProductData);
    const [searchedProducts,setSearchProducts] = useState([]);
    const [inputSearch,setInputSearch] = useState("");

    // If User Is SuccessFully Authenticated then save user detail in local storage
    useEffect(()=>{
        if(userEmail){
            localStorage.setItem('email',userEmail);
        }
    },[userEmail]);

    // login to exist user
    function handleLogIn(email,password){
        console.log(email,password);
    }

    // Create new Account of user
    function handleSignUp(email,password){
        createUserWithEmailAndPassword(
            auth,
            email,
            password
        ).then((res)=>{
            toast(`Hello ${email} Your Account Is Created Successfully`);
            setUserEmail(email);
        }).catch((err)=>{
            toast('Account is not created! Please try again later');
        })
    }

    // in handle search function 
    useEffect(()=>{
        if(inputSearch===""){
            setSearchProducts([]);
            return;
        }else{
            let filteredProduct = Products.filter((ele)=>{
                return ele.name.toLocaleLowerCase().includes(inputSearch.toLocaleLowerCase());
            })
            if(filteredProduct.length===0){ // it means product not available
                setSearchProducts(false); // false indicate that search product not found
                return;
            }
            setSearchProducts(filteredProduct);
        }
    },[inputSearch,Products])
    
    return(<>
        <FireBaseContext.Provider 
        value={{
                handleLogIn,
                handleSignUp,
                Products,
                setProducts,
                setInputSearch,
                inputSearch,
                searchedProducts
            }}
        >    
            {props.children}
        </FireBaseContext.Provider>
    </>)
}

export  {FireBaseProvider,FireBaseContext};
