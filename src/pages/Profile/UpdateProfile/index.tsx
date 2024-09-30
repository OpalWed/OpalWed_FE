import { Button, Divider, FormControl, FormLabel, Heading, HStack, Image, Input, Stack, Textarea, useDisclosure, useToast } from "@chakra-ui/react"
import { FormEvent, useEffect, useState } from "react"
import { FaPen } from "react-icons/fa6";
import axios from "axios";
import Profile, { ProfileInit } from "../../../types/Profile";
import useProfile from "../../../hooks/useProfile";
import { useAuth } from "../../../hooks/useAuth";
import NotFoundPage from "../../NotFound";
import ApiClient from "../../../services/apiClient";
import { changeTabTitle } from "../../../utils/changeTabTitle";
import { Color } from "../../../styles/styles";
import LoadingModal from "../../../components/modal/loading";

const UpdateProfilePage = () => {
    const [description, setDescription] = useState<string>('');
    const [fullName, setFullName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [avatar, setAvatar] = useState<any>();
    const [avatarData, setAvatarData] = useState<any>();
    const [userData, setUserData] = useState<Profile>(ProfileInit);
    const { isOpen: isOpenLoading, onClose: onCloseLoading, onOpen: onOpenLoading } = useDisclosure();
    const { data, refetch } = useProfile();
    const toast = useToast();
    const { role } = useAuth();

    if (role !== 'Owner' && role !== 'Dentist' && role !== 'Staff' && role !== 'Customer') {
        return <NotFoundPage />
    }

    const handleAvatarChange = (e: any) => {
        const selectedFile = e.target.files[0];

        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = () => {
                const imageUrl = URL.createObjectURL(selectedFile);
                setAvatar(imageUrl);
            };
            reader.readAsDataURL(selectedFile);
            setAvatarData(selectedFile);
        }
    }

    const handleResetAllChanges = () => {
        setFullName(userData.fullName);
        setPhone(userData.phone);
        setAddress(userData.address);
        setAvatar(userData.imageUrl);
        setAvatarData(null);
        setDescription(userData.description);
    }

    const handleUpdateProfile = async (e: FormEvent) => {
        e.preventDefault();
        onOpenLoading();
        let imageUrl: string = '';

        if (avatarData) {
            const formDataImage = new FormData();
            formDataImage.append("file", avatarData);
            formDataImage.append("upload_preset", "z5r1wkcn");

            try {
                const response = await axios.post(
                    `https://api.cloudinary.com/v1_1/dy1t2fqsc/image/upload`,
                    formDataImage
                );
                imageUrl = response.data.secure_url;
            } catch (error) {
                console.error(error);
            }
        }

        const api = new ApiClient<any>('/accountInfo/update');
        const data = {
            fullName,
            phone,
            address,
            avatar: imageUrl === '' ? avatar : imageUrl,
            description
        }

        try {
            const response = await api.update(data);
            if (response.status) {
                toast({
                    title: "Success",
                    description: response.message,
                    status: "success",
                    duration: 2500,
                    position: 'top',
                    isClosable: true,
                });
            }
            refetch && refetch();
            handleResetAllChanges();
        } catch (error: any) {
            toast({
                title: "Error",
                description: error?.response?.data?.message || "An error occurred",
                status: "error",
                duration: 2500,
                position: 'top',
                isClosable: true,
            });
        } finally {
            onCloseLoading();
        }
    }

    useEffect(() => {
        changeTabTitle('Cập nhật hồ sơ');
    }, []);

    useEffect(() => {
        if (data) {
            setUserData(data);
        }
    }, [data])

    useEffect(() => {
        handleResetAllChanges();
    }, [userData])

    return (
        <>
            <HStack h={78} bg={Color.darkBlue}>
                <Heading fontSize={24} color={'white'} fontWeight={500} my={'auto'} ml={6}>Cập nhật hồ sơ</Heading>
            </HStack>
            <Stack
                mt={10}
                w={'full'}
                pos={'relative'}
                h={'calc(100% - 90px)'}>
                <HStack
                    w={'5xl'}
                    mx={'auto'}
                    gap={20}
                    align={'flex-end'}
                >
                    <Stack flex={1} gap={10}>
                        <HStack w={'full'} align={'flex-end'} justify={'center'} gap={0} >
                            <Image
                                border='1px solid gainsboro'
                                borderRadius='full'
                                boxSize={'12rem'}
                                src={
                                    avatar || 'https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg'
                                }
                                alt='avatar'
                                bgColor='white'
                                objectFit={'cover'}
                            />
                            <FormLabel
                                htmlFor="avt"
                                cursor='pointer'
                                ml={-20}
                            >
                                <Button leftIcon={<FaPen />} fontSize={14} p={2}>Thay đổi</Button>
                            </FormLabel>
                            <Input
                                type="file"
                                id="avt"
                                accept="image/*"
                                onChange={handleAvatarChange}
                                display='none'
                            />
                        </HStack>
                        <FormControl id="description" isRequired>
                            <Textarea
                                value={description}
                                placeholder="Nhập mô tả bản thân"
                                focusBorderColor='#E2E8F0'
                                resize={'none'}
                                maxH={32}
                                minH={32}
                                borderRadius={20}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                        </FormControl>
                    </Stack>
                    <Stack flex={1.5} gap={4}>
                        <HStack>
                            <FormControl id="fullName" flex={2.5}>
                                <FormLabel ml={1}>Họ và tên</FormLabel>
                                <Input
                                    type="text"
                                    value={fullName}
                                    borderRadius={'full'}
                                    pl={5}
                                    onChange={(e) => setFullName(e.target.value)}
                                    placeholder={'Nhập tên mới'}
                                />
                            </FormControl>
                        </HStack>
                        <HStack>
                            <FormControl id="phone" flex={1}>
                                <FormLabel ml={1} pl={1}>Số điện thoại</FormLabel>
                                <Input
                                    type="tel"
                                    value={phone}
                                    borderRadius={'full'}
                                    pl={5}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="Nhập số điện thoại mới"
                                />
                            </FormControl>
                        </HStack>
                        <FormControl id="address" flex={2}>
                            <FormLabel ml={1}>Địa chỉ</FormLabel>
                            <Input
                                type="text"
                                value={address}
                                borderRadius={'full'}
                                pl={5}
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder="Nhập địa chỉ mới"
                            />
                        </FormControl>
                    </Stack>
                </HStack>
                <Divider
                    pos={'absolute'}
                    bottom={16}
                    w={'5xl'}
                    left={'50%'}
                    transform={'translateX(-50%)'}
                    borderColor={'gainsboro'}
                />
                <HStack
                    gap={4}
                    bottom={2}
                    right={8}
                    w={'300px'}
                    pos={'absolute'}
                >
                    <Button
                        flex={1}
                        borderRadius={'full'}
                        pl={5}
                        variant={'outline'}
                        onClick={handleResetAllChanges}
                    >
                        Reset change
                    </Button>
                    <Button
                        bg={Color.darkBlue}
                        _hover={{ bg: Color.darkBlueHover }}
                        flex={1}
                        color={'white'}
                        borderRadius={'full'}
                        pl={5}
                        isDisabled={
                            fullName.trim() === '' ||
                            phone === '' ||
                            address === '' ||
                            avatar === ''
                        }
                        onClick={handleUpdateProfile}
                    >
                        Save change
                    </Button>
                </HStack>
                <LoadingModal
                    isOpen={isOpenLoading}
                    onClose={onCloseLoading}
                />
            </Stack>
        </>
    )
}

export default UpdateProfilePage