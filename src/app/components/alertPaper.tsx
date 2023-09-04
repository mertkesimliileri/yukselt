import { Text, Paper, Group, createStyles, Flex, rem } from '@mantine/core';
import { IoIosInformationCircleOutline } from '@react-icons/all-files/io/IoIosInformationCircleOutline'

const useStyles = createStyles((theme) => ({}));

interface AlertPaperProps {
    content: string;
    alert: boolean;
}

export function AlertPaper({ content, alert }: AlertPaperProps) {

    const { classes, theme } = useStyles();

    return (
        <Paper mx={'md'} my={'sm'} bg={alert ? theme.colors.red[1] : theme.colors.blue[1]} radius="md" p={'sm'}>
            <Flex align={'self-start'}>
                <Group pr={'sm'}>
                    <IoIosInformationCircleOutline
                        size={21}
                        strokeWidth={0.5}
                        color={alert ? theme.colors.red[7] : theme.colors.blue[7]} />
                </Group>
                <Group>
                    <Text color={alert ? theme.colors.red[7] : theme.colors.blue[7]}>
                        {content}
                    </Text>
                </Group>
            </Flex>
        </Paper>
    );
}