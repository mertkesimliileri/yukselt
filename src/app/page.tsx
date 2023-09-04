"use client";
import { HeroContentLeft } from './components/layout/hero';
import ReservationCard from './components/cards/reservationCard';
import { OtelList } from './components/productSliders/otelSlider';
import { EventList } from './components/productSliders/eventSlider';
import { Footer } from './components/layout/footer'; 
import { HeaderSimple } from './components/layout/header';

export default function Home() {
  return (
    <main>
      <HeaderSimple />
      <HeroContentLeft />
      <ReservationCard />
      <OtelList />
      <EventList />
      <Footer />
    </main>
  )
}
