import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HeaderComponent from "./Components/Header/HeaderComponent";
import HomeComponent from "./Components/Home/HomeComponent";
function App() {

  const Router = createBrowserRouter([
    {
      path:'/', 
      element:<HeaderComponent/>,
      children:[
        {
          index:true,
          element:<HomeComponent/>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={Router}/>
    </div>
  );
}

export default App;
