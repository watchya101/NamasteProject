
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contacts";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";



  const AppLayoutComponent = () => {
                
          return(<div className="app">
                 <Header/>
                 <Body/>
                
                </div>
                );
        };
       
        const appRouter = createBrowserRouter([
                {
                        path: "/",
                        element: <AppLayoutComponent/>,
                        errorElement: <Error/>
                },
                {
                        path: "/About",
                        element: <About/>,
                },
                {
                        path: "/Contact",
                        element: <Contact/>,
                },
        ]);
       
        

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
 