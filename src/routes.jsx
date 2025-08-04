import Home from "./pages/Home/Home";
import Course from "./pages/Course/Course";
import Blog from "./pages/Blog/Blog";
import Category from "./pages/Category/Category";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import EmailLogin from "./pages/Auth/EmailLogin";
import LostPassword from "./pages/Auth/LostPassword";
import AdminPanel from "./pages/Admin/AdminPanel";
import Users from "./pages/Admin/Users";
import AdminProducts from "./pages/Admin/AdminProducts";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminCategory from "./pages/Admin/AdminCategory";
import AdminAddCourse from "./pages/Admin/AdminAddCourse";
import AdminArticles from "./pages/Admin/AdminArticles";
import AdminAddArticle from "./pages/Admin/AdminAddArticle";

const routes = [
    { path: "/", element: <Home /> },
    { path: "/blog", element: <Blog /> },
    { path: "/course/:name", element: <Course /> },
    { path: "/category/:filter", element: <Category /> },
    { path: "/cart", element: <Cart /> },
    { path: "/login", element: <Login /> },
    { path: "/login/email", element: <EmailLogin /> },
    { path: "/login/lost-password", element: <LostPassword /> },
    { path: "/signup", element: <SignUp /> },
    {
        path: "/p-admin/*", element: <AdminPanel />,
        children: [
            { path: "", element: <AdminDashboard /> },
            { path: "products", element: <AdminProducts /> },
            { path: "users", element: <Users /> },
            { path: "category", element: <AdminCategory /> },
            { path: "add-product", element: <AdminAddCourse /> },
            { path: "articles", element: <AdminArticles /> },
            { path: "add-article", element: <AdminAddArticle /> },
        ]
    },
]

export default routes