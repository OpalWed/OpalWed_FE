import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, HStack, SimpleGrid, Stack } from "@chakra-ui/react";
import { ArrowForward } from "@mui/icons-material";
import { changeTabTitle } from "../../../../utils/changeTabTitle";
import ProductItem from "../../components/product_item";
import WeddingCart from "../../../../components/wedding_cart";

const AccessoriesPage = () => {
    const param = useParams<{ concept: string, budget: string }>();
    const navigate = useNavigate();

    useEffect(() => {
        changeTabTitle('Phụ kiện');
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
                <ProductItem type="accessories" />
                <ProductItem type="accessories" />
                <ProductItem type="accessories" />
                <ProductItem type="accessories" />
                <ProductItem type="accessories" />
                <ProductItem type="accessories" />
                <ProductItem type="accessories" />
                <ProductItem type="accessories" />
            </SimpleGrid>
            <WeddingCart />
            <HStack justify={'flex-end'}>
                <Button variant={'ghost'} rightIcon={<ArrowForward />} onClick={() => navigate(`/wedding-planning/${param.concept}/${param.budget}/clothes`)}>
                    Sang mục tiếp theo
                </Button>
            </HStack>
        </Stack>
    )
}

export default AccessoriesPage