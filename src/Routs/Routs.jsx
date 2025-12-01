import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home";
import ToyDetails from "../Pages/ToyDetails";
import AllToys from "../Pages/AllToys";
import ToysByCategory from "../Pages/ToysByCategory";
import About from "../Pages/About";
import Error from "../Pages/Error";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import PrivateRoute from "./PrivateRoute";
import MyProfile from "../Pages/MyProfile";
import Dashboard from "../Pages/DashBoard";
import ResetPassword from "../Pages/ResetPassword";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "all-toys",
                Component: AllToys
            },
            {
                path: "about",
                Component: About
            },
            {
                path: "toys-by-category/:category",
                Component: ToysByCategory
            },
            {
                path: "toy-details/:id",
                element:
                    <PrivateRoute>
                        <ToyDetails></ToyDetails>
                    </PrivateRoute>
            }
        ]
    },
    {
        path: "auth",
        Component: AuthLayout,
        children: [
            {
                path: "login",
                Component: Login
            },
            {
                path: "reset-password",
                Component: ResetPassword
            },
            {
                path: "register",
                Component: Registration
            },
            {
                path: "my-profile",
                element:
                    <PrivateRoute>
                        <MyProfile></MyProfile>
                    </PrivateRoute>
            },
            {
                path: "dashboard",
                element:
                    <PrivateRoute>
                        <Dashboard></Dashboard>
                    </PrivateRoute>
            }
        ]
    }
])