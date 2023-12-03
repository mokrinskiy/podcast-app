import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Podcasts from "./pages/Podcasts";
import Podcast from "./pages/Podcast";

const Layout = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/podcasts",
                element: <Podcasts />,
            },
            {
                path: "/podcast/:id",
                element: <Podcast />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
