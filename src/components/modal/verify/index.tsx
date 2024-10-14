import { Button, FormControl, FormLabel, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, PinInput, PinInputField, Stack, Text, useToast } from "@chakra-ui/react";
import { Border } from "../../../styles/styles";
import { FormEvent, useEffect, useState } from "react";
import ApiClient from "../../../services/apiClient";
import { useNavigate } from "react-router";
import { AxiosError } from "axios";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    email: string;
    sendTime: number;
}

const VerifyModal = ({ isOpen, onClose, email, sendTime }: Props) => {
    const [otp, setOtp] = useState<string>('');
    const [sendBack, setSendBack] = useState<boolean>(false);
    const [time, setTime] = useState<number>(sendTime);
    const toast = useToast();
    const navigate = useNavigate();

    const getVerifyCode = async (email: string) => {
        const api = new ApiClient<any>('/auth/requestOTP');
        try {
            const response = await api.getUnauthen({
                params: {
                    email
                }
            });
            if (!response.isSuccess) {
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

    const handleRecover = async (e: FormEvent) => {
        e.preventDefault();
        const api = new ApiClient<any>('/auth/validateOTP');
        const data = {
            email,
            otp
        };

        try {
            const response = await api.postUnauthen(data);

            if (response.isSuccess) {
                toast({
                    title: "Thành công",
                    description: response.message,
                    status: "success",
                    duration: 2500,
                    position: 'top',
                    isClosable: true,
                });
                onClose();
                navigate('/login');
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
    };

    useEffect(() => {
        if (time > 0) {
            const timerId = setInterval(() => {
                setTime(prevTime => prevTime - 1);
            }, 1000);

            return () => clearInterval(timerId);
        } else {
            setSendBack(true);
        }
    }, [time]);

    const resendCode = () => {
        getVerifyCode(email);
        setTime(sendTime);
        setSendBack(false);
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
            <ModalOverlay backdropFilter={'blur(5px)'} />
            <ModalContent>
                <ModalHeader fontSize='xl'>Lấy lại mật khẩu</ModalHeader>
                <ModalCloseButton />
                <ModalBody pt={6} pb='4rem' borderY={Border.tableBorder}>
                    <Stack gap={6}>
                        <FormControl id="verificationCode">
                            <FormLabel pl={1}>Mã xác nhận</FormLabel>
                            <HStack w={'full'} justify={'space-evenly'}>
                                <PinInput size={'lg'} value={otp} onChange={setOtp}>
                                    <PinInputField borderColor={'black'} _hover={{ borderColor: 'gray' }} />
                                    <PinInputField borderColor={'black'} _hover={{ borderColor: 'gray' }} />
                                    <PinInputField borderColor={'black'} _hover={{ borderColor: 'gray' }} />
                                    <PinInputField borderColor={'black'} _hover={{ borderColor: 'gray' }} />
                                    <PinInputField borderColor={'black'} _hover={{ borderColor: 'gray' }} />
                                    <PinInputField borderColor={'black'} _hover={{ borderColor: 'gray' }} />
                                </PinInput>
                            </HStack>
                        </FormControl>
                        {sendBack ? (
                            <Text
                                cursor={'pointer'}
                                fontSize={14}
                                textAlign={'center'}
                                onClick={resendCode}
                            >
                                Gửi lại mã xác nhận
                            </Text>
                        ) : (
                            <Text fontSize={14} textAlign={'center'}>Gửi lại mã xác nhận trong {time} giây</Text>
                        )}
                    </Stack>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme='green' mr={3} onClick={handleRecover}>
                        Xác nhận
                    </Button>
                    <Button onClick={onClose}>Hủy</Button>
                </ModalFooter>
            </ModalContent>
        </Modal >
    )
}

export default VerifyModal;