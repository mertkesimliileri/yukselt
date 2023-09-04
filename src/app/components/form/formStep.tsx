import { Box, Flex, Text, createStyles, rem } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  stepNumber: {    
    width: rem(24),
    height: rem(24),
    backgroundColor: theme.colors.blue[7],
    borderRadius: rem(30)
  },
}));

export interface FormStepProps {
  stepNumber: number;
  stepTitle: string;
}

export function FormStep({ stepNumber, stepTitle }: FormStepProps) {
  const { classes, theme } = useStyles();

  return (
    <Flex pt={'md'} pb={'sm'}>
      <Flex align={'center'} justify={'center'} className={classes.stepNumber}>
        <Text size={rem(14)} color={theme.colors.gray[0]} fw={600}>{stepNumber}</Text>
      </Flex>
      <Text fw={600} pl={'md'}>{stepTitle}</Text>
    </Flex>
  );
}
