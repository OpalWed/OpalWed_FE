import { Stack, Heading, HStack, TableContainer, Table, Thead, Tr, Th, Tbody, Td, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { changeTabTitle } from "../../utils/changeTabTitle";
import useApplication from "../../hooks/useApplication";
import { Application } from "../../types/Application";
import { formatDate } from "../../utils/formatDate";
import { FiDownload } from "react-icons/fi";
import { Color } from "../../styles/styles";
import { formatDateTime } from "../../utils/formatDateTime";

const ConsultingInformationPage = () => {
    const { data } = useApplication();
    const [applications, setApplications] = useState<Application[]>([]);

    useEffect(() => {
        if (data?.content) {
            setApplications(data?.content);
        }
    }, [data?.content]);

    useEffect(() => {
        changeTabTitle('Đơn tư vấn của bạn');
    }, []);

    return (
        <>
            <HStack h={78} bg={Color.darkBlue} px={6} py={8} spacing={4}>
                <Heading fontSize={24} color="white" fontWeight={500} fontFamily="Hatton">
                    Đơn tư vấn của bạn
                </Heading>
            </HStack>

            <Stack w="6xl" m="auto" align="flex-start" gap={0} mt={6}>
                <TableContainer w="full" overflowY="auto" whiteSpace="normal">
                    <Table variant="simple" size="md">
                        <Thead>
                            <Tr>
                                <Th textAlign="center" borderColor="gainsboro">Mã hóa đơn</Th>
                                <Th textAlign="center" borderColor="gainsboro">Ngày tổ chức</Th>
                                <Th textAlign="center" borderColor="gainsboro">Ngày tạo</Th>
                                <Th textAlign="center" borderColor="gainsboro">Đơn tư vấn</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {applications.length > 0 ? (
                                applications.map((application, index) => (
                                    <Tr key={index} _hover={{ bg: "gray.50" }}>
                                        <Td textAlign="center" borderColor="gainsboro">
                                            {application.applicationId}
                                        </Td>
                                        <Td textAlign="center" borderColor="gainsboro">
                                            {formatDate(application.weddingDate)}
                                        </Td>
                                        <Td textAlign="center" borderColor="gainsboro">
                                            {formatDateTime(application.createdDate)}
                                        </Td>
                                        <Td textAlign="center" borderColor="gainsboro">
                                            <Button
                                                as="a"
                                                href={application.requiredServicesFile}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                bg={Color.darkBlue}
                                                _hover={{ bg: Color.darkBlueHover }}
                                                color={'white'}
                                                leftIcon={<FiDownload />}
                                            >
                                                Tải về PDF
                                            </Button>
                                        </Td>
                                    </Tr>
                                ))
                            ) : (
                                <Tr>
                                    <Td colSpan={3} textAlign="center" color="gray.500">
                                        Bạn chưa có đơn tư vấn nào.
                                    </Td>
                                </Tr>
                            )}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Stack>
        </>
    );
};

export default ConsultingInformationPage;  