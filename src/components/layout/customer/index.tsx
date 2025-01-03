import Stack from '@mui/material/Stack';
import { Outlet } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { useAuth } from '../../../hooks/useAuth';

const Layout = () => {
    const { pathname } = useLocation();
    const { setIsAuthenticated, setRole, setIntendedRoute } = useAuth();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const checkTokenValidity = () => {
        const token = localStorage.getItem("access_token");
        const expirationTime = localStorage.getItem("tokenExpiration");

        if (token && expirationTime) {
            const isExpired = Date.now() > parseInt(expirationTime, 10);
            console.log(Date.now());

            console.log(parseInt(expirationTime, 10));

            if (isExpired) {
                localStorage.removeItem("access_token");
                localStorage.removeItem("tokenExpiration");
                setIsAuthenticated(false);
                setRole('');
                setIntendedRoute(null);
                window.location.reload();
                return null;
            } else {
                return token;
            }
        }
        return null;
    }

    useEffect(() => {
        checkTokenValidity();
    }, []);

    useEffect(() => {
        const interval = setInterval(checkTokenValidity, 5 * 60 * 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Navbar />
            <Stack mt={'116px'} minHeight={'calc(100vh - 96px - 236.8px)'}>
                <Outlet />
            </Stack>
            <Footer />
        </>
    )
}

export default Layout