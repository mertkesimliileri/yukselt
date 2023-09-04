
import { Container, Footer, Flex, createStyles, Text, rem, Button } from '@mantine/core'
import React from 'react'
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
    footer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between'

    },
    footerContainer: {
        width: '100%'
    },
    price: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
}));

type CheckoutFooterProps = {
    cost: number,
    costType: string,
    buttonRoute: string,
    buttonText: string
}

export function CheckoutFooter({cost,costType,buttonRoute, buttonText}: CheckoutFooterProps) {
  const { classes, theme, } = useStyles();  

  return (
    <Footer className={classes.footer} fixed={true} height={rem(65)} children={
        <Container className={classes.footerContainer}>
            <Flex align='center' justify='space-between'>
                <div>
                    <Text fz={rem(12)} span fw={500} className={classes.price}>
                        {cost}$
                    </Text>
                    <Text span fz={rem(8.8)} c={theme.colors.gray[5]}>
                        {' '}
                        /{costType}
                    </Text>
                </div>
                <Link href={buttonRoute}><Button bg={theme.colors.red[6]} radius="md">{buttonText}</Button></Link>
            </Flex>
        </Container>
    } />
  )
}