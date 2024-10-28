import { useEffect, useState } from 'react';
import { Box, Heading, Flex, Stack, Text, Select, Card, CardBody, CardHeader, Button, HStack, useDisclosure, Spinner } from '@chakra-ui/react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import { Color, Shadow } from '../../styles/styles';
import { FaHistory } from 'react-icons/fa';
import { changeTabTitle } from '../../utils/changeTabTitle';
import { FaArrowRotateLeft, FaFileLines, FaMoneyBill, FaUser } from 'react-icons/fa6';
import HistoryTransactionModal from '../../components/modal/history_transaction';
import useSummaryTotal from '../../hooks/useSummaryTotal';
import useRevenue from '../../hooks/useRevenue';
import Loading from '../../components/loading';
import useApplicationDashboard from '../../hooks/useApplicationDashboard';

// Define a type for the revenue data
type RevenueData = { date: string; revenue: number };
type ApplicationData = { month: string; application: number };

// Helper function to get daily revenue for the selected month
// Helper function to get daily revenue for the selected month, accounting for February's 28 or 29 days in leap years
const getDailyRevenueDataForMonth = (data: RevenueData[], month: number, year: number) => {
    // Calculate days in the selected month, accounting for leap years in February
    const daysInMonth = new Date(year, month, 0).getDate();
    const dailyData = Array.from({ length: daysInMonth }, (_, i) => ({
        day: i + 1,
        revenue: 0,
    }));

    data.forEach(entry => {
        const entryDate = new Date(entry.date);
        if (entryDate.getMonth() + 1 === month && entryDate.getFullYear() === year) {
            dailyData[entryDate.getDate() - 1].revenue += entry.revenue;
        }
    });

    return dailyData;
};

const getMonthlyRevenueData = (data: RevenueData[]) => {
    const monthNames = [
        'Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6',
        'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'
    ];
    const monthlyData = Array(12).fill(0).map((_, index) => ({
        month: monthNames[index],
        revenue: 0
    }));

    data.forEach(entry => {
        const date = new Date(entry.date);
        const monthIndex = date.getMonth();
        monthlyData[monthIndex].revenue += entry.revenue;
    });

    return monthlyData;
};

