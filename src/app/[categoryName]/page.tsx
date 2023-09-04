"use client";
import ReservationCard from "../components/cards/reservationCard";
import { ProductCard } from "../components/cards/productCard";
import { Box, Container,rem } from "@mantine/core";
import { HeaderSimple } from "../components/layout/header";
import { IconSailboat } from "@tabler/icons-react";

const images = [
    "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    "https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
];

export default function ProductListPage() {
  return (
    <main>
      <HeaderSimple />
      <Box>
        <ReservationCard />
        <Container
          sx={{
            margin: "auto",
          }}
        >
          <ProductCard
            advantageIcon={
                <IconSailboat color="black" stroke={1} size={rem(17)} />
              }
              fullWidth={true}
              displayButton={true}
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
              fullWidth={true}
              displayButton={true}
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
    </main>
  );
}
