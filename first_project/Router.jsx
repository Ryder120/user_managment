import React, { Suspense } from 'react'
import { Routes, BrowserRouter, Route, Navigate } from 'react-router-dom'
import ProtectedRoute from './src/authantication/ProtectedRoute';

const Home = React.lazy(() => import('./src/components/Home'));
const Login = React.lazy(() => import('./src/authantication/Login'));
const Register = React.lazy(() => import('./src/authantication/Register'));
const Dashboard = React.lazy(() => import('./src/components/Dashboard'));
const Protected = React.lazy(() => import('./src/components/Protected'));



function Router() {
    const routesList = [
        // {
        //     path: "*", element: <Home />
        // },
        {
            path: "/", element: <Home />, children: [
                { path: "", element: <Navigate to="home" /> },
                { path: "home", element: <Home /> },
                // { path: "about", element: <About /> },
                // { path: "buy", element: <BuyRidinngGears /> },
                // { path: "sell", element: <SellRidinngGears /> },
                // { path: "product", element: <ViewProduct /> },
            ]
        },
        {
            path: "login", element: <Login />
        },
        {
            path: "register", element: <Register />
        },
        {
            path: "user/:id", element: <Dashboard />
        },
        {
            path: "user/pro", element: <ProtectedRoute component={Protected} role='user' />
        },
    ]
    return (
        <Suspense fallback={<div>Loading </div>}>
            <BrowserRouter>
                <Routes>
                    {routesList.map(({ path, element, children }) => (
                        <Route key={path} path={path} element={element}>
                            {children?.map(({ path, element }) => (
                                <Route key={path} path={path} element={element} />
                            ))}
                        </Route>
                    ))}
                </Routes>
            </BrowserRouter>
        </Suspense>
    )
}

export default Router