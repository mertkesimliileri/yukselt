import { createStyles, Container,Box, rem, Flex, Image, Text } from "@mantine/core";

const useStyles = createStyles((theme) => ({
    container: {
        paddingRight: 0,
        background: 'rgba(28, 39, 76, 1)',
        [theme.fn.smallerThan('xs')]: {
            height: rem(132),
        },
    },
    box: {
        
    },
    imageWrapper: {
        flexShrink: 0,
        [theme.fn.smallerThan('xs')]: {
            height: rem(132),
        },
    }
}));

export function Footer() {
    const { classes, theme } = useStyles();

    return (
        <Container mt='xl' className={classes.container}>
            <Flex justify='space-between'>
                <Box className={classes.box} p='md'>
                    <Text weight={700} pt='sm' color={theme.colors.gray[0]}>Neden sen özelsin ?</Text>
                    <Text weight={400} pt='sm' color={theme.colors.gray[0]}>Lorem ipsum Lorem ipsum Lorem ipsumLor ...... </Text>
                </Box>
                <Box className={classes.imageWrapper}>
                 <Image fit="cover" src='https://i.imgur.com/i5r8Uh9.png' />
                </Box>
            </Flex>
        </Container>
    )
}