import { Button, FormControl, FormLabel, HStack, Heading, Image, Input, Select, Stack, Textarea, useDisclosure, useToast } from "@chakra-ui/react"
import { FormEvent, useEffect, useState } from "react";
import ApiClient from "../../../services/apiClient";
import { changeTabTitle } from "../../../utils/changeTabTitle";
import { today } from "../../../components/modal/appointment";
import { FaPen } from "react-icons/fa6";
import axios from "axios";
import { Border } from "../../../styles/styles";
import useUserProfile from "../../../hooks/useUserProfile";
import useBranchByClinicId from "../../../hooks/useBranchByClinicId";
import BranchDetailResponse from "../../../types/BranchDetailResponse";
import LoadingModal from "../../../components/modal/loading";
import { trimAll } from "../../../utils/trimAll";

const CreatePartnerPage = () => {
    const [fullName, setFullName] = useState<string>('');
    const [dob, setDob] = useState<string>('');
    const [gender, setGender] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [specialty, setSpecialty] = useState<string>('');
    const [experience, setExperience] = useState<string>('');
    const [avatar, setAvatar] = useState<string>('');
    const [avatarData, setAvatarData] = useState<File | null>(null);
    const [branchId, setBranchId] = useState<number>(0);
    const [branches, setBranches] = useState<BranchDetailResponse[]>([]);
    const { data: userData } = useUserProfile();
    const { data: branchData } = useBranchByClinicId({ clinicId: userData?.clinicId });
    const { isOpen: isOpenLoading, onClose: onCloseLoading, onOpen: onOpenLoading } = useDisclosure();
    const toast = useToast();

    const areAllFieldsFilled = () => {
        return (
            fullName.trim() !== '' &&
            dob !== '' &&
            gender !== '' &&
            phone.trim() !== '' &&
            email.trim() !== '' &&
            address.trim() !== '' &&
            description.trim() !== '' &&
            specialty.trim() !== '' &&
            experience.trim() !== '' &&
            avatar !== '' &&
            avatarData !== null &&
            branchId !== 0
        );
    };

    const handleReset = () => {
        setFullName('');
        setDob('');
        setGender('');
        setPhone('');
        setEmail('');
        setAddress('');
        setDescription('');
        setSpecialty('');
        setExperience('');
        setAvatar('');
        setAvatarData(null);
        setBranchId(0);
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

    const handleCreate = async (e: FormEvent) => {
        e.preventDefault();
        const api = new ApiClient<any>('/dentists');
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
            fullName: trimAll(fullName),
            email: email.trim(),
            gender,
            phone: phone.trim(),
            dob,
            address: trimAll(address),
            description: description.trim(),
            specialty: trimAll(specialty),
            experience: experience.trim(),
            avatar: avatarUrl,
            branchId
        };

        try {
            const response = await api.create(data);

            if (response.success) {
                toast({
                    title: "Success",
                    description: response.message,
                    status: "success",
                    duration: 2500,
                    position: 'top',
                    isClosable: true,
                });
                handleReset();
            } else {
                toast({
                    title: "Error",
                    description: response.message,
                    status: "error",
                    duration: 2500,
                    position: 'top',
                    isClosable: true,
                });
            }
        } catch (error: any) {
            toast({
                title: "Error",
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

    useEffect(() => {
        changeTabTitle('Create Dentist');
    }, []);

    useEffect(() => {
        if (branchData) {
            setBranches(branchData);
        }
    }, [branchData]);

    return (
        <Stack w={'6xl'} m={'auto'}>
            <HStack gap={20} align={'flex-start'} mb={10}>
                <Stack gap={3} flex={1}>
                    <Heading fontSize={24} fontWeight={600} mb={4}>Personal Information</Heading>
                    <HStack w={'full'} justify={'center'} align={'flex-end'}>
                        <Image
                            border='1px solid gainsboro'
                            borderRadius='full'
                            boxSize={'9rem'}
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
                            fontSize='md'
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
                        <FormControl id="gender" flex={1} isRequired>
                            <FormLabel pl={1}>Gender</FormLabel>
                            <Select
                                name="gender"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                placeholder={'Select gender'}
                            >
                                <option value="Male">
                                    Male
                                </option>
                                <option value="Female">
                                    Female
                                </option>
                                <option value="Other">
                                    Other
                                </option>
                            </Select>
                        </FormControl>
                    </HStack>
                    <HStack>
                        <FormControl id="dob" flex={1} isRequired>
                            <FormLabel pl={1}>Date of Birth</FormLabel>
                            <Input
                                type="date"
                                max={today}
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                                required
                            />
                        </FormControl>
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
                    </HStack>
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
                </Stack>
                <Stack gap={3} flex={1}>
                    <Heading fontSize={24} fontWeight={600}>Medical Information</Heading>
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
                    <FormControl id="branch" isRequired>
                        <FormLabel pl={1}>Branch</FormLabel>
                        <Select
                            name="branch"
                            value={branchId}
                            onChange={(e) => setBranchId(parseInt(e.target.value))}
                            placeholder={'Select branch'}
                        >
                            {branches.map((branch) => (
                                <option key={branch.branchId} value={branch.branchId}>
                                    {branch.branchName} ({branch.city})
                                </option>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl id="specialty" isRequired>
                        <FormLabel pl={1}>Specialty</FormLabel>
                        <Input
                            type="text"
                            value={specialty}
                            onChange={(e) => setSpecialty(e.target.value)}
                            placeholder={'Enter specialty'}
                        />

                    </FormControl>
                    <FormControl id="experience" isRequired>
                        <FormLabel pl={1}>Experience</FormLabel>
                        <Textarea
                            value={experience}
                            placeholder="Describe dentist experience"
                            focusBorderColor='#E2E8F0'
                            resize={'none'}
                            maxH={32}
                            minH={32}
                            onChange={(e) => setExperience(e.target.value)}
                            required
                        />
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

export default CreatePartnerPage