"use client";
import { Container, Group, Flex, Text, Box, rem, Button, createStyles} from "@mantine/core";
import { SuccessAnimation } from "@/app/components/successAnimation";
import { ThemeContext } from "@emotion/react";
import { HiOutlineDocumentDownload } from '@react-icons/all-files/hi/HiOutlineDocumentDownload'

const useStyles = createStyles((theme) => ({
}));

export default function Success() {

  const { classes, theme } = useStyles();

  return (
    <Flex p={'md'} sx={{height: '100vh'}} direction={'column'} justify={'space-between'}>
      <Box>
      <Flex align={"center"} direction={"column"}>
        <Text fw={600} size={rem(20)}>
          Ödeme Özeti
        </Text>
        <SuccessAnimation />
      </Flex>
      <Group position="center">
        <Text fw={700} size={rem(16)}>
          Ödeme Başarılı !
        </Text>
      </Group>
      <Box sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.09)" }} mx={"md"}>
        <Group mt={"md"} py={"sm"} position="apart">
          <Text size={rem(12)} fw={700}>
            Ödeme Yönetemi :
          </Text>
          <Text size={rem(12)}>Kredi Karti</Text>
        </Group>
        <Group py={"sm"} position="apart">
          <Text size={rem(12)} fw={700}>
            Tarih :
          </Text>
          <Text size={rem(12)}>29.08.2023</Text>
        </Group>
        <Group py={"sm"} position="apart">
          <Text size={rem(12)} fw={700}>
            ID :
          </Text>
          <Text size={rem(12)}>DIAJ87</Text>
        </Group>
      </Box>
      <Box mx={"md"}>
        <Group py={"sm"} position="apart">
          <Text size={rem(12)} fw={700}>
            Toplam Tutar :
          </Text>
          <Text fw={600} size={rem(16)}>$793</Text>
        </Group>
      </Box>
      </Box>
      <Button leftIcon={<HiOutlineDocumentDownload size={24} color={theme.colors.gray[0]} />} bg={theme.colors.blue[7]} fullWidth>Faturamı indir</Button>
    </Flex>
  );
}
