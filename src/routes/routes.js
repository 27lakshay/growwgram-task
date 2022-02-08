import { HomePage } from "../views/HomePage";
import { ProfilePage } from "../views/ProfilePage";

const appRoutes = [
    // {
    //     path: "/",
    //     Component: <HomePage/>,
    // },
    {
        path: ":username",
        Component: <ProfilePage/>,
    },
    {
        path: "*",
        Component: <h1>dawdawd</h1>,
    },
];

export default appRoutes;
