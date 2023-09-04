import {
  createStyles,
  Image,
  Card,
  Text,
  Group,
  Button,
  getStylesRef,
  rem,
  Badge,
  Flex,
  Box,
  Collapse,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import Link from "next/link";
import { CgChevronUpO } from "@react-icons/all-files/cg/CgChevronUpO";
import { CgChevronDownO } from "@react-icons/all-files/cg/CgChevronDownO";
import { useDisclosure } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  price: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  discount: {
    position: "absolute",
    top: theme.spacing.xs,
    right: rem(12),
    pointerEvents: "none",
    background: "#FF4343",
    color: "white",
    height: rem(44),
    width: rem(44),
    fontSize: rem(7),
    textAlign: "center",
    padding: 0,
  },

  features: {
    textTransform: "capitalize",
  },

  carousel: {
    "&:hover": {
      [`& .${getStylesRef("carouselControls")}`]: {
        opacity: 1,
      },
    },
  },

  carouselControls: {
    ref: getStylesRef("carouselControls"),
    transition: "opacity 150ms ease",
    opacity: 0,
  },

  carouselIndicator: {
    width: rem(4),
    height: rem(4),
    transition: "width 250ms ease",

    "&[data-active]": {
      width: rem(16),
    },
  },
}));

interface ProductCardProps {
  fullWidth: boolean;
  displayDescription: boolean;
  hideBorder: boolean;
  displayButton: boolean;
  images: string[];
  advantage: string;
  advantageIcon: React.ReactNode;
  productName: string;
  productLocation: string;
  total: number;
  currency: string;
  discountPercentage: number;
  description: string;
}

export function ProductCard({
  fullWidth,
  hideBorder,
  displayButton,
  images,
  advantage,
  advantageIcon,
  productName,
  productLocation,
  total,
  currency,
  discountPercentage,
  description,
  displayDescription
}: ProductCardProps) {
  const { classes, theme } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);
  const slides = images.map((image) => (
    <Carousel.Slide key={image}>
      <Image src={image} height={220} />
    </Carousel.Slide>
  ));

  return (
    <Card
      radius="md"
      withBorder={!hideBorder}
      sx={{
        [theme.fn.smallerThan("sm")]: {
          maxWidth: fullWidth ? "100%" : rem(257),
          flexShrink: 0,
          marginBottom: fullWidth ? rem(16) : 0,
        },
      }}
      mx={rem(16)}
      padding="sm"
    >
      <Card.Section>
        <Carousel
          withIndicators
          loop
          classNames={{
            root: classes.carousel,
            controls: classes.carouselControls,
            indicator: classes.carouselIndicator,
          }}
        >
          {slides}
        </Carousel>
      </Card.Section>

      <Badge className={classes.discount}>
        <Text>%{discountPercentage}</Text>
        <Text>Indirim</Text>
      </Badge>

      <Group position="left" mt="md">
        <Text fw={500} fz="lg">
          Avantajlar
        </Text>
      </Group>

      <Badge
        bg={theme.colors.gray[1]}
        leftSection={advantageIcon}
        p="md"
        my="sm"
        radius="sm"
        className={classes.features}
      >
        <Text color="black" fw={400} size={rem(12)}>
          {advantage}
        </Text>
      </Badge>

      <Text fw={500} fz="lg">
        {productName}
      </Text>
      <Text fw={300} pt="sm" fz="sm">
        {productLocation}
      </Text>
      {displayDescription ? (
        <Box>
          <Text mt="xl" fw={500} fz="lg">
            Description
          </Text>
          <Text mt="md" fw={400} lh={rem(18)} color="dimmed" size={rem(12)}>
            {description}
          </Text>
          <Box mx="auto">
            <Collapse in={opened}>
              <Text fw={400} lh={rem(18)} size={rem(12)} color="dimmed">
                {description}
              </Text>
            </Collapse>
            <Group mt="md" position="center">
              {opened ? (
                <CgChevronUpO
                  size={21}
                  strokeWidth={0.5}
                  color={"#EE685F"}
                  onClick={toggle}
                />
              ) : (
                <CgChevronDownO
                  size={21}
                  strokeWidth={0.5}
                  color={"#EE685F"}
                  onClick={toggle}
                />
              )}
            </Group>
          </Box>
        </Box>
      ) : undefined}
      {!hideBorder ? (
        <Flex direction={"column"} rowGap={"sm"} mt="sm">
          <div>
            <Text fz="md" span fw={500} className={classes.price}>
              {currency}
              {total}
            </Text>
            <Text span fz="sm" c="dimmed">
              {" "}
              / gece
            </Text>
          </div>
          {displayButton ? (
            <Link href="/otels/1">
              <Button fullWidth bg={theme.colors.red[6]} radius="md">
                Rezerve et
              </Button>
            </Link>
          ) : undefined}
        </Flex>
      ) : undefined}
    </Card>
  );
}
