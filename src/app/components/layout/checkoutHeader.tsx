'use client';
import React from 'react'
import { Header, rem, Container, Flex, Text, createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => ({
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',

    },
    headerContainer: {
        width: '100%'
    },
    price: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
}));

type CheckOutHeaderProps = {
    icon: React.ReactNode,
    title: string,
}

export function CheckoutHeader({ icon, title }: CheckOutHeaderProps) {
    const { classes, theme, } = useStyles();

    return (
        <Header className={classes.header} height={rem(65)} withBorder={false} children={
            <Container ml='md' className={classes.headerContainer}>
                <Flex align={'center'}>
                    {icon}
                    <Text pl='sm' fw={600} size={rem(20)}>{title}</Text>
                </Flex>
            </Container>
        } />
    )
}