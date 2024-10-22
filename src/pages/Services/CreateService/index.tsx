import { Button, FormControl, FormLabel, HStack, Image, Input, Select, Stack, Textarea, useDisclosure, useToast } from "@chakra-ui/react";
import { FormEvent, useEffect, useState } from "react";
import ApiClient from "../../../services/apiClient";
import { changeTabTitle } from "../../../utils/changeTabTitle";
import { Budget, Concept, Status, Utility } from "../../../types/type.enum";
import LoadingModal from "../../../components/modal/loading";
import axios from "axios";
import { FaPen } from "react-icons/fa6";
import { Border } from "../../../styles/styles";

const CreateServicePage = () => {
    const [productName, setProductName] = useState<string>("");
    const [partnerId, setPartnerId] = useState<string>("");
    const [price, setPrice] = useState<string>("");
    const [budgetLevel, setBudgetLevel] = useState<Budget | undefined>(undefined);
    const [weddingConcept, setWeddingConcept] = useState<Concept | undefined>(undefined);
    const [description, setDescription] = useState<string>("");
    const [utility, setUtility] = useState<Utility | undefined>(undefined);
    const [image, setImage] = useState<string>("");
    const [imageData, setImageData] = useState<File | null>(null);

    const { isOpen: isOpenLoading, onClose: onCloseLoading, onOpen: onOpenLoading } = useDisclosure();
    const toast = useToast();

    const handleAvatarChange = (e: any) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            const imageUrl = URL.createObjectURL(selectedFile);
            setImage(imageUrl);
            setImageData(selectedFile);
        }
    };

    const handleCreate = async (e: FormEvent) => {
        e.preventDefault();
        const api = new ApiClient<any>("/manage/product");
        onOpenLoading();

        let imageUrl = "";

        if (imageData) {
            const formDataImage = new FormData();
            formDataImage.append("file", imageData);
            formDataImage.append("upload_preset", "z5r1wkcn");

            try {
                const response = await axios.post(
                    "https://api.cloudinary.com/v1_1/dy1t2fqsc/image/upload",
                    formDataImage
                );
                imageUrl = response.data.secure_url;
            } catch (error) {
                console.error(error);
            }
        }

        const data = {
            productName,
            partnerId,
            description,
            image: imageUrl,
            price,
            budgetLevel,
            weddingConcept,
            utility,
            status: Status.ACTIVE,
        };

        try {
            const response = await api.create(data);

            if (response.isSuccess) {
                toast({
                    title: "Thành công",
                    description: response.message,
                    status: "success",
                    duration: 2500,
                    position: "top",
                    isClosable: true,
                });
                // Optionally reset form fields
            } else {
                toast({
                    title: "Xảy ra lỗi",
                    description: response.message,
                    status: "error",
                    duration: 2500,
                    position: "top",
                    isClosable: true,
                });
            }
        } catch (error: any) {
            toast({
                title: "Xảy ra lỗi",
                description: error.response?.data?.message || "An error occurred",
                status: "error",
                duration: 2500,
                position: "top",
                isClosable: true,
            });
        } finally {
            onCloseLoading();
        }
    };

    const areAllFieldsFilled = () => {
        return (
            productName.trim() !== '' &&
            partnerId.trim() !== '' &&
            price.trim() !== '' &&
            budgetLevel !== undefined &&  // Modify the condition if Budget.LOW is a valid default
            weddingConcept !== undefined &&  // Modify the condition if Concept.EUROPE is a valid default
            description.trim() !== '' &&
            utility !== undefined &&  // Modify if Utility.CLOTHES is a valid default
            image.trim() !== '' &&
            imageData !== null
        );
    };

    const handleReset = () => {
        setProductName('');
        setPartnerId('');
        setPrice('');
        setBudgetLevel(undefined);  // Reset to the default budget level
        setWeddingConcept(undefined);  // Reset to the default wedding concept
        setDescription('');
        setUtility(undefined);  // Reset to the default utility
        setImage('');
        setImageData(null);  // Reset file input
    };

    useEffect(() => {
        changeTabTitle("Tạo dịch vụ");
    }, []);

    return (
        <Stack w={"6xl"} m={"auto"}>
            <HStack gap={20} align={"flex-start"} mb={10}>
                <Stack gap={3} flex={1}>
                    <HStack w={'full'} justify={'center'} align={'flex-end'}>
                        <Image
                            border='1px solid gainsboro'
                            borderRadius='full'
                            boxSize={'9rem'}
                            src={
                                image || 'https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg'
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
                    <FormControl id="productName" isRequired>
                        <FormLabel>Dịch vụ</FormLabel>
                        <Input
                            type="text"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                            placeholder="Dịch vụ"
                        />
                    </FormControl>

                    <FormControl id="description" isRequired>
                        <FormLabel>Mô tả</FormLabel>
                        <Textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Mô tả"
                            maxH={32}
                            minH={32}
                        />
                    </FormControl>

                    <FormControl id="price" isRequired>
                        <FormLabel>Giá tiền</FormLabel>
                        <Input
                            type="text"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            placeholder="Giá tiền"
                        />
                    </FormControl>
                </Stack>

                <Stack gap={3} flex={1}>

                    <FormControl id="budgetLevel" isRequired>
                        <FormLabel>Phân khúc ngân sách</FormLabel>
                        <Select
                            value={budgetLevel}
                            onChange={(e) => setBudgetLevel(e.target.value as Budget)}
                            placeholder="Chọn phân khúc"
                        >
                            {Object.values(Budget).map((budget) => (
                                <option key={budget} value={budget}>
                                    {budget}
                                </option>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl id="weddingConcept" isRequired>
                        <FormLabel>Phong cách cưới</FormLabel>
                        <Select
                            value={weddingConcept}
                            onChange={(e) => setWeddingConcept(e.target.value as Concept)}
                            placeholder="Chọn phong cách"
                        >
                            {Object.values(Concept).map((concept) => (
                                <option key={concept} value={concept}>
                                    {concept}
                                </option>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl id="utility" isRequired>
                        <FormLabel>Tiện ích</FormLabel>
                        <Select
                            value={utility}
                            onChange={(e) => setUtility(e.target.value as Utility)}
                            placeholder="Chọn tiện ích"
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

            <LoadingModal isOpen={isOpenLoading} onClose={onCloseLoading} />
        </Stack>
    );
};

export default CreateServicePage;
