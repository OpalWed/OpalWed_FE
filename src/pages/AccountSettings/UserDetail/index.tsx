import { Avatar, Box, Card, CardBody, Heading, Text, Stack, HStack, Divider, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ApiClient from "../../../services/apiClient";
import { useParams } from "react-router-dom";
import Profile, { ProfileInit } from "../../../types/Profile";
import { useAuth } from "../../../hooks/useAuth";
import NotFoundPage from "../../NotFound";
import { changeTabTitle } from "../../../utils/changeTabTitle";
import { Shadow } from "../../../styles/styles";
import Loading from "../../../components/loading";

const UserDetailPage = () => {
    const [userData, setUserData] = useState<Profile>(ProfileInit);
    const { role } = useAuth();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const param = useParams<{ id: string }>();
    const toast = useToast();

    if (role !== 'Admin') {
        return <NotFoundPage />
    }

    const getUserDetail = async (id: number) => {
        setIsLoading(true);
        const api = new ApiClient<any>(`/accountInfo/info`);
        try {
            const response = await api.getDetail(id);
            if (response.isSuccess) {
                setUserData(response.data);
            } else {
                toast({
                    title: "Xảy ra lỗi",
                    description: response.message,
                    status: "error",
                    duration: 2500,
                    position: 'top',
                    isClosable: true,
                });
            }
        } catch (error) {

        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        changeTabTitle(userData.fullName);
    }, [userData.fullName]);

    useEffect(() => {
        if (param.id) {
            getUserDetail(parseInt(param.id));
        }
    }, [param.id]);

    return (
        <>
            {!isLoading ? (
                <HStack gap={20} justify={'space-between'} align={'flex-start'} w={'7xl'} m={'auto'}>
                    <Card flex={1} shadow={Shadow.cardShadow}>
                        <CardBody>
                            <Stack gap="4" align="center" flexWrap="wrap" h='100%'>
                                <Avatar
                                    boxSize={'13rem'}
                                    fontSize='6rem'
                                    border='1px solid gainsboro'
                                    bgColor='white'
                                    objectFit={'cover'}
                                    src={userData.imageUrl || 'https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg'}
                                />
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    flexDirection="column"
                                >
                                    <Heading size="md"></Heading>
                                </Box>
                            </Stack>
                        </CardBody>
                    </Card>
                    <Stack align='center' flex={2} gap={10}>
                        <Card w={'full'} shadow={Shadow.cardShadow}>
                            <CardBody w='100%'>
                                <HStack gap={5}>
                                    <Text minW={36}>Email: </Text>
                                    <Text color={'gray'}>{userData.account.email}</Text>
                                </HStack>
                                <Divider my={4} />
                                <HStack gap={5}>
                                    <Text minW={36}>Full Name: </Text>
                                    <Text color={'gray'}>{userData.fullName}</Text>
                                </HStack>
                                <Divider my={4} />
                                <HStack gap={5}>
                                    <Text minW={36}>Phone Number: </Text>
                                    <Text color={'gray'}>{userData.phone || '-'}</Text>
                                </HStack>
                                <Divider my={4} />
                                <HStack gap={5}>
                                    <Text minW={36}>Address: </Text>
                                    <Text color={'gray'}>{userData.address || '-'}</Text>
                                </HStack>
                                <Divider my={4} />
                                <HStack gap={5}>
                                    <Text minW={36}>Description: </Text>
                                    <Text color={'gray'}>{userData.description || '-'}</Text>
                                </HStack>
                            </CardBody>
                        </Card>
                    </Stack>
                </HStack>
            ) : (
                <Stack m={'auto'}>
                    <Loading />
                </Stack>
            )}
        </>
    );
};

export default UserDetailPage;
