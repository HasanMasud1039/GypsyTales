import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Login from "../Login_Registration/Login";
import Registration from "../Login_Registration/Registration";
import About from "../Pages/About";
import DestinationDetails from "../Pages/DestinationDetails";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Layout></Layout>,
        children: [
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/login',
                element: <Login/>
            },
            {
                path:'/registration',
                element: <Registration/>
            },
            {
                path:'/about',
                element: <About/>
            },
            {
                path:'/destinationDetails',
                element: <DestinationDetails/>
            }
        ]
    }
])

export default router;