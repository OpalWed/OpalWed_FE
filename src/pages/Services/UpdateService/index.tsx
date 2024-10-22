import { Button, FormControl, FormLabel, HStack, Image, Input, Select, Stack, Textarea, useDisclosure, useToast } from "@chakra-ui/react";
import { FormEvent, useEffect, useState } from "react";
import ApiClient from "../../../services/apiClient";
import { changeTabTitle } from "../../../utils/changeTabTitle";
import { FaPen } from "react-icons/fa6";
import axios from "axios";
import { Border } from "../../../styles/styles";
import LoadingModal from "../../../components/modal/loading";
import { Budget, Concept, Status, Utility } from "../../../types/type.enum";
import { initialProduct, Product } from "../../../types/Product";
import { useParams } from "react-router-dom";

const UpdateServicePage = () => {
    const [productName, setProductName] = useState<string>("");
    const [partnerId, setPartnerId] = useState<number>(0);
    const [price, setPrice] = useState<string>("");
    const [budgetLevel, setBudgetLevel] = useState<Budget | undefined>(undefined);
    const [weddingConcept, setWeddingConcept] = useState<Concept | undefined>(undefined);
    const [description, setDescription] = useState<string>("");
    const [utility, setUtility] = useState<Utility | undefined>(undefined);
    const [image, setImage] = useState<string>("");
    const [imageData, setImageData] = useState<File | null>(null);
    const [service, setService] = useState<Product>(initialProduct);
    const param = useParams<{ id: string }>();

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

    const getServiceDetailById = async (id: number) => {
        onOpenLoading();
        try {
            const api = new ApiClient<any>("/manage/product");
            const response = await api.getDetail(id);
            if (response.success) {
                setService(response.data);
            } else {
                toast({
                    title: "Error",
                    description: response.message,
                    status: "error",
                    duration: 2500,
                    position: "top",
                    isClosable: true,
                });
            }
        } catch (error) {
            // navigate("/not-found");
        } finally {
            onCloseLoading();
        }
    };

    const handleUpdate = async (e: FormEvent) => {
        e.preventDefault();
        const api = new ApiClient<any>("/manage-product");
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
            const response = await api.update(data);

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
            partnerId !== 0 &&
            price.trim() !== '' &&
            budgetLevel !== undefined &&  // Modify the condition if Budget.LOW is a valid default
            weddingConcept !== undefined &&  // Modify the condition if Concept.EUROPE is a valid default
            description.trim() !== '' &&
            utility !== undefined &&  // Modify if Utility.CLOTHES is a valid default
            image.trim() !== ''
        );
    };

    const handleReset = () => {
        setProductName(service.productName);
        setPartnerId(service.partnerId);
        setPrice(service.price);
        setBudgetLevel(service.budgetLevel);  // Reset to the default budget level
        setWeddingConcept(service.weddingConcept);  // Reset to the default wedding concept
        setDescription(service.description);
        setUtility(service.utility);  // Reset to the default utility
        setImage(service.image);
        setImageData(null);  // Reset file input
    };

    useEffect(() => {
        changeTabTitle("Tạo dịch vụ");
    }, []);

    useEffect(() => {
        if (param.id) {
            getServiceDetailById(parseInt(param.id));
        }
    }, [param.id]);

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
                            onChange={(e) => setBudgetLevel(e.target.value as Budget | undefined)}
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
                            onChange={(e) => setWeddingConcept(e.target.value as Concept | undefined)}
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
                            onChange={(e) => setUtility(e.target.value as Utility | undefined)}
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
                    onClick={handleUpdate}
                    isDisabled={!areAllFieldsFilled()}
                >
                    Update
                </Button>
            </HStack>

            <LoadingModal isOpen={isOpenLoading} onClose={onCloseLoading} />
        </Stack>
    );
}

export default UpdateServicePage;