const Dashboard = () => {
    const [selectedPeriod, setSelectedPeriod] = useState<'Month' | 'Year'>('Month');
    const [selectedMonth, setSelectedMonth] = useState<number>(new Date().getMonth() + 1);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { data: summaryTotalData, isLoading: summaryTotalLoading, refetch: summaryTotalRefetch } = useSummaryTotal();
    const { data: revenue, isLoading: revenueLoading, refetch: revenueRefetch } = useRevenue({ year: 2024 });
    const { data: application, isLoading: applicationLoading, refetch: applicationRefetch } = useApplicationDashboard({ year: 2024 });

    const [revenueData, setRevenueData] = useState<RevenueData[]>([]);
    const [applicationData, setApplicationData] = useState<ApplicationData[]>([]);

    const lastMonthData = getDailyRevenueDataForMonth(revenueData, selectedMonth, new Date().getFullYear());
    const lastYearData = getMonthlyRevenueData(revenueData); // Assumes getMonthlyRevenueData function from previous response

    const chartWidth = window.innerWidth - 520;

    useEffect(() => {
        changeTabTitle('Dashboard');
    }, []);

    useEffect(() => {
        if (revenue) {
            setRevenueData(revenue);
        }
    }, [revenue]);

    useEffect(() => {
        if (application) {
            setApplicationData(application);
        }
    }, [application]);

    return (
        <Box p={6} minH="100vh">
            <Stack gap={8}>
                <Heading as="h1" size="xl">Bảng thống kê</Heading>
                <Card w="full">
                    <CardHeader>
                        <HStack w="sm" gap={4}>
                            <Button variant="none" leftIcon={<FaArrowRotateLeft />} onClick={() => summaryTotalRefetch()}>Tải lại</Button>
                            {/* <Select
                                placeholder="Select period"
                                value={selectedPeriod}
                                onChange={(e) => setSelectedPeriod(e.target.value as any)}
                            >
                                <option value="Month">Theo tháng</option>
                                <option value="Year">Theo năm</option>
                            </Select>
                            {selectedPeriod === 'Month' && (
                                <Select
                                    value={selectedMonth}
                                    onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
                                >
                                    {Array.from({ length: 12 }, (_, i) => (
                                        <option key={i + 1} value={i + 1}>
                                            {new Date(0, i).toLocaleString('vi-VN', { month: 'long' })}
                                        </option>
                                    ))}
                                </Select>
                            )} */}
                        </HStack>
                    </CardHeader>
                    <CardBody>
                        <Flex gap={8} w="full" justify="space-between">
                            <Box bg="white" p={6} borderRadius="md" shadow="md" flex={1}>
                                <Stack align={'center'} gap={4}>
                                    <Text color={Color.darkBlue} fontSize={36}><FaUser /></Text>
                                    {summaryTotalLoading ? (
                                        <Spinner size={'lg'} my={3} />
                                    ) : (
                                        <Text fontSize={40} fontFamily={'Noto Sans JP'}>{summaryTotalData?.['user-count']}</Text>
                                    )}
                                    <Heading
                                        fontSize={20}
                                        fontWeight={400}
                                        fontFamily={'Noto Sans JP'}
                                        mt={-3}
                                        mb={4}
                                    >
                                        Người dùng
                                    </Heading>
                                </Stack>
                            </Box>
                            <Box bg="white" p={6} borderRadius="md" shadow="md" flex={1}>
                                <Stack align={'center'} gap={4}>
                                    <Text color={'blue.400'} fontSize={36}><FaFileLines /></Text>
                                    {summaryTotalLoading ? (
                                        <Spinner size={'lg'} my={3} />
                                    ) : (
                                        <Text fontSize={40} fontFamily={'Noto Sans JP'}>{summaryTotalData?.['application-count']}</Text>
                                    )}
                                    <Heading
                                        fontSize={20}
                                        fontWeight={400}
                                        fontFamily={'Noto Sans JP'}
                                        mt={-3}
                                        mb={4}
                                    >
                                        Đơn tư vấn
                                    </Heading>
                                </Stack>
                            </Box>
                            <Box bg="white" p={6} borderRadius="md" shadow="md" flex={1}>
                                <Stack align={'center'} gap={4}>
                                    <Text color={'green'} fontSize={36}><FaMoneyBill /></Text>
                                    {summaryTotalLoading ? (
                                        <Spinner size={'lg'} my={3} />
                                    ) : (
                                        <Text fontSize={40} fontFamily={'Noto Sans JP'}>{summaryTotalData?.['sum-revenue'].toLocaleString()}</Text>
                                    )}
                                    <Heading
                                        fontSize={20}
                                        fontWeight={400}
                                        fontFamily={'Noto Sans JP'}
                                        mt={-3}
                                        mb={4}
                                    >
                                        Doanh thu (VND)
                                    </Heading>
                                </Stack>
                            </Box>
                        </Flex>
                    </CardBody>
                </Card>

                <Card shadow={Shadow.cardShadow} w="full">
                    <CardBody>
                        <Stack gap={10}>
                            <Stack gap={8} mt={3}>
                                <Heading as="h2" size="md">Biểu đồ doanh thu</Heading>
                                <Box w="full">
                                    <HStack w="full" justify="space-between" mb={8}>
                                        <Flex w="sm" gap={4}>
                                            <Button variant="none" leftIcon={<FaArrowRotateLeft />} onClick={() => revenueRefetch()}>Tải lại</Button>
                                            <Select
                                                placeholder="Select period"
                                                value={selectedPeriod}
                                                onChange={(e) => setSelectedPeriod(e.target.value as any)}
                                            >
                                                <option value="Month">Theo tháng</option>
                                                <option value="Year">Theo năm</option>
                                            </Select>
                                            {selectedPeriod === 'Month' && (
                                                <Select
                                                    value={selectedMonth}
                                                    onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
                                                >
                                                    {Array.from({ length: 12 }, (_, i) => (
                                                        <option key={i + 1} value={i + 1}>
                                                            {new Date(0, i).toLocaleString('vi-VN', { month: 'long' })}
                                                        </option>
                                                    ))}
                                                </Select>
                                            )}
                                        </Flex>
                                        <Button variant="ghost" leftIcon={<FaHistory />} onClick={onOpen}>Lịch sử giao dịch</Button>
                                    </HStack>
                                    {!revenueLoading ? (
                                        <>
                                            {selectedPeriod === 'Month' && (
                                                <AreaChart width={chartWidth} height={300} data={lastMonthData}
                                                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                                    <CartesianGrid strokeDasharray="3 3" />
                                                    <XAxis dataKey="day" />
                                                    <YAxis />
                                                    <Tooltip />
                                                    <Legend />
                                                    <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fill="#82ca9d" name="Doanh thu" />
                                                </AreaChart>
                                            )}

                                            {selectedPeriod === 'Year' && (
                                                <AreaChart width={chartWidth} height={300} data={lastYearData}
                                                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                                    <CartesianGrid strokeDasharray="3 3" />
                                                    <XAxis dataKey="month" />
                                                    <YAxis />
                                                    <Tooltip />
                                                    <Legend />
                                                    <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fill="#82ca9d" name="Doanh thu" />
                                                </AreaChart>
                                            )}
                                        </>
                                    ) : (
                                        <Stack h={300}>
                                            <Loading />
                                        </Stack>
                                    )}
                                </Box>
                            </Stack>

                            <Stack gap={8}>
                                <Heading as="h2" size="md">Biểu đồ đơn tư vấn</Heading>
                                <Box w="full">
                                    <HStack w="full" justify="space-between" mb={5}>
                                        <Flex w="sm" gap={4}>
                                            <Button variant="none" leftIcon={<FaArrowRotateLeft />} onClick={() => applicationRefetch}>Tải lại</Button>
                                        </Flex>
                                    </HStack>
                                    {!applicationLoading ? (
                                        <>
                                            <BarChart width={chartWidth} height={300} data={applicationData}
                                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                                <CartesianGrid strokeDasharray="3 3" />
                                                <XAxis dataKey="month" />
                                                <YAxis />
                                                <Tooltip />
                                                <Legend />
                                                <Bar dataKey="application" fill="#ff7300" name="Đơn tư vấn" />
                                            </BarChart>
                                        </>
                                    ) : (
                                        <Stack h={300}>
                                            <Loading />
                                        </Stack>
                                    )}
                                </Box>
                            </Stack>
                        </Stack>
                    </CardBody>
                </Card>
            </Stack>
            {isOpen && (
                <HistoryTransactionModal isOpen={isOpen} onClose={onClose} />
            )}
        </Box>
    );
};

export default Dashboard;
