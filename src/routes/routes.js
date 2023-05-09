import AddEmployee from "../pages/Admin/AddEmployee";
import AdminRoot from "../pages/Admin/AdminRoot";
import Dashboard from "../pages/Admin/Dashboard";
import EmployeeDetail from "../pages/Admin/EmployeeDetail";
import Employees from "../pages/Admin/Employees";
import About from "../pages/Main/About";

import Home from "../pages/Main/Home";
import MainRoot from "../pages/Main/MainRoot";
import NotFound from "../pages/Main/NotFound";
import EditEmployee from "../pages/Admin/EditEmployee";

export const ROUTES = [
    //Main Root - user side
    {
        path:'/',
        element:<MainRoot/>,
        children: [
            {
                path:'',
                element: <Home/>
            },
            {
                path: 'about',
                element: <About/>
            },
            {
                path:'*',
                element: <NotFound/>
            }
        ]
    },
    //Admin Root - admin side
    {
        path: '/admin',
        element: <AdminRoot/>,
        children: [
            {
                path:'',
                element: <Dashboard/>
            },
            {
                path:'employees',
                element:<Employees/>
            },
            {
                path:'add-employee',
                element:<AddEmployee/>
            },
            {
                path:'employees/:id',
                element: <EmployeeDetail/>
            },
            {
                path:'employees/edit/:id',
                element: <EditEmployee/>
            }
        ]
    }
]
