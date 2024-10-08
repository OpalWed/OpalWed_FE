import { Box, Text, HStack, Stack, UnorderedList, ListItem, Divider, Button, useDisclosure } from "@chakra-ui/react";
import ConfirmDesignProductItem from "../../components/confirm_design_product_item";
import NotifyDesignModal from "../../../../components/modal/notify_design";

const ConfirmDesignPage = () => {
    const { isOpen, onClose, onOpen } = useDisclosure();

    return (
        <HStack gap={20} my={10} w={'6xl'} mx={'auto'} align={'flex-start'}>
            {/* Cart Container */}
            <Box
                flex="1"
                m="10px"
                p="20px"
                pb="0"
                bg="white"
                borderRadius="8px"
                border="1px solid #ccc"
            >
                <Text color="#4CAF50" fontSize="21px" mt="0" mb="20px">
                    Sản phẩm
                </Text>
                <Divider mb={3} />
                <Box maxHeight="645px" overflowY="auto" css={{
                    '&::-webkit-scrollbar': { width: '4px' },
                    '&::-webkit-scrollbar-track': { backgroundColor: '#f1f1f1' },
                    '&::-webkit-scrollbar-thumb': { backgroundColor: 'gainsboro', borderRadius: '4px' },
                    '&::-webkit-scrollbar-thumb:hover': { backgroundColor: '#d1cece' }
                }}>
                    <ConfirmDesignProductItem />
                    <ConfirmDesignProductItem />
                    <ConfirmDesignProductItem />
                    <ConfirmDesignProductItem />
                    <ConfirmDesignProductItem />
                    <ConfirmDesignProductItem />
                </Box>
            </Box>

            <Box
                flex="1"
                m="10px"
                p="20px"
                bg="white"
                borderRadius="8px"
                border="1px solid #ccc"
            >
                <Text color="#4CAF50" fontSize="21px" mt="0" mb="20px">
                    Thống kê
                </Text>
                <Divider />
                {/* Customer Information */}
                <Stack p="15px" mb="10px" gap={4}>
                    {/* Payment Section */}
                    <Stack gap={0}>
                        <Text>Trang phục</Text>
                        <UnorderedList ml={12}>
                            <ListItem>Lorem ipsum dolor sit amet</ListItem>
                            <ListItem>Consectetur adipiscing elit</ListItem>
                            <ListItem>Integer molestie lorem at massa</ListItem>
                            <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                        </UnorderedList>
                    </Stack>
                    <Stack gap={0}>
                        <Text>Phụ kiện</Text>
                        <UnorderedList ml={12}>
                            <ListItem>Lorem ipsum dolor sit amet</ListItem>
                            <ListItem>Consectetur adipiscing elit</ListItem>
                            <ListItem>Integer molestie lorem at massa</ListItem>
                            <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                        </UnorderedList>
                    </Stack>
                    <Stack gap={0}>
                        <Text>Nhà hàng</Text>
                        <UnorderedList ml={12}>
                            <ListItem>Lorem ipsum dolor sit amet</ListItem>
                            <ListItem>Consectetur adipiscing elit</ListItem>
                            <ListItem>Integer molestie lorem at massa</ListItem>
                            <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                        </UnorderedList>
                    </Stack>
                </Stack>
                <Divider mb={5} />
                <Button w={'full'} onClick={onOpen}>Xác nhận đăng ký tư vấn</Button>
            </Box>
            <NotifyDesignModal
                isOpen={isOpen}
                onClose={onClose}
                type="confirm-design"
            />
        </HStack >
    );
};

export default ConfirmDesignPage;
