import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Login from "../Login_Registration/Login";
import Registration from "../Login_Registration/Registration";
import About from "../Pages/About";
import DestinationDetails from "../Pages/DestinationDetails";
import Tours from "../Pages/Tours";
import Blogs from "../Pages/Blogs";
import DestinationHome from "../Pages/DestinationDetails/DestinationHome";
import AboutDestination from "../Pages/DestinationDetails/AboutDestination";

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
                path:'/destHome',
                element: <DestinationHome/>
            },
            {
                path:'/destHome/:location',
                // element: <DestinationDetails/>
                element: <AboutDestination/>
            },
            {
                path:'/tours',
                element: <Tours/>
            },
            {
                path:'/blogs',
                element: <Blogs/>
            },
        ]
    }
])

export default router;