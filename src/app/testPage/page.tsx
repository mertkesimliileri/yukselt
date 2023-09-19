"use client";
import { Container } from "@mantine/core";
import EventSummaryCard from "../components/cards/eventSummaryCard";
import { BsPerson } from "@react-icons/all-files/bs/BsPerson";
import { BsCalendar } from "@react-icons/all-files/bs/BsCalendar";
import SetParticipantCard from "../components/cards/setParticipantCard";

export default function TestPage() {
  return (
    <main>
      <Container>
        <EventSummaryCard
          title="Misafirler"
          data="1 Yetişkin , 2 Çocuk"
          icon={<BsPerson size={20} />}
        />
        <EventSummaryCard
          title="Tarih seçiniz"
          data="28 Ağu - 29 Ağu"
          icon={<BsCalendar size={20} />}
        />
        <SetParticipantCard
          guestLabel="Misafirler"
          adultLabel="Yetişkinler"
          adultDescription="13 yaş ve üstü"
          childLabel="Çocuklar"
          childDescription="1-12 yaş"
          babyLabel="Bebekler"
          babyDescription="2 yaş altı"
        />
      </Container>
    </main>
  );
}
