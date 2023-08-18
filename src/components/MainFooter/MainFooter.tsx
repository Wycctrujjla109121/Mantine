import { MENU_CONTACTS, MENU_LINKS } from "@/constants/links";
import { Flex, Footer, Group, createStyles, Text, Button } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

import star from '../../../public/main/Star.svg'

const useStyles = createStyles((theme) => ({
    links: {
        color: '#fff',
        fontSize: 18,
        textDecoration: 'none',

        '@media (max-width: 430px)': {
            fontSize: 16
        }
    },

    button: {
        fontSize: 20,
        color: '#fff',
        padding: 0,
        backgroundColor: 'transparent',
        fontWeight: 300,

        '&:hover': {
            backgroundColor: 'transparent'
        },

        '@media (max-width: 430px)': {
            fontSize: 18
        }
    },

    menu: {
        '@media (max-width: 530px)': {
            flexDirection: 'column',
            alignItems: 'center',
            rowGap: 25,
        },
    },

    logo: {
        '@media (max-width: 430px)': {
            fontSize: 16
        }
    }
}))

export function MainFooter() {

    const { classes } = useStyles()

    const Links = MENU_LINKS.map(current => (
        <Link href={current.link} className={classes.links}>{current.text}</Link>
    ))
    return (
        <Footer height={'fit-content'} py={48} bg={'#2D2D2D'} withBorder={false}>
            <Flex mr={'auto'} align={'center'} rowGap={38} direction={'column'}>
                <Flex columnGap={53} className={classes.menu}>{Links}</Flex>
                <Group spacing={4}>
                    <Image src={star} alt={"Иконка"} />
                    <Text className={classes.logo} fz={24} color="#DA6836">Healthy face</Text>
                </Group>
                <Flex direction={'column'} rowGap={10}>
                    <Button <typeof Link> component={Link} href={`mailto: ${MENU_CONTACTS.Email}`} className={classes.button}>{MENU_CONTACTS.Email}</Button>
                    <Button <typeof Link> component={Link} href={`tel: ${MENU_CONTACTS.Phone}`} className={classes.button}>{MENU_CONTACTS.Phone}</Button>
                </Flex>
            </Flex>
        </Footer>
    );
};