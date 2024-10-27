import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AbsoluteCenter, Box, Button, Divider, HStack, SimpleGrid, Stack, Step, StepDescription, StepIcon, StepIndicator, StepNumber, Stepper, StepSeparator, StepStatus, StepTitle, Text, useSteps } from "@chakra-ui/react";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { changeTabTitle } from "../../../../utils/changeTabTitle";
import ProductItem from "../../components/product_item";
import WeddingCart from "../../../../components/wedding_cart";
import { Budget, Utility } from "../../../../types/type.enum";
import useProduct from "../../../../hooks/useProduct";
import { Product } from "../../../../types/Product";
import Loading from "../../../../components/loading";
import { useWedding } from "../../../../hooks/useWedding";

const steps = [
    { title: 'Bước 1', description: 'Trang phục' },
    { title: 'Bước 2', description: 'Trang điểm' },
    { title: 'Bước 3', description: 'Hoa cưới' },
    { title: 'Bước 4', description: 'Chụp ảnh cưới' },
    { title: 'Bước 5', description: 'Concept Nhà hàng' },
    { title: 'Bước 6', description: 'Thiệp cưới' },
]

const RestaurantConceptPage = () => {
    const param = useParams<{ budget: string }>();
    const navigate = useNavigate();
    const [products, setProducts] = useState<Product[]>([]);
    const [budgetLevel, setBudgetLevel] = useState<Budget>(Budget.LOW);
    const { restaurantConcept } = useWedding();
    const utilityType: Utility = Utility.RESTAURANTCONCEPT;
    const { data, isLoading } = useProduct({ budgetLevel, utilityType });
    const { activeStep } = useSteps({
        index: 5,
        count: steps.length,
    })

    useEffect(() => {
        changeTabTitle('Concept nhà hàng tiệc cưới');
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
        <>
            <Stack w={'8xl'} mx={'auto'} mt={10}>
                <Stepper index={activeStep} colorScheme="green">
                    {steps.map((step, index) => (
                        <Step key={index}>
                            <StepIndicator>
                                <StepStatus
                                    complete={<StepIcon />}
                                    incomplete={<StepNumber />}
                                    active={<StepNumber />}
                                />
                            </StepIndicator>
                            <Box flexShrink='0'>
                                <StepTitle fontFamily={'Hatton'}>{step.title}</StepTitle>
                                <StepDescription fontFamily={'Noto Sans JP'}>{step.description}</StepDescription>
                            </Box>
                            <StepSeparator />
                        </Step>
                    ))}
                </Stepper>
            </Stack>
            <Stack w={'6xl'} mx={'auto'} my={10} gap={5} pos={'relative'}>
                <Box position='relative' mb={10}>
                    <Divider borderColor={'black'} />
                    <AbsoluteCenter fontSize={48} bg={'white'} px={6} fontFamily={'Hatton'}>
                        Concept nhà hàng
                    </AbsoluteCenter>
                </Box>
                {restaurantConcept.length === 0 && (
                    <Button pos={'absolute'} top={2} right={0} variant={'outline'} onClick={() => navigate(`/wedding-planning/${param.budget}/invitations`)}>
                        Bỏ qua
                    </Button>
                )}
                {!isLoading ? (
                    <>
                        {products.length > 0 ? (
                            <SimpleGrid
                                columns={4}
                                spacingX={8}
                                spacingY={6}
                                maxW={'full'}
                                mx={'auto'}
                            >
                                {products.map(product => (
                                    <ProductItem type="restaurantConcept" product={product} />
                                ))}
                            </SimpleGrid>
                        ) : (
                            <Stack minH={'calc(100vh - 50px - 16.8rem - 64px)'}>
                                <Text>Không có dịch vụ</Text>
                            </Stack>
                        )}
                    </>
                ) : (
                    <Stack minH={'calc(100vh - 50px - 16.8rem - 64px)'}>
                        <Loading />
                    </Stack>
                )}
                <WeddingCart />
                <HStack justify={'space-between'}>
                    <Button variant={'ghost'} leftIcon={<ArrowBack />} onClick={() => navigate(-1)}>
                        Bước phía trước
                    </Button>
                    <Button variant={'ghost'} rightIcon={<ArrowForward />} onClick={() => navigate(`/wedding-planning/${param.budget}/invitations`)}>
                        {restaurantConcept.length > 0 ? 'Bước tiếp theo' : 'Bỏ qua'}
                    </Button>
                </HStack>
            </Stack>
        </>
    )
}

export default RestaurantConceptPage