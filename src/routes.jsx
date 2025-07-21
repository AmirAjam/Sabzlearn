import Home from "./pages/Home/Home";
import Course from "./pages/Course/Course";
import Blog from "./pages/Blog/Blog";
import Category from "./pages/Category/Category";
import Cart from "./pages/Cart/Cart";

const routes = [
    {path:"/" , element:<Home />},
    {path:"/blog" , element:<Blog />},
    {path:"/course" , element:<Course />},
    {path:"/category" , element:<Category />},
    {path:"/cart" , element:<Cart />},
]

export default routes