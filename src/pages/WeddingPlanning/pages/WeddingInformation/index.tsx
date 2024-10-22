import { Stack, Button, FormControl, FormLabel, Input, Select, Heading, Text, useDisclosure } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { changeTabTitle } from "../../../../utils/changeTabTitle";
import { today } from "../../../../utils/formatTime";
import { useWedding } from "../../../../hooks/useWedding";
import useProfile from "../../../../hooks/useProfile";
import DesignInformation from "../../../../components/modal/design_infomation";

const WeddingInformationPage = () => {
    const fullNameRef = useRef<HTMLInputElement>(null);
    const [segmentPrice, setSegmentPrice] = useState<string>('');
    const { fullName, budget, place, weddingDate, setWeddingInfo } = useWedding();
    const { data } = useProfile();
    const { isOpen, onClose, onOpen } = useDisclosure();

    const areAllFieldsFilled = () => {
        return (
            fullName !== '' &&
            budget !== '' &&
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
        if (budget == 'thấp') {
            setSegmentPrice('low');
        } else if (budget == 'trung bình') {
            setSegmentPrice('medium');
        } else if (budget == 'cao') {
            setSegmentPrice('high');
        } else {
            setSegmentPrice('premium');
        }
    }, [budget]);

    return (
        <Stack align={'center'} justify={'center'} gap={8} mt={10}>
            <Heading fontFamily={'Hatton'}>Thông tin tiệc cưới</Heading>
            <Text w={'lg'} fontFamily={'Noto Sans JP'}>
                Bảng lập kế hoạch này sẽ giúp các bạn định hình ý tưởng của mình, hãy cùng với đội ngũ nhà OPALWED thực hiện nhé!
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
                <FormControl id="budget" flex={1} isRequired>
                    <FormLabel pl={1}>Phân khúc</FormLabel>
                    <Select
                        name="budget"
                        value={budget}
                        onChange={e => setWeddingInfo({ budget: e.target.value })}
                        placeholder={'Chọn phân khúc'}
                    >
                        <option value="thấp">Thấp</option>
                        <option value="trung bình">Trung bình</option>
                        <option value="cao">Cao</option>
                        <option value="cao cấp">Cao cấp</option>
                    </Select>
                </FormControl>
                <FormControl id="place">
                    <FormLabel pl={1}>Địa điểm</FormLabel>
                    <Input
                        type="text"
                        value={place}
                        onChange={(e) => setWeddingInfo({ place: e.target.value })}
                        placeholder="Địa điểm"
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
                    onClick={onOpen}
                    isDisabled={!areAllFieldsFilled()}
                >
                    Tiếp theo
                </Button>
            </Stack>
            <DesignInformation
                isOpen={isOpen}
                onClose={onClose}
                budget={segmentPrice}
            />
        </Stack>
    );
};

export default WeddingInformationPage;
