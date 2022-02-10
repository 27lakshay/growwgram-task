import { HomePage } from "../views/HomePage";
import { ProfilePage } from "../views/ProfilePage";
import { NotFoundPage } from "../views/NotFoundPage";

const appRoutes = [
    {
        path: "/",
        Component: <HomePage />,
        props: "exact",
    },
    {
        path: ":username",
        Component: <ProfilePage />,
    },
    {
        path: "*",
        Component: <NotFoundPage />,
    },
];

export default appRoutes;
