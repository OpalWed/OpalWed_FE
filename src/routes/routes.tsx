import { createBrowserRouter, Navigate } from "react-router-dom";
import NotFoundPage from "../pages/NotFound";
import Layout from "../components/layout/customer";
import HomePage from "../pages/Home";
import AboutPage from "../pages/About";
import OurServicesPage from "../pages/Our_Services";
import OurPartnersPage from "../pages/Our_Partners";
import ContactPage from "../pages/Contact";
import LoginPage from "../pages/Login";
import AdminLayout from "../components/layout/admin";
import ApprovePartnerPage from "../pages/ApprovePartner";
import ServicePage from "../pages/Services";
import PartnerPage from "../pages/Partners";
import CustomerContactsPage from "../pages/CustomerContacts";
import { Schedule } from "@mui/icons-material";
import SchedulePage from "../pages/Schedule";
import SignUpPage from "../pages/SignUp";
import AccountSettingsPage from "../pages/AccountSettings";

const routes = [
    {
        path: '*',
        element: <NotFoundPage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/sign-up",
        element: <SignUpPage />,
    },
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
    },
    {
        path: "/administrator",
        element: <AdminLayout />,
        children: [
            { index: true, element: <Navigate to={'dashboard'} /> },
            { path: "dashboard", element: <HomePage /> },
            { path: "accounts", element: <AccountSettingsPage /> },
            { path: "services", element: <ServicePage /> },
            { path: "partners", element: <PartnerPage /> },
            { path: "approve-partner", element: <ApprovePartnerPage /> },
            { path: "customer-contact", element: <CustomerContactsPage /> },
            { path: "schedule", element: <SchedulePage /> },
        ],
    },
];

const router = createBrowserRouter(routes);

export default router;
