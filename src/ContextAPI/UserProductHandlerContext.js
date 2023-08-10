import { createContext,useContext, useState } from "react";
import {FireBaseContext} from './SessionHandlerContext';
import {app} from './fireBaseConnection/fireBaseInIt';
// Notification Library
import { toast } from 'react-toastify';

// Firebase import
import { collection, addDoc, getFirestore} from "firebase/firestore"; 

const db = getFirestore(app);

const ProductHandler = createContext();


function ProductHandlerProvider({children}){
    const {user} = useContext(FireBaseContext);
    
    // Handle Add Product To Cart
    const handleProductInCart = async(item)=>{
        if(user){
            const userId = localStorage.getItem('userId');

            // create new collection (product) inside user collection
            await addDoc(collection(db,`User/${userId}/myCart`),{
                url:item.url,
                name:item.name,
                price: item.price,
            });
            toast('Product is added in cart');
        }else{
            toast('please Login! ');
            return;
        }  
    }
    return(
        <ProductHandler.Provider value={
            {handleProductInCart}
            }>
            {children}
        </ProductHandler.Provider>
    )
    
}

export {ProductHandler,ProductHandlerProvider};