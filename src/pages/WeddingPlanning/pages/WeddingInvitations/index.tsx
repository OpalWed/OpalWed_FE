import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Heading, HStack, SimpleGrid, Stack, useDisclosure } from "@chakra-ui/react";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { changeTabTitle } from "../../../../utils/changeTabTitle";
import ProductItem from "../../components/product_item";
import NotifyDesignModal from "../../../../components/modal/notify_design";
import WeddingCart from "../../../../components/wedding_cart";
import { Budget, Utility } from "../../../../types/type.enum";
import useProduct from "../../../../hooks/useProduct";
import { Product } from "../../../../types/Product";
import Loading from "../../../../components/loading";

const WeddingInvitationsPage = () => {
    const navigate = useNavigate();
    const param = useParams<{ budget: string }>();
    const { isOpen, onClose, onOpen } = useDisclosure();
    const [products, setProducts] = useState<Product[]>([]);
    const [budgetLevel, setBudgetLevel] = useState<Budget>(Budget.LOW);

    const utilityType: Utility = Utility.INVITATIONS;
    const { data, isLoading } = useProduct({ budgetLevel, utilityType });

    useEffect(() => {
        changeTabTitle('Thiệp cưới');
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
            <Heading>Thiệp cưới</Heading>
            {isLoading ? (
                <SimpleGrid
                    columns={4}
                    spacingX={8}
                    spacingY={6}
                    maxW={'full'}
                    mx={'auto'}
                    pb={8}
                >
                    {products.map(product => (
                        <ProductItem type="weddingInvitations" product={product} />
                    ))}

                </SimpleGrid>
            ) : (
                <Stack minH={'calc(100vh - 50px - 11rem - 64px)'}>
                    <Loading />
                </Stack>
            )}
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
                handleCheckout={() => { }}
            />
        </Stack>
    )
}

export default WeddingInvitationsPage