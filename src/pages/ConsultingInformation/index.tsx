import { Stack, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { changeTabTitle } from "../../utils/changeTabTitle";
import useApplication from "../../hooks/useApplication";
import { Application } from "../../types/Application";
import { formatDate } from "../../utils/formatDate";

const ConsultingInformationPage = () => {
    const { data } = useApplication();
    const [applications, setApplications] = useState<Application[]>([]);

    useEffect(() => {
        if (data?.content) {
            setApplications(data?.content);
        }
    }, [data?.content])

    useEffect(() => {
        changeTabTitle('Đơn tư vấn của bạn');
    }, []);

    return (
        <>
            {applications.map(application => (
                <Stack>
                    <Text>Ngày: {formatDate(application.weddingDate)}</Text>
                    <Text>Thông tin chi tiết: {application.requiredServicesFile}</Text>
                </Stack>
            ))}
        </>
    )
}

export default ConsultingInformationPage