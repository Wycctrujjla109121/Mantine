import {
    createStyles,
    Header,
    Group,
    Button,
    UnstyledButton,
    Text,
    Container,
    Flex,
    Burger,
    Drawer,
    CloseButton,
    Box,
} from '@mantine/core';
import Image from 'next/image';

import star from '../../../public/main/Star.svg'
import Link from 'next/link';
import { IconShoppingCart } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { MENU_CONTACTS, MENU_LINKS } from '@/constants/links';

const useStyles = createStyles((theme) => ({
    inner: {
        height: 38,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        cursor: 'text',
    },

    links: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: 18,

        '@media (max-width: 870px)': {
            color: '#2D2D2D',
            fontSize: 20
        }
    },

    button: {
        '&:hover': {
            backgroundColor: 'transparent'
        },

        '@media (max-width: 870px)': {
            color: '#2D2D2D',
            fontSize: 18,
            fontWeight: 300
        }
    },

    hiddenDesktop: {
        '@media (max-width: 870px)': {
            display: 'none'
        },
    },

    hiddenMobile: {
        '@media (min-width: 871px)': {
            display: 'none'
        },
    },
}));

export function MainHeader() {

    const { classes } = useStyles()
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

    const item = MENU_LINKS.map(current => (
        <Link className={classes.links} href={current.link}>{current.text}</Link>
    ))


    return (
        <Header bg={'#2D2D2D'} height={138} py={50} withBorder={false}>
            <Container className={classes.inner}>
                <UnstyledButton>
                    <Group spacing={4}>
                        <Image src={star} alt={'Иконка'} />
                        <Text fz={24} color='#DA6836'>Healthy face</Text>
                    </Group>
                </UnstyledButton>
                <Flex gap={30} className={classes.hiddenDesktop} color='#fff'>{item}</Flex>
                <Group spacing={10} className={classes.hiddenDesktop}>
                    <Button <typeof Link> fz={18} component={Link} href={'/buy'} className={classes.button} variant='subtle' compact leftIcon={<IconShoppingCart />}>(4)</Button>
                    <Button <typeof Link> fz={18} variant='subtle' compact component={Link} href={`tel: ${MENU_CONTACTS.Phone}`} className={classes.button}>{MENU_CONTACTS.Phone}</Button>
                </Group>
                <Burger className={classes.hiddenMobile} color='#DA6836' opened={drawerOpened} onClick={toggleDrawer} />
            </Container>
            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size={307}
                closeButtonProps={{ color: '#DA6836', size: 29 }}
                overlayProps={{ opacity: .2 }}
                padding="md"
                className={classes.hiddenMobile}
                zIndex={1000000}
            >
                <Flex gap={40} direction={'column'} align={'center'}>
                    {item}
                    <Button <typeof Link> fz={18} component={Link} href={'/buy'} className={classes.button} variant='subtle' compact>Корзина (4)</Button>
                    <Button <typeof Link> fz={18} variant='subtle' compact component={Link} href={`tel: ${MENU_CONTACTS.Phone}`} className={classes.button}>{MENU_CONTACTS.Phone}</Button>
                </Flex>
            </Drawer>
        </Header >
    );
};