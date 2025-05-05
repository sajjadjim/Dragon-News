import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import { Children } from "react";
import Home from "../Pages/Home";
import Category from "../Pages/CategoryNews";
import LoginPage from "../Pages/LoginPage";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "../Provider/PrivateRoute";

const Routers = createBrowserRouter(
    [
        {
            path: '/',
            Component: HomeLayouts,
            children: [
                {
                    path: ''
                    ,
                    Component: Home
                },
                {
                    path: '/cateroy/:id',
                    Component: Category
              ,loader: ()=> fetch('/public/demo-data/news.json')
                }
            ]
        },
        {
path:'/auth',
Component:AuthLayout,
children:[
    {
        path:'/auth/login'
        ,Component:LoginPage
    },
    {
        path:'/auth/register'
        ,Component:Register
    }
]
        },
        {
path:'/news-details/:id',
element:<PrivateRoute>
    <NewsDetails></NewsDetails>
</PrivateRoute>,
loader: ()=> fetch('/public/demo-data/news.json')
        },
        {
            path:'/*',
            element:<h1> 404 Error Page</h1>
        }
    ]
)


export default Routers;