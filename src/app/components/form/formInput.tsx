import { TextInput, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  input: {
    '&:focus': {
        borderColor: theme.colors.blue[7]
    },
    '&:focus-within': {
        borderColor: theme.colors.blue[7]
    }
  }
}));

export interface FormInputProps {
  label: string;
  withAsterisk: boolean;
}

export function FormInput({ label, withAsterisk }: FormInputProps) {
  const { classes, theme } = useStyles();

  return (
    <TextInput
    classNames={{
        input: classes.input
    }}
      py={"sm"}
      label={label}
      withAsterisk={withAsterisk}
      variant="filled"
    />
  );
}
