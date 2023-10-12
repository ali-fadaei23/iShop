import { Navigate } from "react-router-dom";
import Login from "../../auth-components/login/Login";
import Home from "../../main/Home";
import { SnackbarProvider } from "notistack";
import SingleProduct from "../../single-product/SingleProduct";
import Category from "../../category/category-pages/Category";

const PublicRoutes = () => {
  // let auth = useAuth();
  return {
    children: [
      { path: "login", element: <Login /> },
      { path: "/", element: <Home /> },
      { path: "electronics", element: <Category categoryPages={'electronics'} /> },
      { path: "jewelery", element: <Category categoryPages={'jewelery'} /> },
      { path: "men's clothing", element: <Category categoryPages={"men's clothing"} /> },
      { path: "women's clothing", element: <Category categoryPages={"women's clothing"} /> },
      { path: "products/:productId", element: <SnackbarProvider autoHideDuration={2000} maxSnack={3}><SingleProduct /></SnackbarProvider> },
      { path: "*", element: <Navigate to="/login" replace /> }
    ],
  };
};

export default PublicRoutes;