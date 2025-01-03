import { Button, FormControl, FormLabel, HStack, Image, Input, InputGroup, InputRightAddon, Select, Stack, Text, useDisclosure, useToast } from "@chakra-ui/react";
import { FormEvent, useEffect, useState } from "react";
import ApiClient from "../../../services/apiClient";
import { changeTabTitle } from "../../../utils/changeTabTitle";
import { Budget, Concept, ProductStatus, Utility } from "../../../types/type.enum";
import LoadingModal from "../../../components/modal/loading";
import axios from "axios";
import { FaPen } from "react-icons/fa6";
import { Border, modules } from "../../../styles/styles";
import 'react-quill/dist/quill.snow.css'
import ReactQuill from 'react-quill';

const CreateServicePage = () => {
    const [productName, setProductName] = useState<string>("");
    const [price, setPrice] = useState<string>("");
    const [budgetLevel, setBudgetLevel] = useState<Budget | undefined>(undefined);
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
            partnerId: 1,
            description,
            image: imageUrl,
            price,
            budgetLevel,
            weddingConcept: Concept.TRADITIONAL,
            utility,
            status: ProductStatus.AVAILABLE,
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
                handleReset();
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
            productName !== '' &&
            price !== '' &&
            budgetLevel !== undefined &&  // Modify the condition if Budget.LOW is a valid default
            description !== '' &&
            utility !== undefined &&  // Modify if Utility.CLOTHES is a valid default
            image !== '' &&
            imageData !== null
        );
    };

    const handleReset = () => {
        setProductName('');
        setPrice('');
        setBudgetLevel(undefined);  // Reset to the default budget level
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
            <HStack gap={28} align={"flex-start"} mb={10}>
                <Stack w={'full'} justify={'center'} align={'center'} flex={1} pos={'relative'}>
                    {image ? (
                        <Image
                            border='1px solid gainsboro'
                            src={
                                image
                            }
                            h={450}
                            w={416}
                            bgColor='white'
                            objectFit={'cover'}
                        />
                    ) : (
                        <Stack justify={'center'} align={'center'} w={416} h={450} border='1px solid gainsboro'>
                            <Text>Thêm ảnh vào đây</Text>
                        </Stack>
                    )}
                    <FormLabel
                        htmlFor="avt"
                        cursor='pointer'
                        fontSize='md'
                        mt={4}
                        pos={'absolute'}
                        bottom={-16}
                    >
                        <HStack>
                            <FaPen />
                            <Text fontSize={15}>{image ? 'Thay ảnh' : 'Thêm ảnh'}</Text>
                        </HStack>
                    </FormLabel>
                    <Input
                        type="file"
                        id="avt"
                        accept="image/*"
                        onChange={handleAvatarChange}
                        display='none'
                    />
                </Stack>

                <Stack gap={3} flex={1}>
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
                        <ReactQuill
                            theme='snow'
                            value={description}
                            onChange={setDescription}
                            placeholder='Mô tả'
                            modules={modules}
                            className='content-input'
                        />
                    </FormControl>

                    <FormControl id="price" isRequired>
                        <FormLabel>Giá tiền (VND)</FormLabel>
                        <InputGroup>
                            <Input
                                type="text"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                placeholder="Giá tiền"
                            />
                            <InputRightAddon fontFamily={'Noto Sans JP'}>
                                VND
                            </InputRightAddon>
                        </InputGroup>
                    </FormControl>
                    <FormControl id="budgetLevel" isRequired>
                        <FormLabel>Phân khúc ngân sách</FormLabel>
                        <Select
                            value={budgetLevel}
                            onChange={(e) => setBudgetLevel(e.target.value as Budget)}
                            placeholder="Chọn phân khúc"
                        >
                            {Object.values(Budget).map((budget) => (
                                <option key={budget} value={budget}>
                                    {budget === Budget.LOW ? 'Thấp' :
                                        budget === Budget.MEDIUM ? 'Trung bình' :
                                            budget === Budget.HIGH ? 'Cao' : 'Cao cấp'}
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
                                    {utility === Utility.CLOTHES ? 'Trang phục' :
                                        utility === Utility.MAKEUP ? 'Trang điểm' :
                                            utility === Utility.PHOTOGRAPHY ? 'Chụp ảnh cưới' :
                                                utility === Utility.FLOWERS ? 'Hoa cưới' :
                                                    utility === Utility.RESTAURANTCONCEPT ? 'Concept Nhà hàng' : 'Thiệp cưới'}
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
                    Tạo mới
                </Button>
            </HStack>

            <LoadingModal isOpen={isOpenLoading} onClose={onCloseLoading} />
        </Stack>
    );
};

export default CreateServicePage;
