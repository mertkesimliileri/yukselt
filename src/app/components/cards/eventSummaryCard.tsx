import { Group, Text, createStyles, rem, Paper } from "@mantine/core";

const useStyles = createStyles((theme) => ({
    flex: {
        display: 'flex',
        flexDirection: 'column',
        gap: 0,
        alignItems: 'flex-start'
    }
}));

type EventSummaryCardProps = {
  icon: React.ReactNode;
  title: string;
  data: string;
};

export default function EventSummaryCard({icon, title, data}: EventSummaryCardProps) {
  const { classes, theme } = useStyles();

  return (
    <div>
      <Paper mb={'sm'} radius={'xl'} px={'xl'} bg={theme.colors.gray[1]}>
        <Group>
          {icon}
          <Group py={rem(5)} className={classes.flex}>
            <Text color={theme.colors.gray[7]} size={rem(10)}>{title}</Text>
            <Text size={rem(14)}>{data}</Text>
          </Group>
        </Group>
      </Paper>
    </div>
  );
}
