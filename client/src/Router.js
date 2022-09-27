import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage";
import ErrorPage from "./pages/ErrorPage";
import "./cpn_css/Login.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
        errorElement: <ErrorPage />
    },
    {
        path: "mainpage",
        element: <MainPage />,
    }
])

export default router;