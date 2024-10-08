import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, HStack, SimpleGrid, Stack } from "@chakra-ui/react";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { changeTabTitle } from "../../../../utils/changeTabTitle";
import ProductItem from "../../components/product_item";

const ClothesPage = () => {
    const param = useParams<{ concept: string }>();
    const navigate = useNavigate();

    useEffect(() => {
        changeTabTitle('Trang phục');
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
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </SimpleGrid>
            <HStack justify={'space-between'}>
                <Button variant={'ghost'} leftIcon={<ArrowBack />} onClick={() => navigate(-1)}>
                    Trở lại mục phía trước
                </Button>
                <Button variant={'ghost'} rightIcon={<ArrowForward />} onClick={() => navigate('/wedding-concept/:concept/:segment/restaurants')}>
                    Sang mục tiếp theo
                </Button>
            </HStack>
        </Stack>
    )
}

export default ClothesPage