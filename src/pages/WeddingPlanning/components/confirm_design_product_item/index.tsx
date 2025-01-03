import { Box, Button, HStack, Image, Stack, Text } from "@chakra-ui/react"
import { FaX } from "react-icons/fa6";
import { Concept } from "../../../../types/type.enum";

interface Prop {
    image: string;
    productName: string;
    color?: string;
    concept?: Concept;
    note?: string
    onRemove: () => void;
}

const ConfirmDesignProductItem = ({ image, productName, color, concept, note, onRemove }: Prop) => {
    return (
        <Box
            p="15px"
            m="10px"
            borderRadius="8px"
            border="1px solid"
            borderColor={'pink'}
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
                fontSize="12px"
                borderRadius="50%"
                px={2}
                float="right"
                _hover={{ bg: "rgba(255, 0, 0, 0.2)" }}
                onClick={onRemove}
            >
                <FaX />
            </Button>

            <HStack align="center" alignItems={'flex-start'}>
                <Box w="100px" h="100px" borderRadius="20%" overflow="hidden" mr="20px">
                    <Image
                        src={image}
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
                        {note && (
                            <Text fontSize={14} fontFamily={'Noto Sans JP'}>Ghi chú: {note}</Text>
                        )}
                    </Stack>
                </Stack>
            </HStack>
        </Box>
    )
}

export default ConfirmDesignProductItem