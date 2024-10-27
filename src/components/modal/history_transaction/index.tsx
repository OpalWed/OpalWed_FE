import {
    Box,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
} from '@chakra-ui/react';
import useManageApplication from '../../../hooks/useManageApplication';
import { useEffect, useState } from 'react';
import { Application } from '../../../types/Application';
import { formatDate } from '../../../utils/formatDate';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const HistoryTransactionModal = ({ isOpen, onClose }: Props) => {
    const { data } = useManageApplication();
    const [applications, setApplications] = useState<Application[]>([]);

    useEffect(() => {
        if (data?.content) {
            setApplications(data.content);
        }
    }, [data?.content]);

    return (
        <Box>
            <Modal isOpen={isOpen} onClose={onClose} size="3xl" isCentered>
                <ModalOverlay backdropFilter={'blur(5px)'} />
                <ModalContent borderRadius="lg" overflow="hidden">
                    <ModalHeader bg="#0C2948" color="white" py={4} fontSize="lg" textAlign="center">
                        Lịch sử giao dịch
                    </ModalHeader>
                    <ModalCloseButton color="white" top="10px" />
                    <ModalBody px={6} py={4} bg="gray.50">
                        <Table variant="simple" size="md">
                            <Thead bg="gray.200">
                                <Tr>
                                    <Th>Ngày</Th>
                                    <Th>Khách hàng</Th>
                                    <Th>Mô tả</Th>
                                    <Th isNumeric>Số tiền (VND)</Th>
                                    <Th>Trạng thái</Th>
                                </Tr>
                            </Thead>
                            <Tbody bg="white">
                                {applications.length > 0 ? (
                                    applications.map((application) => (
                                        <Tr key={application.applicationId} borderBottom="1px solid" borderColor="gray.200">
                                            <Td fontSize="sm" color="gray.700">
                                                {formatDate(application.createdDate)}
                                            </Td>
                                            <Td fontSize="sm" color="gray.700">
                                                {application.userId}
                                            </Td>
                                            <Td fontSize="sm" color="gray.700">
                                                {application.weddingDescription}
                                            </Td>
                                            <Td isNumeric fontSize="sm" color="gray.900" fontWeight="bold">
                                                {application.numberOfGuests.toLocaleString()} VND
                                            </Td>
                                            <Td fontSize="sm" color={application.status === 'Success' ? 'green.500' :
                                                application.status === 'Pending' ? 'yellow.500' : 'red.500'}
                                                fontWeight="semibold">
                                                {application.status}
                                            </Td>
                                        </Tr>
                                    ))
                                ) : (
                                    <Tr>
                                        <Td colSpan={5} textAlign="center" color="gray.500">
                                            Không có giao dịch nào
                                        </Td>
                                    </Tr>
                                )}
                            </Tbody>
                        </Table>
                    </ModalBody>
                    <ModalFooter justifyContent="center" bg="purple.50" py={3}>
                        <Button variant="ghost" color={'#0C2948'} size="sm" onClick={onClose}>
                            Đóng
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default HistoryTransactionModal;
