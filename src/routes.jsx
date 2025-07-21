import Home from "./pages/Home/Home";
import Course from "./pages/Course/Course";
import Blog from "./pages/Blog/Blog";
import Category from "./pages/Category/Category";
import Cart from "./pages/Cart/Cart";

const routes = [
    {path:"/" , element:<Home />},
    {path:"/blog" , element:<Blog />},
    {path:"/course/:name" , element:<Course />},
    {path:"/category/:filter" , element:<Category />},
    {path:"/cart" , element:<Cart />},
]

export default routes