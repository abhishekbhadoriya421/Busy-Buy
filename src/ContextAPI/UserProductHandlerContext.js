import { createContext,useContext, useEffect, useState} from "react";
import {FireBaseContext} from './SessionHandlerContext';
import {app} from './fireBaseConnection/fireBaseInIt';
// Notification Library
import { toast } from 'react-toastify';

// Firebase import
import { collection, addDoc,onSnapshot, doc, deleteDoc, getFirestore, getDocs} from "firebase/firestore"; 

const db = getFirestore(app);

const ProductHandler = createContext();


function ProductHandlerProvider({children}){
    const {user} = useContext(FireBaseContext);
    const [cartProducts,setCartProducts] = useState([]);
    const [totalPriceOfCartProduct,setTotalPriceOfCartProduct] = useState(0);
    const [userId,setUserId] = useState(null);
    const [myOrder,setMyOrder] = useState([]);

    // My_Cart 
    // Calculate the total when cartProduct is updated
    useEffect(()=>{
        let total = 0;
        cartProducts.forEach(ele=>{
            total+=ele.price;
        })
        setTotalPriceOfCartProduct(total);
    },[cartProducts])

    // Handle Add Product To Cart
    const handleProductInCart = async(item)=>{
        if(user){
            // create new collection (product) inside user collection
            await addDoc(collection(db,`User/${userId}/myCart`),{
                url:item.url,
                name:item.name,
                price: item.price,
                quantity :1
            });
            toast('Product is added in cart');
        }else{
            toast('please Login! ');
            return;
        }  
    }

    // Fetch myCart Product of user
    useEffect(()=>{
        if(user){
            const Id = localStorage.getItem('userId');
            setUserId(Id);
            const unsubscribe = onSnapshot(collection(db,`User/${userId}/myCart`),(snapShot)=>{
                const data = snapShot.docs.map((doc)=>{
                    return {
                        id:doc.id,
                        ...doc.data()
                    }
                })
                setCartProducts((prevCartProducts) => [...data]); 
            }) 

            return () => {
                // Clean up the listener when the component unmounts or when user changes
                unsubscribe();
            };

        }
    },[user,userId]);


    // Remove product from cart  
    async function handleRemoveFromCart(productId){
        if(user){
            await deleteDoc(doc(db,`User/${userId}/myCart/${productId}`));
        }
    }


    // My_Order
        // add product to myOrder
        async function addDataInTable(itemData){
           console.log(itemData);
           if(user){
            // create new collection (product) inside user collection
            await addDoc(collection(db,`User/${userId}/myOrder`),{
                url:itemData.url,
                name:itemData.name,
                price: itemData.price,
                quantity :itemData.quantity
            });
            toast('Order is placed');
        }else{
            toast('please Login! ');
            return;
        } 
        }

        const addProductToMyCart = async() => {
            const colRef = collection(db,`User/${userId}/myCart`)
            const data = await getDocs(colRef);
            // first find and delete the data from mycart and add the data in myorder
            data.docs.map(async (document)=>{
                // setMyOrder(document.data());
                addDataInTable(document.data());
                await deleteDoc(doc(colRef,document.id));
            });  
            
        };

    return(
        <ProductHandler.Provider value={
                {
                    handleProductInCart,
                    cartProducts,
                    handleRemoveFromCart,
                    totalPriceOfCartProduct,
                    addProductToMyCart
                }
            }>
            {children}
        </ProductHandler.Provider>
    )
    
}

export {ProductHandler,ProductHandlerProvider};