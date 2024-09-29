import { Button, Card, CardBody, FormControl, FormLabel, HStack, Image, Input, Stack, Textarea, useDisclosure, useToast } from "@chakra-ui/react"
import { FormEvent, useEffect, useState } from "react"
import { FaPen } from "react-icons/fa6";
import axios from "axios";
import Profile, { ProfileInit } from "../../../types/Profile";
import useProfile from "../../../hooks/useProfile";
import { useAuth } from "../../../hooks/useAuth";
import NotFoundPage from "../../NotFound";
import ApiClient from "../../../services/apiClient";
import { changeTabTitle } from "../../../utils/changeTabTitle";
import { Shadow } from "../../../styles/styles";
import LoadingModal from "../../../components/modal/loading";

const UpdateProfilePage = () => {
    const [description, setDescription] = useState<string>('');
    const [fullName, setFullName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [email, setEmail] = useState<string>('');
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
        changeTabTitle('Thay đổi hồ sơ');
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
        <HStack w={'6xl'} m={'auto'} gap={56} align={'flex-start'}>
            <Card
                flex={1}
                align='center'
                justify='center'
                gap={0}
                shadow={Shadow.cardShadow}
            >
                <CardBody alignSelf={'center'} py={10}>
                    <HStack w={'full'} align={'flex-end'} gap={0}>
                        <Image
                            border='1px solid gainsboro'
                            borderRadius='full'
                            boxSize={'15rem'}
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
                            fontSize='2xl'
                            ml={-8}
                        >
                            <FaPen />
                        </FormLabel>
                        <Input
                            type="file"
                            id="avt"
                            accept="image/*"
                            onChange={handleAvatarChange}
                            display='none'
                        />
                    </HStack>
                </CardBody>
            </Card>
            <Stack flex={1.5}>
                <Card shadow={Shadow.cardShadow}>
                    <CardBody py={8}>
                        <Stack gap={4}>
                            <HStack>
                                <FormControl id="fullName" flex={2.5}>
                                    <FormLabel ml={1}>Full Name</FormLabel>
                                    <Input
                                        type="text"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        placeholder={'Enter full name'}
                                    />
                                </FormControl>
                            </HStack>
                            <FormControl id="description" isRequired>
                                <FormLabel pl={1}>Description</FormLabel>
                                <Textarea
                                    value={description}
                                    placeholder="Describe dentist description"
                                    focusBorderColor='#E2E8F0'
                                    resize={'none'}
                                    maxH={32}
                                    minH={32}
                                    onChange={(e) => setDescription(e.target.value)}
                                    required
                                />
                            </FormControl>
                            <HStack>
                                <FormControl id="phone" flex={1}>
                                    <FormLabel ml={1} pl={1}>Phone number</FormLabel>
                                    <Input
                                        type="tel"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder="Enter phone"
                                    />
                                </FormControl>
                            </HStack>
                            <FormControl id="email" flex={2}>
                                <FormLabel ml={1}>Email</FormLabel>
                                <Input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter email"
                                />
                            </FormControl>
                            <FormControl id="address" flex={2}>
                                <FormLabel ml={1}>Address</FormLabel>
                                <Input
                                    type="text"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    placeholder="Enter address"
                                />
                            </FormControl>
                        </Stack>
                    </CardBody>
                </Card>
                <HStack gap={6} mt={6} w={'sm'} ml={'auto'}>
                    <Button flex={1} onClick={handleResetAllChanges}>
                        Reset all changes
                    </Button>
                    <Button
                        colorScheme={"blue"}
                        variant={"solid"}
                        flex={1}
                        isDisabled={
                            fullName.trim() === '' ||
                            phone === '' ||
                            email.trim() === '' ||
                            address === '' ||
                            avatar === ''
                        }
                        onClick={handleUpdateProfile}
                    >
                        Save changes
                    </Button>
                </HStack>
            </Stack>
            <LoadingModal
                isOpen={isOpenLoading}
                onClose={onCloseLoading}
            />
        </HStack>
    )
}

export default UpdateProfilePage