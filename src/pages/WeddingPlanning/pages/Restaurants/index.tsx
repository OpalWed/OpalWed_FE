import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, HStack, SimpleGrid, Stack, useDisclosure } from "@chakra-ui/react";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { changeTabTitle } from "../../../../utils/changeTabTitle";
import ProductItem from "../../components/product_item";
import NotifyDesignModal from "../../../../components/modal/notify_design";
import WeddingCart from "../../../../components/wedding_cart";

const RestaurantsPage = () => {
    const navigate = useNavigate();
    const { isOpen, onClose, onOpen } = useDisclosure();

    useEffect(() => {
        changeTabTitle('Nhà hàng');
    }, []);

    return (
        <Stack w={'6xl'} mx={'auto'} my={10}>
            <SimpleGrid
                columns={4}
                spacingX={8}
                spacingY={6}
                maxW={'full'}
                mx={'auto'}
                pb={8}
            >
                <ProductItem type="restaurants" />
                <ProductItem type="restaurants" />
                <ProductItem type="restaurants" />
                <ProductItem type="restaurants" />
                <ProductItem type="restaurants" />
                <ProductItem type="restaurants" />
                <ProductItem type="restaurants" />
                <ProductItem type="restaurants" />
            </SimpleGrid>
            <WeddingCart />
            <HStack justify={'space-between'}>
                <Button variant={'ghost'} leftIcon={<ArrowBack />} onClick={() => navigate(-1)}>
                    Trở lại mục phía trước
                </Button>
                <Button variant={'ghost'} rightIcon={<ArrowForward />} onClick={onOpen}>
                    Hoàn tất thiết kế
                </Button>
            </HStack>
            <NotifyDesignModal
                isOpen={isOpen}
                onClose={onClose}
                type="finish"
            />
        </Stack>
    )
}

export default RestaurantsPage