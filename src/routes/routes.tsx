import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "../pages/NotFound";
import Layout from "../components/layout";
import HomePage from "../pages/Home";
import AboutPage from "../pages/About";
import OurServicesPage from "../pages/Our_Services";
import OurPartnersPage from "../pages/Our_Partners";
import ContactPage from "../pages/Contact";

const routes = [
    {
        path: '*',
        element: <NotFoundPage />,
    },
    // {
    //     path: "/login",
    //     element: <LoginPage />,
    // },
    // {
    //     path: "/signup",
    //     element: <SignUpPage />,
    // },
    // {
    //     path: "/forgot-password",
    //     element: <ForgotPasswordPage />,
    // },
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "about-us", element: <AboutPage /> },
            { path: "our-services", element: <OurServicesPage /> },
            { path: "our-partners", element: <OurPartnersPage /> },
            { path: "contact", element: <ContactPage /> },
        ],
    }
];

const router = createBrowserRouter(routes);

export default router;
