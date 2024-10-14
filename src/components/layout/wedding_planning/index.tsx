import { Stack } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import WeddingPlanningNavbar from "../components/wedding_planning_navbar"
import { WeddingProvider } from "../../../context/WeddingContext"

const WeddingPlanningLayout = () => {

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