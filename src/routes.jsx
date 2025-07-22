import Home from "./pages/Home/Home";
import Course from "./pages/Course/Course";
import Blog from "./pages/Blog/Blog";
import Category from "./pages/Category/Category";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";

const routes = [
    {path:"/" , element:<Home />},
    {path:"/blog" , element:<Blog />},
    {path:"/course/:name" , element:<Course />},
    {path:"/category/:filter" , element:<Category />},
    {path:"/cart" , element:<Cart />},
    {path:"/login" , element:<Login />},
    {path:"/signup" , element:<SignUp />},
]

export default routes