import { createStyles, Container, Box, Flex, Text, rem } from "@mantine/core";
import { ProductCard } from "../cards/productCard";
import Link from "next/link";
import { IconSailboat } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  container: {
    display: "flex",
    width: "100%",
    [theme.fn.smallerThan("sm")]: {
      overflow: "hidden",
      overflowX: "scroll",
    },
  },
}));

const images = [
    "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    "https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  ];

export function OtelList() {
  const { classes, theme } = useStyles();
  return (
    <Box>
      <Container mx="md" mb="xl">
        <Flex justify="space-between">
          <Text fw={500} size={rem(14)}>
            Süper oda fırsatları
          </Text>
          <Link href="/otels">
            <Text fw={500} size={rem(14)} color={theme.colors.blue[7]}>
              Tümü
            </Text>
          </Link>
        </Flex>
      </Container>
      <Container className={classes.container}>
        <ProductCard
          advantageIcon={
            <IconSailboat color="black" stroke={1} size={rem(17)} />
          }
          fullWidth={false}
          displayButton={false}
          hideBorder={false}
          images={images}
          advantage="Deniz goren oda"
          currency="$"
          description="Hotel Saudagar, Pune: See traveller reviews, 2 user photos and best deals for ... enjoy stay here, you will find great bars and restaurants near the hotel."
          discountPercentage={25}
          displayDescription={false}
          productLocation="Alice Springs NT 0870, Australia"
          productName="The Aston Vill Hotel"
          total={200.7}
        />
        <ProductCard
          advantageIcon={
            <IconSailboat color="black" stroke={1} size={rem(17)} />
          }
          fullWidth={false}
          displayButton={false}
          hideBorder={false}
          images={images}
          advantage="Deniz goren oda"
          currency="$"
          description="Hotel Saudagar, Pune: See traveller reviews, 2 user photos and best deals for ... enjoy stay here, you will find great bars and restaurants near the hotel."
          discountPercentage={25}
          displayDescription={false}
          productLocation="Alice Springs NT 0870, Australia"
          productName="The Aston Vill Hotel"
          total={200.7}
        />
        <ProductCard
          advantageIcon={
            <IconSailboat color="black" stroke={1} size={rem(17)} />
          }
          fullWidth={false}
          displayButton={false}
          hideBorder={false}
          images={images}
          advantage="Deniz goren oda"
          currency="$"
          description="Hotel Saudagar, Pune: See traveller reviews, 2 user photos and best deals for ... enjoy stay here, you will find great bars and restaurants near the hotel."
          discountPercentage={25}
          displayDescription={false}
          productLocation="Alice Springs NT 0870, Australia"
          productName="The Aston Vill Hotel"
          total={200.7}
        />
        <ProductCard
          advantageIcon={
            <IconSailboat color="black" stroke={1} size={rem(17)} />
          }
          fullWidth={false}
          displayButton={false}
          hideBorder={false}
          images={images}
          advantage="Deniz goren oda"
          currency="$"
          description="Hotel Saudagar, Pune: See traveller reviews, 2 user photos and best deals for ... enjoy stay here, you will find great bars and restaurants near the hotel."
          discountPercentage={25}
          displayDescription={false}
          productLocation="Alice Springs NT 0870, Australia"
          productName="The Aston Vill Hotel"
          total={200.7}
        />
      </Container>
    </Box>
  );
}
