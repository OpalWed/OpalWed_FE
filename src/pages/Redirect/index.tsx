import { HStack, Image, Spinner, Stack, Text, useToast } from "@chakra-ui/react";
import { AxiosError } from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { PaymentStatus } from "../../types/type.enum";
import ApiClient from "../../services/apiClient";

const RedirectPage = () => {
    const toast = useToast();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const id = searchParams.get('orderCode');
    const paymentStatus: PaymentStatus | null = searchParams.get('status') as PaymentStatus;
    const handleUpdatePayment = async (id: number, paymentStatus: PaymentStatus) => {
        const api = new ApiClient<any>(`/application/${id}/${paymentStatus}`);
        try {
            const response = await api.update({});
            if (response.isSuccess) {
                navigate('/');
            } else {
                toast({
                    title: "Xảy ra lỗi",
                    description: response.message || "Đã có lỗi xảy ra",
                    status: "error",
                    duration: 2500,
                    position: 'top',
                    isClosable: true,
                });
                navigate('/');
            }
        } catch (error) {
            if (error instanceof AxiosError) {
                toast({
                    title: "Xảy ra lỗi",
                    description: error.response?.data?.message || "Đã có lỗi xảy ra",
                    status: "error",
                    duration: 2500,
                    position: 'top',
                    isClosable: true,
                });
            }
        }
    }

    if (id && paymentStatus) {
        handleUpdatePayment(parseInt(id), paymentStatus);
    }

    return (
        <Stack
            h={'100vh'}
            w={'full'}
            align={'center'}
            justify={'center'}
            gap={10}
        >
            <Image
                src="/opalwed_web_logo.jpg"
                h={24}
                w={'auto'}
            />
            <HStack gap={8}>
                <Spinner w={50} h={50} />
                <Text fontSize={22}>Chuyển trang...</Text>
            </HStack>
        </Stack>
    )
}

export default RedirectPage