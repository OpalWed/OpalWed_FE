import { Box, HStack, Stack } from "@chakra-ui/react"
import { Outlet, useLocation } from "react-router"
import AdminNavbar from "../components/admin_navbar"
import SideBar from "../components/sidebar"
import { useEffect, useState } from "react"
import { useAuth } from "../../../hooks/useAuth"
import NotFoundPage from "../../../pages/NotFound"

const AdminLayout = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const { role } = useAuth();
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    if (role !== 'Admin') {
        return <NotFoundPage />
    }

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