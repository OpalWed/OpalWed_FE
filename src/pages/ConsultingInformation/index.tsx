import { Stack, Text, Box, Heading, Button, Icon } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { changeTabTitle } from "../../utils/changeTabTitle";
import useApplication from "../../hooks/useApplication";
import { Application } from "../../types/Application";
import { formatDate } from "../../utils/formatDate";
import { FiDownload } from "react-icons/fi";

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
        <Box maxW="800px" mx="auto" p={6}>
            <Heading as="h2" size="lg" mb={6} textAlign="center">
                Đơn tư vấn của bạn
            </Heading>
            {applications.length > 0 ? (
                <Stack spacing={4} align="stretch">
                    {applications.map((application, index) => (
                        <Box
                            key={index}
                            p={4}
                            boxShadow="md"
                            borderRadius="md"
                            bg="white"
                            border="1px"
                            borderColor="gray.200"
                        >
                            <Text fontWeight="bold" fontSize="lg" color="teal.600">
                                Ngày cưới: {formatDate(application.weddingDate)}
                            </Text>
                            <Text mt={2} fontWeight="semibold">Chi tiết dịch vụ:</Text>
                            <Button
                                as="a"
                                href={application.requiredServicesFile}
                                target="_blank"
                                rel="noopener noreferrer"
                                colorScheme="teal"
                                leftIcon={<Icon as={FiDownload} />}
                                mt={2}
                            >
                                Tải về PDF
                            </Button>
                        </Box>
                    ))}
                </Stack>
            ) : (
                <Text textAlign="center" color="gray.500">
                    Bạn chưa có đơn tư vấn nào.
                </Text>
            )}
        </Box>
    );
};

export default ConsultingInformationPage;
