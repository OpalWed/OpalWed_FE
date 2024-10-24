import { Box, Button, HStack, Image, Stack, Text } from "@chakra-ui/react"
import { FaX } from "react-icons/fa6";
import { Concept } from "../../../../types/type.enum";

interface Prop {
    productName: string;
    color?: string;
    concept?: Concept;
    onRemove: () => void;
}

const ConfirmDesignProductItem = ({ productName, color, concept, onRemove }: Prop) => {
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
                onClick={onRemove}
            >
                <FaX />
            </Button>

            <HStack align="center" alignItems={'flex-start'}>
                <Box w="100px" h="100px" borderRadius="20%" overflow="hidden" mr="20px">
                    <Image
                        src={'https://www.mouawad.com/dw/image/v2/BJJG_PRD/on/demandware.static/-/Library-Sites-MouawadSharedLibrary/default/dwe3fe2448/M-CLASSIQUE/m-classique-1.png'}
                        objectFit="cover"
                        w="100%"
                        h="100%" />
                </Box>
                <Stack gap={3}>
                    <Box textAlign="left">
                        <Text fontWeight={500} fontFamily={'Noto Sans JP'} fontSize={17}>
                            {productName}
                        </Text>
                    </Box>
                    <Stack gap={1}>
                        {concept && (
                            <Text fontSize={14} fontFamily={'Noto Sans JP'}>Ý tưởng: {concept === Concept.TRADITIONAL
                                ? "Truyền thống" : concept === Concept.EUROPE
                                    ? "Châu Âu" : concept === Concept.MINIMALISM
                                        ? "Tối giản" : "Cổ điển"}</Text>
                        )}
                        {color && (
                            <Text fontSize={14} fontFamily={'Noto Sans JP'}>Màu sắc: {color}</Text>
                        )}
                    </Stack>
                </Stack>
            </HStack>
        </Box>
    )
}

export default ConfirmDesignProductItem