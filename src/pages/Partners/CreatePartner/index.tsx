import { Button, FormControl, FormLabel, HStack, Heading, Image, Input, Select, Stack, Textarea, useDisclosure, useToast } from "@chakra-ui/react";
import { FormEvent, useEffect, useState } from "react";
import ApiClient from "../../../services/apiClient";
import { changeTabTitle } from "../../../utils/changeTabTitle";
import { FaPen } from "react-icons/fa6";
import axios from "axios";
import { Border } from "../../../styles/styles";
import LoadingModal from "../../../components/modal/loading";
import { Utility } from "../../../types/type.enum";

const CreatePartnerPage = () => {
    const [fullName, setFullName] = useState<string>('');
    const [partnerName, setPartnerName] = useState<string>(''); // New field
    const [phone, setPhone] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [utilities, setUtilities] = useState<Utility[]>([]);
    const [avatar, setAvatar] = useState<string>('');
    const [avatarData, setAvatarData] = useState<File | null>(null);
    const { isOpen: isOpenLoading, onClose: onCloseLoading, onOpen: onOpenLoading } = useDisclosure();
    const toast = useToast();

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

    const handleCreate = async (e: FormEvent) => {
        e.preventDefault();
        const api = new ApiClient<any>('/partner');
        onOpenLoading();
        let avatarUrl: string = '';

        if (avatarData) {
            const formDataImage = new FormData();
            formDataImage.append("file", avatarData);
            formDataImage.append("upload_preset", "z5r1wkcn");

            try {
                const response = await axios.post(
                    `https://api.cloudinary.com/v1_1/dy1t2fqsc/image/upload`,
                    formDataImage
                );
                avatarUrl = response.data.secure_url;
            } catch (error) {
                console.error(error);
            }
        }

        const data = {
            fullName,
            partnerName,
            phone,
            address,
            description,
            imageUrl: avatarUrl,
            utilities,
            status,
        };

        try {
            const response = await api.create(data);

            if (response.isSuccess) {
                toast({
                    title: "Thành công",
                    description: response.message,
                    status: "success",
                    duration: 2500,
                    position: 'top',
                    isClosable: true,
                });
                // Reset fields if necessary
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
        } catch (error: any) {
            toast({
                title: "Xảy ra lỗi",
                description: error.response?.data?.message || "An error occurred",
                status: "error",
                duration: 2500,
                position: 'top',
                isClosable: true,
            });
        } finally {
            onCloseLoading();
        }
    };

    const handleReset = () => {
        setFullName('');
        setPartnerName('');
        setPhone('');
        setEmail('');
        setAddress('');
        setDescription('');
        setUtilities([]); // If you need to reset utilities
        setAvatar('');
        setAvatarData(null);
    };

    const areAllFieldsFilled = () => {
        return (
            fullName &&
            partnerName &&
            phone &&
            email &&
            address &&
            description &&
            avatarData
        );
    };

    useEffect(() => {
        changeTabTitle('Tạo nhà cung cấp');
    }, []);

    return (
        <Stack w={'6xl'} m={'auto'}>
            <HStack gap={20} align={'flex-start'} mb={10}>
                <Stack gap={3} flex={1}>
                    <Heading fontSize={24} fontWeight={600} mb={4}>Thông tin nhà cung cấp</Heading>
                    <HStack w={'full'} justify={'center'} align={'flex-end'}>
                        <Image
                            border='1px solid gainsboro'
                            borderRadius='full'
                            boxSize={'9rem'}
                            src={avatar || 'https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg'}
                            alt='avatar'
                            bgColor='white'
                            objectFit={'cover'}
                        />
                        <FormLabel htmlFor="avt" cursor='pointer' fontSize='md' ml={-8}>
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
                    <HStack>
                        <FormControl id="fullName" flex={2} isRequired>
                            <FormLabel pl={1}>Full Name</FormLabel>
                            <Input
                                type="text"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                placeholder="Enter full name"
                                required
                            />
                        </FormControl>

                    </HStack>
                    <HStack>
                        <FormControl id="phone" flex={1.5} isRequired>
                            <FormLabel pl={1}>Phone Number</FormLabel>
                            <Input
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Enter phone number"
                                required
                            />
                        </FormControl>
                        <FormControl id="email" flex={1.7} isRequired>
                            <FormLabel pl={1}>Email</FormLabel>
                            <Input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter email"
                                required
                            />
                        </FormControl>
                    </HStack>

                </Stack>
                <Stack gap={3} flex={1}>
                    <Heading fontSize={24} fontWeight={600}>Thông tin nhãn hàng</Heading>
                    <FormControl id="partnerName" flex={1} isRequired>
                        <FormLabel pl={1}>Partner Name</FormLabel>
                        <Input
                            type="text"
                            value={partnerName}
                            onChange={(e) => setPartnerName(e.target.value)}
                            placeholder="Enter partner name"
                            required
                        />
                    </FormControl>
                    <FormControl id="address" flex={2} isRequired>
                        <FormLabel pl={1}>Address</FormLabel>
                        <Input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="Enter address"
                            required
                        />
                    </FormControl>
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
                    <FormControl id="utilities" flex={1} isRequired>
                        <FormLabel pl={1}>Phân khúc</FormLabel>
                        <Select
                            name="utilities"
                            value={utilities}
                            onChange={e => {
                                const selectedOptions = Array.from(e.target.selectedOptions);
                                const selectedUtilities = selectedOptions.map(option => option.value as Utility);
                                setUtilities(selectedUtilities);
                            }}
                            placeholder={'Chọn phân khúc'}
                        >
                            {Object.values(Utility).map((utility) => (
                                <option key={utility} value={utility}>
                                    {utility}
                                </option>
                            ))}
                        </Select>
                    </FormControl>
                </Stack>
            </HStack>
            <HStack
                pos={'fixed'}
                w={'99%'}
                bg={"blue.200"}
                left={2}
                right={2}
                bottom={2}
                justify={'flex-end'}
                gap={4}
            >
                <Button
                    bg={'white'}
                    border={Border.tableBorder}
                    variant={"solid"}
                    fontSize={15}
                    fontWeight={400}
                    px={2}
                    my={1}
                    h={6}
                    onClick={handleReset}
                >
                    Reset
                </Button>
                <Button
                    colorScheme={"blue"}
                    variant={"solid"}
                    fontSize={15}
                    fontWeight={400}
                    px={2}
                    mr={6}
                    my={1}
                    h={6}
                    onClick={handleCreate}
                    isDisabled={!areAllFieldsFilled()}
                >
                    Create
                </Button>
            </HStack>
            <LoadingModal
                isOpen={isOpenLoading}
                onClose={onCloseLoading}
            />
        </Stack>
    )
}

export default CreatePartnerPage;