"use client";
import { AlertPaper } from "@/app/components/alertPaper";
import { CheckoutCard } from "@/app/components/cards/checkoutCard";
import { CheckoutForm } from "@/app/components/form/checkoutForm";
import { CheckoutHeader } from "@/app/components/layout/checkoutHeader";
import { IoIosArrowBack } from "@react-icons/all-files/io/IoIosArrowBack";
import { useRouter } from "next/navigation";
import { Container, rem } from "@mantine/core";
import { ProductCard } from "@/app/components/cards/productCard";
import { IconSailboat } from "@tabler/icons-react";
import { usePathname } from "next/navigation";

const images = [
  "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
];

export default function Checkout() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div>
      <CheckoutHeader
        title="Rezervasyon Ozet"
        icon={<IoIosArrowBack size={21} onClick={() => router.back()} />}
      />
      <Container>
        <AlertPaper
          alert={true}
          content={"Lütfen rezervasyon özetinizi kontrol ediniz."}
        />
        <ProductCard
          displayDescription={false}
          fullWidth={true}
          displayButton={false}
          hideBorder={false}
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
        <CheckoutCard
          cost={60}
          vat={20}
          currency="$"
          dayCount={1}
          entryDate="28 Agustos 2023 Pazartesi"
          leaveDate="29 Agustos 2023 Sali"
          profitPercentage={20}
          productName="Luxe Buyuk Yatakli Oda"
          total={80}
        />
        <CheckoutForm buttonRoute={pathname + '/success'} />
      </Container>
    </div>
  );
}
