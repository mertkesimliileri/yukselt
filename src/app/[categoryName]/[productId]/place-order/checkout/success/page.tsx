'use client'
import { Container, Group, Flex, Text, rem } from "@mantine/core";
import { SuccessAnimation } from "@/app/components/successAnimation";

export default function Success () {
  return (
    <Container mt={'xl'}>
        <Flex align={'center'} direction={'column'} >
          <Text fw={600} size={rem(20)}>Ödeme Özeti</Text>
          <SuccessAnimation />
        </Flex>
        <Group position="center">
          <Text fw={700} size={rem(16)}>Ödeme Başarılı !</Text>
        </Group>
        <Group mx={'md'} mt={'md'} py={'md'} position="apart">
            <Text>Ödeme Yönetemi :</Text>
            <Text>Kredi Karti</Text>
        </Group>
    </Container>
  );
}
