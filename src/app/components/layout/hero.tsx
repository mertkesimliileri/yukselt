import { createStyles, Container, Title, Text, rem, Badge } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    hero: {
        position: 'relative',
        backgroundImage: 'url(https://i.imgur.com/jwb2CkZ.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },

    container: {
        height: rem(500),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingRight: rem(32),
        paddingLeft: rem(32),
        zIndex: 1,
        position: 'relative',

        [theme.fn.smallerThan('sm')]: {
            height: rem(348),
        },
    },

    innerContainer: {
        height: rem(90),
        display: 'flex',
        flexDirection: 'row',
        maxWidth: 600,
        paddingTop: rem(32),

        [theme.fn.smallerThan('sm')]: {
            maxWidth: '100%',
        },
    },

    card: {
        backgroundImage: theme.fn.gradient({ from: 'orange', to: 'red', deg: 180 }),
    },

    badge: {
        height: rem(80),
        width: rem(80),
        textAlign: 'center',
    },

    title: {
        color: theme.black,
        fontSize: rem(45),
        fontWeight: 700,
        lineHeight: 1.1,

        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(32),
            lineHeight: 2.3,
        },

        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(28),
            lineHeight: 1.3,
        },
    },

    description: {
        color: theme.black,
        maxWidth: 600,
        letterSpacing: rem(1),
        fontWeight: 500,

        [theme.fn.smallerThan('sm')]: {
            maxWidth: '100%',
            fontSize: rem(16),
        },
    },

    control: {
        marginTop: `calc(${theme.spacing.xl} * 1.5)`,

        [theme.fn.smallerThan('sm')]: {
            width: '100%',
        },
    },
}));

export function HeroContentLeft() {
    const { classes } = useStyles();

    return (
        <div className={classes.hero}>
            <Container className={classes.container}>
                <Title className={classes.title}>Sana özel süper fırsatlar</Title>
                <Text className={classes.description} size="xl" mt="xl">
                    İnanılmaz deneyimleri kaçırmamak için hemen incelemeye başla !
                </Text>

                <Container className={classes.innerContainer}>
                    <Badge variant="gradient" gradient={{ from: 'yellow', to: 'red' }} mx={rem(8)} radius={rem(22)} className={classes.badge}>
                        <Text fw={900} size={rem(36)}>
                            14
                        </Text>
                        <Text>
                            Hours
                        </Text>
                    </Badge>
                    <Badge variant="gradient" gradient={{ from: 'yellow', to: 'red' }} mx={rem(8)} radius={rem(22)} className={classes.badge}>
                        <Text fw={900} size={rem(36)}>
                            60
                        </Text>
                        <Text>
                            MINUTES
                        </Text>
                    </Badge>
                    <Badge variant="gradient" gradient={{ from: 'yellow', to: 'red' }} mx={rem(8)} radius={rem(22)} className={classes.badge}>
                        <Text fw={900} size={rem(36)}>
                            32
                        </Text>
                        <Text>
                            SECONDS
                        </Text>
                    </Badge>
                </Container>
            </Container>
        </div>
    );
}