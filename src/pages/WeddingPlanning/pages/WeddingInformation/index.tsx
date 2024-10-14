import { Stack, Button, FormControl, FormLabel, Input, Select, Heading, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { changeTabTitle } from "../../../../utils/changeTabTitle";
import { useNavigate, useParams } from "react-router-dom";
import { today } from "../../../../utils/formatTime";
import { useWedding } from "../../../../hooks/useWedding";
import useProfile from "../../../../hooks/useProfile";

const WeddingInformationPage = () => {
    const fullNameRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const param = useParams<{ concept: string }>();
    const [segmentPrice, setSegmentPrice] = useState<string>('');
    const { fullName, segment, place, weddingDate, setWeddingInfo } = useWedding();
    const { data } = useProfile();

    const areAllFieldsFilled = () => {
        return (
            fullName !== '' &&
            segment !== '' &&
            place !== '' &&
            weddingDate !== ''
        );
    };

    useEffect(() => {
        changeTabTitle('Thông tin tiệc cưới');
        fullNameRef.current?.focus();
    }, []);

    useEffect(() => {
        if (data?.fullName) {
            setWeddingInfo({ fullName: data?.fullName });
        }
    }, [data?.fullName]);

    useEffect(() => {
        if (segment == 'thấp') {
            setSegmentPrice('low');
        } else if (segment == 'trung bình') {
            setSegmentPrice('medium');
        } else if (segment == 'cao') {
            setSegmentPrice('high');
        } else {
            setSegmentPrice('premium');
        }
    }, [segment]);

    return (
        <Stack align={'center'} justify={'center'} gap={8} mt={10}>
            <Heading>Thông tin tiệc cưới</Heading>
            <Text w={'lg'}>
                Bảng lập kế hoạch này sẽ giúp các bạn định hình ý tưởng của mình, hãy cùng với đội ngũ nhà OPAL WED thực hiện nhé!
            </Text>
            <Stack w={'md'} gap={5} mx={'auto'}>
                <FormControl id="fullName">
                    <FormLabel pl={1}>Tên khách hàng</FormLabel>
                    <Input
                        type="text"
                        value={fullName}
                        onChange={(e) => setWeddingInfo({ fullName: e.target.value })}
                        ref={fullNameRef}
                        placeholder="Tên khách hàng"
                    />
                </FormControl>
                <FormControl id="segment" flex={1} isRequired>
                    <FormLabel pl={1}>Phân khúc</FormLabel>
                    <Select
                        name="segment"
                        value={segment}
                        onChange={e => setWeddingInfo({ segment: e.target.value })}
                        placeholder={'Chọn phân khúc'}
                    >
                        <option value="thấp">Thấp</option>
                        <option value="trung bình">Trung bình</option>
                        <option value="cao">Cao</option>
                        <option value="cao cấp">Cao cấp</option>
                    </Select>
                </FormControl>
                <FormControl id="place">
                    <FormLabel pl={1}>Khu vực</FormLabel>
                    <Input
                        type="text"
                        value={place}
                        onChange={(e) => setWeddingInfo({ place: e.target.value })}
                        placeholder="Khu vực"
                    />
                </FormControl>
                <FormControl id="weddingDate">
                    <FormLabel pl={1}>Ngày cưới dự định</FormLabel>
                    <Input
                        type="date"
                        value={weddingDate}
                        onChange={(e) => setWeddingInfo({ weddingDate: e.target.value })}
                        min={today}
                    />
                </FormControl>
                <Button
                    bg={'#0C2948'}
                    _hover={{ bg: '#143252' }}
                    color={'white'}
                    onClick={() => navigate(`/wedding-planning/${param.concept}/${segmentPrice}/style`)}
                    isDisabled={!areAllFieldsFilled()}
                >
                    Tiếp theo
                </Button>
            </Stack>
        </Stack>
    );
};

export default WeddingInformationPage;
