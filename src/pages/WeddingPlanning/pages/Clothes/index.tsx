import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Heading, HStack, SimpleGrid, Stack } from "@chakra-ui/react";
import { ArrowForward } from "@mui/icons-material";
import { changeTabTitle } from "../../../../utils/changeTabTitle";
import ProductItem from "../../components/product_item";
import WeddingCart from "../../../../components/wedding_cart";
import useProduct from "../../../../hooks/useProduct";
import { Budget, Utility } from "../../../../types/type.enum";
import { Product } from "../../../../types/Product";
import Loading from "../../../../components/loading";

const ClothesPage = () => {
    const param = useParams<{ budget: string }>();
    const navigate = useNavigate();
    const [products, setProducts] = useState<Product[]>([]);
    const [budgetLevel, setBudgetLevel] = useState<Budget>(Budget.LOW);

    const utilityType: Utility = Utility.CLOTHES;
    const { data, isLoading } = useProduct({ budgetLevel, utilityType });

    useEffect(() => {
        changeTabTitle('Trang phục');
    }, []);



    useEffect(() => {
        if (param.budget) {
            const budgetKey = param.budget.toUpperCase() as keyof typeof Budget;

            if (Budget[budgetKey]) {
                setBudgetLevel(Budget[budgetKey]);
            } else {
                console.warn("Invalid budget value:", param.budget);
            }
        }
    }, [param.budget]);

    useEffect(() => {
        if (data?.content) {
            setProducts(data.content);
        }
    }, [data?.content]);

    return (
        <Stack w={'6xl'} mx={'auto'} my={10} gap={5}>
            <Heading>Trang phục</Heading>
            {!isLoading ? (
                <SimpleGrid
                    columns={4}
                    spacingX={8}
                    spacingY={6}
                    maxW={'full'}
                    mx={'auto'}
                    pb={8}
                >
                    {products.map(product => (
                        <ProductItem type="clothes" product={product} />
                    ))}

                </SimpleGrid>
            ) : (
                <Stack minH={'calc(100vh - 50px - 11rem - 64px)'}>
                    <Loading />
                </Stack>
            )}
            <WeddingCart />
            <HStack justify={'flex-end'}>
                <Button variant={'ghost'} rightIcon={<ArrowForward />} onClick={() => navigate(`/wedding-planning/${param.budget}/accessories`)}>
                    Sang mục tiếp theo
                </Button>
            </HStack>
        </Stack>
    )
}

export default ClothesPage