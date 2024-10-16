import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, HStack, SimpleGrid, Stack } from "@chakra-ui/react";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { changeTabTitle } from "../../../../utils/changeTabTitle";
import ProductItem from "../../components/product_item";
import WeddingCart from "../../../../components/wedding_cart";
import useProduct from "../../../../hooks/useProduct";
import { Budget, Concept, Utility } from "../../../../types/type.enum";

const ClothesPage = () => {
    const param = useParams<{ concept: string, budget: string }>();
    const navigate = useNavigate();
    const [budgetLevel, setBudgetLevel] = useState<Budget>(Budget.LOW);
    const [weddingConcept, setWeddingConcept] = useState<Concept>(Concept.MINIMALISM);
    const utilityType: Utility = Utility.CLOTHES;
    const { data } = useProduct({ budgetLevel, weddingConcept, utilityType });

    useEffect(() => {
        changeTabTitle('Trang phục');
    }, []);

    useEffect(() => {
        if (param.concept) {
            const conceptKey = param.concept.toUpperCase() as keyof typeof Concept;

            if (Concept[conceptKey]) {
                setWeddingConcept(Concept[conceptKey]);
            } else {
                console.warn("Invalid concept value:", param.concept);
            }
        }
    }, [param.concept]);

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

    console.log(data);


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
                <ProductItem type="clothes" />
                <ProductItem type="clothes" />
                <ProductItem type="clothes" />
                <ProductItem type="clothes" />
                <ProductItem type="clothes" />
                <ProductItem type="clothes" />
                <ProductItem type="clothes" />
                <ProductItem type="clothes" />
            </SimpleGrid>
            <WeddingCart />
            <HStack justify={'space-between'}>
                <Button variant={'ghost'} leftIcon={<ArrowBack />} onClick={() => navigate(-1)}>
                    Trở lại mục phía trước
                </Button>
                <Button variant={'ghost'} rightIcon={<ArrowForward />} onClick={() => navigate(`/wedding-planning/${param.concept}/${param.budget}/restaurants`)}>
                    Sang mục tiếp theo
                </Button>
            </HStack>
        </Stack>
    )
}

export default ClothesPage