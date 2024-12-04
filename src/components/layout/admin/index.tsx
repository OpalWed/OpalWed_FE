import { Box, HStack, Stack } from "@chakra-ui/react"
import { Outlet, useLocation, useNavigate } from "react-router"
import AdminNavbar from "../components/admin_navbar"
import SideBar from "../components/sidebar"
import { useEffect, useState } from "react"
import { useAuth } from "../../../hooks/useAuth"
import NotFoundPage from "../../../pages/NotFound"

const AdminLayout = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const { role, setIsAuthenticated, setRole, setIntendedRoute } = useAuth();
    const { pathname } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    if (role !== 'Admin') {
        return <NotFoundPage />
    }

    const checkTokenValidity = () => {
        const token = localStorage.getItem("access_token");
        const expirationTime = localStorage.getItem("tokenExpiration");

        if (token && expirationTime) {
            const isExpired = Date.now() > parseInt(expirationTime, 10);

            if (isExpired) {
                localStorage.removeItem("access_token");
                localStorage.removeItem("tokenExpiration");
                setIsAuthenticated(false);
                setRole('');
                setIntendedRoute(null);
                navigate('/');
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
            <AdminNavbar />
            <HStack align='flex-start' mt={'76px'}>
                <Box flex={1}>
                    <SideBar collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
                </Box>
                <Stack
                    py={2}
                    flex={1}
                    flexBasis={'full'}
                    alignSelf='flex-start'
                    ml={collapsed ? 24 : 270}
                    transition="margin-left 0.3s ease-in-out"
                >
                    <Stack m={'auto'} w={'6xl'}>
                        <Outlet />
                    </Stack>
                </Stack>
            </HStack>
        </>
    )
}

export default AdminLayout