import Stack from '@mui/material/Stack';
import { Outlet } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import Navbar from './components/navbar';
import Footer from './components/footer';

const Layout = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <Navbar />
            <Stack mt={'76px'} minHeight={'calc(100vh - 96px - 236.8px)'}>
                <Outlet />
            </Stack>
            <Footer />
        </>
    )
}

export default Layout