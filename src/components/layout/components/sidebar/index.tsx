import React from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { ConfigProvider, Menu } from 'antd';
import { Button, Box, HStack, Stack } from '@chakra-ui/react';
import { FaRegUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { FaRegCheckCircle } from 'react-icons/fa';
import { FiBox, FiCalendar, FiLogOut } from 'react-icons/fi';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const menuItems: MenuItem[] = [
    getItem(
        <Link to={'dashboard'} style={{ fontSize: '14px' }}>Dashboard</Link>
        , '1'
        , <DashboardCustomizeOutlinedIcon />
    ),
    getItem(
        <Link to={'services'} style={{ fontSize: '14px' }}>Services</Link>
        , '2'
        , <FiBox />
    ),

    getItem(
        <Link to={'partners'} style={{ fontSize: '14px' }}>Partners</Link>
        , '3'
        , <StorefrontOutlinedIcon fontSize='large' />
    ),
    getItem(
        <Link to={'approve-partner'} style={{ fontSize: '14px' }}>Approve Partner</Link>
        , '4'
        , <FaRegCheckCircle />,
    ),
    getItem(
        <Link to={'customer-contact'} style={{ fontSize: '14px' }}>Customer Contacts</Link>
        , '5'
        , <FaRegUser />,
    ),
    getItem(
        <Link to={'schedule'} style={{ fontSize: '14px' }}>Schedule</Link>
        , '6'
        , <FiCalendar />,
    ),
    getItem(
        <Link to={'reports'} style={{ fontSize: '14px' }}>Settings</Link>
        , '7'
        , <SettingsOutlinedIcon />,
    ),
    getItem(
        <Link to={'reports'} style={{ fontSize: '14px' }}>Logout</Link>
        , '8'
        , <FiLogOut />,
    ),
];

interface SideBarProps {
    collapsed: boolean;
    toggleCollapsed: () => void;
}

const SideBar = ({ collapsed, toggleCollapsed }: SideBarProps) => {

    return (
        <Box bg={'white'} pt={2} pos={'fixed'} zIndex={10}>
            <HStack justify='flex-end' mr={4}>
                <Button
                    colorScheme='blue'
                    variant={'outline'}
                    mt={0}
                    mb={2}
                    onClick={toggleCollapsed}
                >
                    {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </Button>
            </HStack>
            <Stack>
                <ConfigProvider
                    theme={{
                        components: {
                            Menu: {
                                itemHeight: 55,
                                subMenuItemBg: 'blue'
                            },
                        },
                    }}
                >
                    <Menu
                        defaultSelectedKeys={['1']}
                        mode="inline"
                        inlineCollapsed={collapsed}
                        items={menuItems}
                        style={{
                            border: 'none',
                            height: `calc(100vh - 76px)`,
                            background: 'white',
                            overflowY: 'auto',
                            overflowX: 'hidden',
                            maxHeight: `calc(100vh - 76px)`
                        }}
                    />
                </ConfigProvider>
            </Stack>
        </Box>
    );
};

export default SideBar;