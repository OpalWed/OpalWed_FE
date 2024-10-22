import { useState } from 'react';
import { Box, Heading, Flex, VStack, Text, Select } from '@chakra-ui/react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

// Define a type for the data
type WeekData = { week: string; revenue: number };
type MonthlyData = {
    January: WeekData[];
    February: WeekData[];
    March: WeekData[];
    April: WeekData[];
    May: WeekData[];
    June: WeekData[];
    July: WeekData[];
    August: WeekData[];
    September: WeekData[];
    October: WeekData[];
    November: WeekData[];
    December: WeekData[];
};

// Sample data for the chart
const weeklyData: MonthlyData = {
    January: [
        { week: 'Week 1', revenue: 4000 },
        { week: 'Week 2', revenue: 3200 },
        { week: 'Week 3', revenue: 2800 },
        { week: 'Week 4', revenue: 5000 }
    ],
    February: [
        { week: 'Week 1', revenue: 3500 },
        { week: 'Week 2', revenue: 4100 },
        { week: 'Week 3', revenue: 2900 },
        { week: 'Week 4', revenue: 4500 }
    ],
    March: [
        { week: 'Week 1', revenue: 4600 },
        { week: 'Week 2', revenue: 3000 },
        { week: 'Week 3', revenue: 2700 },
        { week: 'Week 4', revenue: 4200 }
    ],
    April: [
        { week: 'Week 1', revenue: 3900 },
        { week: 'Week 2', revenue: 3500 },
        { week: 'Week 3', revenue: 3000 },
        { week: 'Week 4', revenue: 4700 }
    ],
    May: [
        { week: 'Week 1', revenue: 5100 },
        { week: 'Week 2', revenue: 4800 },
        { week: 'Week 3', revenue: 3700 },
        { week: 'Week 4', revenue: 4300 }
    ],
    June: [
        { week: 'Week 1', revenue: 4000 },
        { week: 'Week 2', revenue: 3700 },
        { week: 'Week 3', revenue: 2900 },
        { week: 'Week 4', revenue: 4400 }
    ],
    July: [
        { week: 'Week 1', revenue: 5000 },
        { week: 'Week 2', revenue: 4600 },
        { week: 'Week 3', revenue: 4300 },
        { week: 'Week 4', revenue: 4900 }
    ],
    August: [
        { week: 'Week 1', revenue: 5500 },
        { week: 'Week 2', revenue: 4800 },
        { week: 'Week 3', revenue: 4600 },
        { week: 'Week 4', revenue: 5200 }
    ],
    September: [
        { week: 'Week 1', revenue: 4100 },
        { week: 'Week 2', revenue: 3500 },
        { week: 'Week 3', revenue: 3300 },
        { week: 'Week 4', revenue: 4200 }
    ],
    October: [
        { week: 'Week 1', revenue: 4700 },
        { week: 'Week 2', revenue: 4400 },
        { week: 'Week 3', revenue: 4000 },
        { week: 'Week 4', revenue: 4800 }
    ],
    November: [
        { week: 'Week 1', revenue: 5200 },
        { week: 'Week 2', revenue: 4700 },
        { week: 'Week 3', revenue: 4300 },
        { week: 'Week 4', revenue: 5100 }
    ],
    December: [
        { week: 'Week 1', revenue: 5800 },
        { week: 'Week 2', revenue: 5500 },
        { week: 'Week 3', revenue: 4900 },
        { week: 'Week 4', revenue: 6000 }
    ]
    // Add similar data for other months...
};

const data = [
    { name: "Jan", consulting: 4000, planning: 2400, amt: 2400 },
    { name: "Feb", consulting: 3000, planning: 1398, amt: 2210 },
    { name: "Mar", consulting: 2000, planning: 9800, amt: 2290 },
    { name: "Apr", consulting: 2780, planning: 3908, amt: 2000 },
    { name: "May", consulting: 1890, planning: 4800, amt: 2181 },
    { name: "Jun", consulting: 2390, planning: 3800, amt: 2500 },
    { name: "Jul", consulting: 3490, planning: 4300, amt: 2100 },
];

const Dashboard = () => {
    const [selectedMonth, setSelectedMonth] = useState<keyof MonthlyData>('January');
    const [selectedWeek, setSelectedWeek] = useState('Week 1');
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ] as const;

    // Handle month and week change
    const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedMonth(e.target.value as typeof months[number]);
        setSelectedWeek(weeklyData[e.target.value as keyof MonthlyData][0].week); // Reset to the first week when changing month
    };

    const handleWeekChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedWeek(e.target.value);
    };

    const currentWeekData = weeklyData[selectedMonth];
    const totalRevenue = currentWeekData.reduce((sum, week) => sum + week.revenue, 0);

    return (
        <Box p={6} bg="gray.50" minH="100vh">
            <VStack spacing={8} align="start">
                {/* Heading */}
                <Heading as="h1" size="xl">Wedding Consulting and Planning Dashboard</Heading>

                <Flex gap={8} w="full" justify="space-between">
                    <Box bg="white" p={6} borderRadius="md" shadow="md">
                        <Heading as="h2" size="md" mb={4}>Consulting Overview</Heading>
                        <Text fontSize="xl">Total Clients: 120</Text>
                        <Text fontSize="xl">New Clients: 30</Text>
                    </Box>
                    <Box bg="white" p={6} borderRadius="md" shadow="md">
                        <Heading as="h2" size="md" mb={4}>Wedding Planning</Heading>
                        <Text fontSize="xl">Weddings Planned: 75</Text>
                        <Text fontSize="xl">Upcoming Weddings: 15</Text>
                    </Box>
                    {/* Summary Revenue Box */}
                    <Box bg="white" p={6} borderRadius="md" shadow="md">
                        <Heading as="h2" size="md" mb={4}>Total Revenue</Heading>
                        <Text fontSize="xl">Month: {selectedMonth}</Text>
                        <Text fontSize="xl" fontWeight="bold">Total Revenue: ${totalRevenue}</Text>
                    </Box>
                </Flex>

                <Box w="full" bg="white" p={6} borderRadius="md" shadow="md">
                    <Heading as="h2" size="md" mb={4}>Monthly Trends</Heading>
                    <LineChart width={700} height={300} data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="consulting" stroke="#8884d8" name="Consulting Clients" />
                        <Line type="monotone" dataKey="planning" stroke="#82ca9d" name="Wedding Planning" />
                    </LineChart>
                </Box>

                {/* Select Month and Week */}
                <Flex w="full" justify="space-between" alignItems="center">
                    <Box>
                        <Heading as="h2" size="md" mb={2}>Select Month</Heading>
                        <Select placeholder='Select month' value={selectedMonth} onChange={handleMonthChange}>
                            {months.map((month) => (
                                <option key={month} value={month}>{month}</option>
                            ))}
                        </Select>
                    </Box>

                    <Box>
                        <Heading as="h2" size="md" mb={2}>Select Week</Heading>
                        <Select value={selectedWeek} onChange={handleWeekChange}>
                            {currentWeekData.map(({ week }) => (
                                <option key={week} value={week}>{week}</option>
                            ))}
                        </Select>
                    </Box>
                </Flex>

                {/* Line Chart for Weekly Revenue */}
                <Box w="full" bg="white" p={6} borderRadius="md" shadow="md">
                    <Heading as="h2" size="md" mb={4}>Weekly Revenue for {selectedMonth}</Heading>
                    <LineChart width={700} height={300} data={currentWeekData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="week" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="revenue" stroke="#82ca9d" name="Weekly Revenue" />
                    </LineChart>
                </Box>
            </VStack>
        </Box>
    );
};

export default Dashboard;
