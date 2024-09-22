import { Card, CardBody, Heading, Text, Stack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { changeTabTitle } from "../../utils/changeTabTitle";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";

const NotFoundPage = () => {
    const { role } = useAuth();
    const [navigate, setNavigate] = useState<string>('');

    useEffect(() => {
        changeTabTitle('Không tìm thấy trang');
    }, []);

    useEffect(() => {
        if (role === 'Admin') {
            setNavigate('/administrator');
        } else {
            setNavigate('/');
        }
    }, [role]);

    return (
        <Stack align={'center'} justify={'center'} h={'100vh'} bg={'blue.100'}>
            <Card borderRadius={20}>
                <CardBody p={10} px={36}>
                    <Stack align={'center'} gap={6}>
                        <Heading fontSize={200} color={'blue.100'} textShadow={'black 0px 0px 2px'}>404</Heading>
                        <Heading mb={2}>Không tìm thấy trang</Heading>
                        <Text>Xin lỗi, trang bạn đang tìm kiếm không tồn tại.</Text>
                        <Link to={navigate}>
                            <Button colorScheme="blue">
                                Quay lại Trang chủ
                            </Button>
                        </Link>
                    </Stack>
                </CardBody>
            </Card>
        </Stack>
    );
};

export default NotFoundPage;
