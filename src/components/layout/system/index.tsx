import { Stack } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import { useAuth } from "../../../hooks/useAuth"
import NotFoundPage from "../../../pages/NotFound"
import SystemNavbar from "../components/system_navbar"

const SystemLayout = () => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <NotFoundPage />
    }

    return (
        <>
            <SystemNavbar />
            <Stack mt={'96px'} minH={`calc(100vh - 96px)`}>
                <Outlet />
            </Stack>
        </>
    )
}

export default SystemLayout