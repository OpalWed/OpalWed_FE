import { Stack, useToast } from "@chakra-ui/react"
import { Outlet, useNavigate } from "react-router-dom"
import WeddingPlanningNavbar from "../components/wedding_planning_navbar"
import { WeddingProvider } from "../../../context/WeddingContext"
import { useEffect } from "react"
import { useAuth } from "../../../hooks/useAuth"

const WeddingPlanningLayout = () => {
    const { setIsAuthenticated, setRole, setIntendedRoute } = useAuth();
    const toast = useToast();
    const navigate = useNavigate();

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
                toast({
                    title: "Đăng nhập hết hạn",
                    description: "Phiên đăng nhập của bạn đã hết hạn. Hãy đăng nhập lại",
                    status: "error",
                    duration: 2500,
                    position: 'top',
                    isClosable: true,
                });
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
            <WeddingProvider>
                <WeddingPlanningNavbar />
                <Stack mt={'66px'} minH={`calc(100vh - 96px)`}>
                    <Outlet />
                </Stack>
            </WeddingProvider>
        </>
    )
}

export default WeddingPlanningLayout