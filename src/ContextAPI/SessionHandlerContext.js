import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut} from 'firebase/auth';
import {app} from './fireBaseConnection/fireBaseInIt';
import { createContext, useEffect, useState } from 'react';
import { ProductData } from '../data';
import { collection, addDoc, query,where,getDocs ,getFirestore} from "firebase/firestore"; 

// Notification Library
import { toast } from 'react-toastify';

const FireBaseContext  = createContext();
// Creating Database instances
const auth = getAuth(app);
const db = getFirestore(app);

function FireBaseProvider(props){
    const [user,setUser] = useState(null);
    const [Products,setProducts] = useState(ProductData);
    const [searchedProducts,setSearchProducts] = useState([]);
    const [inputSearch,setInputSearch] = useState("");
    const [userID,setUserId] = useState(null);

    useEffect(()=>{
        if(userID){
            localStorage.setItem('userId',userID);
        }
    },[userID])

// Database Functions
    // when new Account is create
    async function addNewUserEntryInDatabase(email){
        const collectionRef = collection(db,'User');
        const docID = await addDoc(collectionRef,{
            email:email,
            createdAt: new Date(),
        })
        setUserId(docID);
    }
    // when existent user is logged in
    async function findUserId(email){
        const q = query(collection(db,"User"), where("email","==",email));

        const querySnapShot = await getDocs(q);
        querySnapShot.forEach((doc)=>{
            setUserId(doc.id);
        })
    }
//  check if user is logged in or not
    useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            if(user){
                setUser(user);
            }else{
                setUser(null);
                localStorage.clear();
            }
        })
    },[]);

    // Create new Account of user
    function handleSignUp(email,password){
        createUserWithEmailAndPassword(
            auth,
            email,
            password
        ).then((res)=>{
            toast(`Hello ${email} Your Account Is Created Successfully`);
            addNewUserEntryInDatabase(email);
        }).catch((err)=>{
            toast('Account is not created! Please try again later');
        })
    }

    // login to existing user
    function handleLogIn(email,password){
        signInWithEmailAndPassword(auth,email,password)
        // if logged in the redirect to home 
        .then((res)=>{
            toast(`Hy ${email} ! You Logged In`);
            findUserId(email);
        }).catch((err)=>{
            toast('Wrong Email or Password');
        })
    }

    // Destroy session or SignOut
    const handleDestroySession = ()=>{
        signOut(auth);
        toast('Logged Out Successfully');
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
                searchedProducts,
                user,
                userID,
                handleDestroySession
            }}
        >    
            {props.children}
        </FireBaseContext.Provider>
    </>)
}

export  {FireBaseProvider,FireBaseContext};
