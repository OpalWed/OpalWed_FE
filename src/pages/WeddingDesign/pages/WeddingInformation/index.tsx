import { Stack, Button, FormControl, FormLabel, Input, Select, Heading, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { changeTabTitle } from "../../../../utils/changeTabTitle";
import { useNavigate } from "react-router-dom";
import { today } from "../../../../utils/formatTime";

const WeddingInformationPage = () => {
    const [fullName, setFullName] = useState<string>("");
    const [segment, setSegment] = useState<string>("");
    const [place, setPlace] = useState<string>("");
    const [weddingDate, setWeddingDate] = useState<string>("");
    const fullNameRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
        changeTabTitle('Thông tin tiệc cưới');
        fullNameRef.current?.focus();
    }, []);

    return (
        <Stack
            align={'center'}
            justify={'center'}
            gap={8}
        >
            <Heading>Thông tin tiệc cưới</Heading>
            <Text w={'lg'}>
                Bảng lập kế hoạch này sẽ giúp các bạn định hình ý tưởng của mình, hãy cùng với đội ngũ nhà OPAL WED thực hiện nhé!
            </Text>
            <Stack
                w={'md'}
                gap={5}
                mx={'auto'}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                    }
                }}
            >
                <FormControl id="fullName">
                    <FormLabel pl={1}>Tên khách hàng</FormLabel>
                    <Input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        ref={fullNameRef}
                        placeholder="Tên khách hàng"
                    />
                </FormControl>
                <FormControl id="segment" flex={1} isRequired>
                    <FormLabel pl={1}>Phân khúc</FormLabel>
                    <Select
                        name="segment"
                        value={segment}
                        onChange={e => setSegment(e.target.value)}
                        placeholder={'Chọn phân khúc'}
                        colorScheme="gray"
                    >
                        <option value="low">
                            Thấp
                        </option>
                        <option value="medium">
                            Trung bình
                        </option>
                        <option value="high">
                            Cao
                        </option>
                        <option value="premium">
                            Cao cấp
                        </option>
                    </Select>
                </FormControl>
                <FormControl id="place">
                    <FormLabel pl={1}>Khu vực</FormLabel>
                    <Input
                        type="text"
                        value={place}
                        onChange={(e) => setPlace(e.target.value)}
                        placeholder="Khu vực"
                    />
                </FormControl>
                <FormControl id="weddingDate">
                    <FormLabel pl={1}>Ngày cưới dự định</FormLabel>
                    <Input
                        type="date"
                        value={weddingDate}
                        onChange={(e) => setWeddingDate(e.target.value)}
                        min={today}
                    />
                </FormControl>
                <Button
                    bg={'#0C2948'}
                    _hover={{ bg: '#143252' }}
                    color={'white'}
                    fontWeight={'400'}
                    onClick={() => navigate(segment)}
                >
                    Tiếp theo
                </Button>
            </Stack>
        </Stack>
    );
};

export default WeddingInformationPage;
