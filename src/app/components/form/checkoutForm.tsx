import {
  TextInput,
  Text,
  Checkbox,
  Button,
  Group,
  Box,
  Flex,
  createStyles,
  rem,
  Textarea,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { FormStep } from "./formStep";
import { FormInput } from "./formInput";
import Link from "next/link";

export interface CheckoutFormProps {
  buttonRoute: string;
}

const useStyles = createStyles((theme) => ({
  formWrapper: {
    borderTop: "1px solid",
    borderColor: theme.colors.gray[2],
  },
  box: {
    borderTop: "1px solid",
    borderColor: theme.colors.gray[2],
  },
}));

export function CheckoutForm({ buttonRoute }: CheckoutFormProps) {
  const { classes, theme } = useStyles();
  const form = useForm({
    initialValues: {
      firsName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      paymentFirstName: "",
      paymentLastName: "",
      cardNumber: "",
      expireDateMonth: "",
      expireDateYear: "",
      ccv: "",
      saveCard: false,
      customerNote: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <Box className={classes.formWrapper} m={"md"}>
      <Text pt={"md"} size={rem(14)}>
        <span style={{ color: "red" }}>*</span>doldurulması zorunludur
      </Text>
      <form method="POST">
        <Box>
          <FormStep stepNumber={1} stepTitle="Bilgileriniz" />
          <FormInput label="İsim" withAsterisk />
          <FormInput label="Soyisim" withAsterisk />
          <FormInput label="E-posta adresi" withAsterisk />
          <FormInput label="Cep telefonu numaranız" withAsterisk />
        </Box>
        <Box mt={"sm"} className={classes.box}>
          <FormStep stepNumber={2} stepTitle="Ödeme Detayı" />
          <FormInput label="İsim" withAsterisk />
          <FormInput label="Soyisim" withAsterisk />
          <FormInput label="Kart Numarası" withAsterisk />
          <FormInput label="Son Kullanma Tarihi" withAsterisk />
          <FormInput label="Güvenlik Kodu" withAsterisk />
          <Checkbox py={"sm"} color={"blue"} label="Save my card" />
        </Box>
        <Box mt={"sm"} className={classes.box}>
          <FormStep stepNumber={2} stepTitle="Müşteri Notu" />
          <Textarea placeholder="Not ekle" variant="filled" withAsterisk />
        </Box>
        <Link href={buttonRoute}>
          <Button radius={"md"} fullWidth mt={"xl"}>
            Onayla
          </Button>
        </Link>
      </form>
    </Box>
  );
}
