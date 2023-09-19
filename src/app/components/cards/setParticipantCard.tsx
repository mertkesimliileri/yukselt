import { Group, Text, createStyles, rem, Paper } from "@mantine/core";
import IncDecNumberInput from "../incDecNumberInput";
import { useState } from "react";
import { BsPerson } from "@react-icons/all-files/bs/BsPerson";

const useStyles = createStyles((theme) => ({
  flex: {
    display: "flex",
    flexDirection: "column",
    gap: 0,
    alignItems: "flex-start",
  },
  incDecTextWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 0,
    alignItems: "flex-start",
  },
  textBold: {
    fontWeight: 500,
    fontSize: rem(16)
  },
  textNormal: {
    fontWeight: 500,
    fontSize: rem(14),
    color: theme.colors.gray[6]
  }
}));

type Props = {
  adultLabel: string;
  adultDescription: string;
  childLabel: string;
  childDescription: string;
  babyLabel: string;
  babyDescription: string;
  guestLabel: string;
};

export default function SetParticipantCard({
  adultLabel,
  adultDescription,
  childLabel,
  childDescription,
  babyLabel,
  babyDescription,
  guestLabel,
}: Props) {
  const { classes, theme } = useStyles();
  const [adultNumber, setAdultNumber] = useState(0);
  const [childNumber, setChildNumber] = useState(0);
  const [babyNumber, setBabyNumber] = useState(0);

  const adultHandler = (value: number) => {
    setAdultNumber(value);
  };

  const childHandler = (value: number) => {
    setChildNumber(value);
  };

  const babyHandler = (value: number) => {
    setBabyNumber(value);
  };

  return (
    <div>
      <Paper pb={'xl'} radius={"lg"} px={"xl"} bg={theme.colors.gray[1]}>
        <Group>
          <BsPerson size={20} />
          <Group py={rem(5)} className={classes.flex}>
            <Text color={theme.colors.gray[7]} size={rem(10)}>
              {guestLabel}
            </Text>
            <Text size={rem(14)}>
              {adultNumber > 0 && adultNumber + " Yetiskin, "}
              {childNumber > 0 && childNumber + " Cocuk, "}
              {babyNumber > 0 && babyNumber + " Bebek"}
              {adultNumber == 0 && babyNumber == 0 && childNumber == 0 && "-"}
            </Text>
          </Group>
        </Group>
        <Group position="apart">
          <Group className={classes.incDecTextWrapper}>
            <Text className={classes.textBold}>{adultLabel}</Text>
            <Text className={classes.textNormal}>{adultDescription}</Text>
          </Group>
          <IncDecNumberInput handler={adultHandler} />
        </Group>
        <Group position="apart">
          <Group className={classes.incDecTextWrapper}>
            <Text className={classes.textBold}>{childLabel}</Text>
            <Text className={classes.textNormal}>{childDescription}</Text>
          </Group>
          <IncDecNumberInput handler={childHandler} />
        </Group>
        <Group position="apart">
          <Group className={classes.incDecTextWrapper}>
            <Text className={classes.textBold}>{babyLabel}</Text>
            <Text className={classes.textNormal}>{babyDescription}</Text>
          </Group>
          <IncDecNumberInput handler={babyHandler} />
        </Group>
      </Paper>
    </div>
  );
}
