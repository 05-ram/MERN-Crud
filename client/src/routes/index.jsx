import { createBrowserRouter } from "react-router-dom";
import Users from "../components/Users";
import ErrComp from "../components/ErrComp";
import CreateUser from "../components/CreateUser";
import UpdateUser from "../components/UpdateUser";

const RouterData = () => {
    const StrictRoute = createBrowserRouter([
        {
            path: '/',
            element: <Users />,
            errorElement: <ErrComp />
        },
        {
            path: '/create',
            element: <CreateUser />,
        },
        {
            path: '/update',
            element: <UpdateUser />,
        }
    ])
    return StrictRoute
}
export default RouterData;