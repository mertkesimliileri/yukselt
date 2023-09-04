import { createStyles, Container,Box, Flex, Text, rem } from '@mantine/core';
import { EventCoverCard } from '../cards/eventCoverCard';

const useStyles = createStyles((theme) => ({
    container: {
        display: 'flex',
        width: '100%',
        [theme.fn.smallerThan('sm')]: {
            overflow: 'hidden',
            overflowX: 'scroll'
          },
    }
}));

export function EventList() {
    const { classes, theme } = useStyles();
    return (
        <Box>
            <Container mx='md' mt='xl' mb='xl'>
                <Flex justify='space-between'>
                    <Text fw={500} size={rem(14)}>Unutulmaz Deneyimler</Text>
                    <Text fw={500} size={rem(14)} color={theme.colors.blue[7]}>Tümü</Text>
                </Flex>
            </Container>
            <Container className={classes.container}>
                <EventCoverCard title='Rafting' link='/' image='https://blog.ofix.com/wp-content/uploads/2020/02/turkiyede_rafting_yapilacak_en_iyi_10_nehir_ofix_blog.jpg' />
                <EventCoverCard title='Rafting' link='/' image='https://blog.ofix.com/wp-content/uploads/2020/02/turkiyede_rafting_yapilacak_en_iyi_10_nehir_ofix_blog.jpg' />
                <EventCoverCard title='Rafting' link='/' image='https://blog.ofix.com/wp-content/uploads/2020/02/turkiyede_rafting_yapilacak_en_iyi_10_nehir_ofix_blog.jpg' />
                <EventCoverCard title='Rafting' link='/' image='https://blog.ofix.com/wp-content/uploads/2020/02/turkiyede_rafting_yapilacak_en_iyi_10_nehir_ofix_blog.jpg' />
                <EventCoverCard title='Rafting' link='/' image='https://blog.ofix.com/wp-content/uploads/2020/02/turkiyede_rafting_yapilacak_en_iyi_10_nehir_ofix_blog.jpg' />
            </Container>
        </Box>
    );
}