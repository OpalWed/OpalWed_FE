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
import ServicePage from "../pages/Services";
import PartnerPage from "../pages/Partners";
import CustomerContactsPage from "../pages/CustomerContacts";
import SignUpPage from "../pages/SignUp";
import AccountSettingsPage from "../pages/AccountSettings";
import SystemLayout from "../components/layout/system";
import ProfilePage from "../pages/Profile";
import UserDetailPage from "../pages/AccountSettings/UserDetail";
import UpdateProfilePage from "../pages/Profile/UpdateProfile";
import UpdatePasswordPage from "../pages/Profile/UpdatePassword";
import CustomerSystemLayout from "../components/layout/customer_system";
import ForgotPasswordPage from "../pages/ForgotPassword";
import ProductPage from "../pages/Product";
import ProductDetailPage from "../pages/Product/ProductDetail";
import AccessoriesPage from "../pages/WeddingPlanning/pages/Accessories";
import ClothesPage from "../pages/WeddingPlanning/pages/Clothes";
import RestaurantsPage from "../pages/WeddingPlanning/pages/Restaurants";
import ConfirmDesignPage from "../pages/WeddingPlanning/pages/ConfirmDesign";
import EuropeWeddingConceptPage from "../pages/WeddingConcept/Europe";
import VintageWeddingConceptPage from "../pages/WeddingConcept/Vintage";
import WeddingInformationPage from "../pages/WeddingPlanning/pages/WeddingInformation";
import MinimalismWeddingConceptPage from "../pages/WeddingConcept/Minimalism";
import WeddingPlanningLayout from "../components/layout/wedding_planning";
import MakeupPage from "../pages/WeddingPlanning/pages/Makeup";
import FlowersPage from "../pages/WeddingPlanning/pages/Flowers";
import WeddingPhotographyPage from "../pages/WeddingPlanning/pages/WeddingPhotography";
import DecorationPage from "../pages/WeddingPlanning/pages/Decoration";
import WeddingInvitationsPage from "../pages/WeddingPlanning/pages/WeddingInvitations";
import Dashboard from "../pages/Dashboard";
import CreatePartnerPage from "../pages/Partners/CreatePartner";
import CustomerDesignPage from "../pages/CustomerDesign";
import CreateServicePage from "../pages/Services/CreateService";
import ServiceDetailPage from "../pages/Services/ServiceDetail";
import UpdateServicePage from "../pages/Services/UpdateService";
import TraditionalWeddingConceptPage from "../pages/WeddingConcept/Traditional";

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
    {
        path: "/forgot-password",
        element: <ForgotPasswordPage />,
    },
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "about-us", element: <AboutPage /> },
            { path: "our-services", element: <OurServicesPage /> },
            { path: "wedding-concept/traditional", element: <TraditionalWeddingConceptPage /> },
            { path: "wedding-concept/europe", element: <EuropeWeddingConceptPage /> },
            { path: "wedding-concept/minimalist", element: <MinimalismWeddingConceptPage /> },
            { path: "wedding-concept/vintage", element: <VintageWeddingConceptPage /> },
            { path: "product/:utility", element: <ProductPage /> },
            { path: "product/:utility/detail", element: <ProductDetailPage /> },
            { path: "our-partners", element: <OurPartnersPage /> },
            { path: "contact", element: <ContactPage /> },
        ],
    },
    {
        path: "/",
        element: <WeddingPlanningLayout />,
        children: [
            { path: "wedding-planning/wedding-information", element: <WeddingInformationPage /> },
            { path: "wedding-planning/:budget/clothes", element: <ClothesPage /> },
            { path: "wedding-planning/:budget/accessories", element: <AccessoriesPage /> },
            { path: "wedding-planning/:budget/makeup", element: <MakeupPage /> },
            { path: "wedding-planning/:budget/flowers", element: <FlowersPage /> },
            { path: "wedding-planning/:budget/photography", element: <WeddingPhotographyPage /> },
            { path: "wedding-planning/:budget/decoration", element: <DecorationPage /> },
            { path: "wedding-planning/:budget/restaurants", element: <RestaurantsPage /> },
            { path: "wedding-planning/:budget/invitations", element: <WeddingInvitationsPage /> },
            { path: "wedding-planning/:budget/confirm-design", element: <ConfirmDesignPage /> },
        ]
    },
    {
        path: "/administrator",
        element: <AdminLayout />,
        children: [
            { index: true, element: <Navigate to={'dashboard'} /> },
            { path: "dashboard", element: <Dashboard /> },
            { path: "accounts", element: <AccountSettingsPage /> },
            { path: "services", element: <ServicePage /> },
            { path: "partners", element: <PartnerPage /> },
            { path: "customer-contact", element: <CustomerContactsPage /> },
            { path: "customer-design", element: <CustomerDesignPage /> },
        ],
    },
    {
        path: "/",
        element: <SystemLayout />,
        children: [
            { path: "administrator/profile", element: <ProfilePage /> },
            { path: "administrator/accounts/:id", element: <UserDetailPage /> },
            { path: "administrator/partners/create", element: <CreatePartnerPage /> },
            { path: "administrator/services/create", element: <CreateServicePage /> },
            { path: "administrator/services/:id", element: <ServiceDetailPage /> },
            { path: "administrator/services/:id/update", element: <UpdateServicePage /> },
        ]
    },
    {
        path: "/",
        element: <CustomerSystemLayout />,
        children: [
            { path: "profile", element: <ProfilePage /> },
            { path: "profile/update-profile", element: <UpdateProfilePage /> },
            { path: "profile/update-password", element: <UpdatePasswordPage /> },
        ]
    },
];

const router = createBrowserRouter(routes);

export default router;
