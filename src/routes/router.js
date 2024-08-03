import Test from "../pages/Test"
import Laptops from "../pages/Laptops";
import LaptopPost from "../pages/LaptopPost";
import Login from "../pages/Login";

export const PrivateRoutes = [
    { path: '/test', element: <Test /> },
    { path: '/laptops', element: <Laptops /> },
    { path: '/laptops/:id', element: <LaptopPost /> },
    { path: '*', element: <Laptops /> }
];

export const PublicRouter = [
    { path: '/login', element: <Login /> },
    { path: '*', element: <Login /> }
];