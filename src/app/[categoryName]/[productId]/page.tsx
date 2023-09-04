"use client";
import React from "react";
import {
  createStyles,
  Image,
  Box,
  Container,
  Card,
  Footer,
  Collapse,
  Text,
  Group,
  Button,
  getStylesRef,
  rem,
  Badge,
  Flex,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { IconSailboat } from "@tabler/icons-react";
import { IconMapPin } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { CgChevronDownO } from "@react-icons/all-files/cg/CgChevronDownO";
import { CgChevronUpO } from "@react-icons/all-files/cg/CgChevronUpO";
import { CheckoutFooter } from "@/app/components/layout/checkoutFooter";
import { HeaderSimple } from "@/app/components/layout/header";
import { usePathname } from "next/navigation";
import { ProductCard } from "@/app/components/cards/productCard";

const useStyles = createStyles((theme) => ({
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
  container: {
    overflow: "visible",
    overflowY: "scroll",
  },
  box: {},
}));

const images = [
  "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
];

type ProductDetailsProps = {
  params: { productId: string };
};

export default function ProductDetails({ params }: ProductDetailsProps) {
  const { classes, theme } = useStyles();
  const pathname = usePathname();

  const slides = images.map((image) => (
    <Carousel.Slide key={image}>
      <Image radius="md" src={image} height={220} />
    </Carousel.Slide>
  ));

  return (
    <main>
      <HeaderSimple />
      <Box mb={rem(65)} className={classes.box} pb="xl" pt="xl">
        <Container className={classes.container}>
          <ProductCard
            displayDescription={true}
            fullWidth={true}
            displayButton={false}
            hideBorder={true}
            advantageIcon={
              <IconSailboat color="black" stroke={1} size={rem(17)} />
            }
            images={images}
            advantage="Deniz goren oda"
            currency="$"
            description="Hotel Saudagar, Pune: See traveller reviews, 2 user photos and best deals for ... enjoy stay here, you will find great bars and restaurants near the hotel."
            discountPercentage={25}
            productLocation="Alice Springs NT 0870, Australia"
            productName="The Aston Vill Hotel"
            total={200.7}
          />
        </Container>
      </Box>
      <CheckoutFooter
        cost={200.7}
        costType="gece"
        buttonRoute={pathname + "/place-order"}
        buttonText="Tarih Seciniz"
      />
    </main>
  );
}
