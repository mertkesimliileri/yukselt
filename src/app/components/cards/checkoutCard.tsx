import {
  Card,
  CardSection,
  createStyles,
  Group,
  Box,
  Badge,
  Text,
  rem,
} from "@mantine/core";
import { RiPriceTag3Line } from "@react-icons/all-files/ri/RiPriceTag3Line";

const useStyles = createStyles((theme) => ({
  cardSection: {
    background: theme.colors.blue[1],
    color: theme.colors.blue[7],
  },

  textBold: {
    fontWeight: 600,
    fontSize: rem(14)
  },

  textRegular: {
    fontSize: rem(12),
    fontWeight: 400,
  }
}));

export interface CheckoutCardProps {
  entryDate: string;
  leaveDate: string;
  dayCount: number;
  cost: number;
  vat: number;
  profitPercentage: number;
  total: number;
  productName: string;
  currency: string;
}

export function CheckoutCard({
  entryDate,
  leaveDate,
  dayCount,
  cost,
  vat,
  profitPercentage,
  total,
  productName,
  currency,
}: CheckoutCardProps) {
  const { classes, theme } = useStyles();

  return (
    <Card m={"md"} mb={'xl'} withBorder radius={"md"}>
      <CardSection className={classes.cardSection}>
        <Text py={"sm"} className={classes.textBold} align="center">
          Ozet
        </Text>
      </CardSection>
      <CardSection px={"md"}>
        <Box py={"sm"}>
          <Group position="apart">
            <Text className={classes.textRegular}>Giris</Text>
            <Text className={classes.textBold}>{entryDate}</Text>
          </Group>
          <Group position="apart">
            <Text className={classes.textRegular}>Cikis</Text>
            <Text className={classes.textBold}>{leaveDate}</Text>
          </Group>
          <Group position="right">
            <Badge mt={'sm'}>{dayCount} gece</Badge>
          </Group>
        </Box>
        <Box
          sx={(theme) => ({
            borderTop: "1px solid",
            borderColor: theme.colors.gray[2],
          })}
          py={"sm"}
        >
          <Text className={classes.textBold}>{productName}</Text>
          <Group position="apart">
            <Text className={classes.textRegular}>Ucret</Text>
            <Text className={classes.textBold}>
              {currency}
              {cost}
            </Text>
          </Group>
          <Group position="apart">
            <Text className={classes.textRegular}>Vergiler ve ek ucretler</Text>
            <Text className={classes.textBold}>
              {currency}
              {vat}
            </Text>
          </Group>
        </Box>
        <Box
          sx={(theme) => ({
            borderTop: "1px solid",
            borderColor: theme.colors.gray[2],
          })}
          py={"sm"}
        >
          <Group>
            <Badge leftSection={<RiPriceTag3Line />}>
              <Text className={classes.textRegular}>Kazanc</Text>
            </Badge>
            <Text className={classes.textBold}>%{profitPercentage} kazaniyorsunuz.</Text>
          </Group>
        </Box>
        <Box
          sx={(theme) => ({
            borderTop: "1px solid",
            borderColor: theme.colors.gray[2],
          })}
          py={"sm"}
        >
          <Group position="apart">
            <Text className={classes.textBold}>Toplam tutar</Text>
            <Text className={classes.textBold}>
              {currency}
              {total}
            </Text>
          </Group>
        </Box>
      </CardSection>
    </Card>
  );
}
