import { Card, createStyles, rem, Text, Button, Group, Box, Container, Collapse } from '@mantine/core';
import { IconBuilding } from '@tabler/icons-react';
import { BsPerson } from "@react-icons/all-files/bs/BsPerson";
import { useDisclosure } from '@mantine/hooks';
import { CgChevronDownO } from "@react-icons/all-files/cg/CgChevronDownO";
import { CgChevronUpO } from "@react-icons/all-files/cg/CgChevronUpO";


const useStyles = createStyles((theme) => ({
    
    box: {
        display: 'flex',
        alignItems: 'center'
    },
    container: {
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: rem(16),
        display: 'flex',
        width: '100%',
    }
}));

export default function ReservationCard() {

    const { classes, cx, theme } = useStyles();
    const [opened, { toggle }] = useDisclosure(false);

    return (
        <Container mx={rem(32)} px={0} py={rem(32)}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Text size={rem(16)} weight={500}>Mevcut rezervasyonunuz</Text>

                <Container className={classes.container}>
                    <Box className={classes.box}>
                        <IconBuilding
                            size={21}
                            strokeWidth={2}
                            color={'#EE685F'}
                        />
                        <Box pl={rem(8)}>
                            <Text size={rem(12)} weight={400} color="dimmed">
                                Club Marmara
                            </Text>
                            <Text size={rem(12)} weight={400} color="dimmed">
                                Standart Oda
                            </Text>
                        </Box>
                    </Box>
                    <Box pl={32} className={classes.box}>
                        <BsPerson
                            size={21}
                            strokeWidth={0.5}
                            color={'#EE685F'}
                        />
                        <Box pl={rem(8)}>
                            <Text size={rem(12)} weight={400} color="dimmed">
                                1 yetişkin
                            </Text>
                        </Box>
                    </Box>
                </Container>
                <Container mb={16} className={classes.container}>
                    <Box>
                        <Text size={rem(12)} weight={400} color="dimmed">
                            3 gece için fiyat <b>₺2.500</b>
                        </Text>
                    </Box>
                </Container>
                <Box mx="auto">
                    <Collapse in={opened}>
                        <Text size={rem(16)} weight={500}>Detay</Text>
                        <Text mt={16} fw={400} lh={rem(18)} size={rem(12)} color='dimmed'>
                            Hotel Saudagar, Pune: See traveller reviews, 2 user photos and best deals for ... enjoy stay here, you will find great bars and restaurants near the hotel.
                            <Text color='#EE685F' >Read More. . .</Text>
                        </Text>
                    </Collapse>
                    <Group position="center">
                        {opened ?
                            <CgChevronUpO
                                size={21}
                                strokeWidth={0.5}
                                color={'#EE685F'}
                                onClick={toggle} /> :
                            <CgChevronDownO
                                size={21}
                                strokeWidth={0.5}
                                color={'#EE685F'}
                                onClick={toggle}
                            />}
                    </Group>
                </Box>
            </Card>
        </Container>
    );
}