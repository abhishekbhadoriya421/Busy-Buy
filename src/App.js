import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HeaderComponent from "./Components/Header/HeaderComponent";
import HomeComponent from "./Components/Home/HomeComponent";
import MyCart from "./Components/MyCart/MyCart";
import CreateSession from "./Components/MySession/Session";
import MyOrder from "./Components/MyOrder/MyOrder";
import {FireBaseProvider} from './ContextAPI/FireBaseUtilityProvider';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const Router = createBrowserRouter([
    {
      path:'/', 
      element:<HeaderComponent/>,
      children:[
        {
          index:true,
          element:<HomeComponent/>
        },
        {
          path:'myOrder',
          element:<MyOrder/>
        }
        ,
        {
          path:'myCart',
          element:<MyCart/>
        },
        {
          path:'session',
          element:<CreateSession/>
        }
      ]
    }
  ])


  return (
    <div className="App">
      <FireBaseProvider>
        <RouterProvider router={Router}/>
      </FireBaseProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
