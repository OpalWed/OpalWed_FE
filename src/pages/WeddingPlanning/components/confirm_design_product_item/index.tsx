import { Box, Button, HStack, Image, Stack, Text } from "@chakra-ui/react"
import { FaTrashAlt } from "react-icons/fa"

interface Prop {
    productName: string;
}

const ConfirmDesignProductItem = ({ productName }: Prop) => {
    return (
        <Box
            p="15px"
            m="10px"
            borderRadius="8px"
            border="1px solid #e4e4e4"
            bg="white"
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
            transition="transform 0.2s, box-shadow 0.3s"
            _hover={{
                transform: "scale(1.02)",
                boxShadow: "0 6px 10px rgba(0, 0, 0, 0.2)",
                bg: "#f7f7f7",
            }}
        >
            <Button
                bg="white"
                color="black"
                fontSize="16px"
                p="9px 10px"
                borderRadius="50%"
                float="right"
                _hover={{ bg: "rgba(255, 0, 0, 0.2)" }}
            >
                <FaTrashAlt />
            </Button>

            <HStack align="center" alignItems={'flex-start'}>
                <Box w="100px" h="100px" borderRadius="20%" overflow="hidden" mr="20px">
                    <Image
                        src={'https://www.mouawad.com/dw/image/v2/BJJG_PRD/on/demandware.static/-/Library-Sites-MouawadSharedLibrary/default/dwe3fe2448/M-CLASSIQUE/m-classique-1.png'}
                        objectFit="cover"
                        w="100%"
                        h="100%" />
                </Box>
                <Stack gap={4}>
                    <Box textAlign="left">
                        <Text fontWeight={500}>
                            {productName}
                        </Text>
                    </Box>
                    <Stack gap={1}>
                        <Text fontSize={14}>Brand: brand</Text>
                        <Text fontSize={14}>Model: model</Text>
                    </Stack>
                </Stack>
            </HStack>
        </Box>
    )
}

export default ConfirmDesignProductItem