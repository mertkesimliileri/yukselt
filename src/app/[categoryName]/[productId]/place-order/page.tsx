'use client'
import { useState } from 'react';
import { Group, createStyles, rem } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { CheckoutFooter } from '@/app/components/layout/checkoutFooter';
import { CheckoutHeader } from '@/app/components/layout/checkoutHeader';
import { IoIosCloseCircleOutline } from '@react-icons/all-files/io/IoIosCloseCircleOutline'
import { usePathname, useRouter } from 'next/navigation'
import { AlertPaper } from '@/app/components/alertPaper';

type PlaceOrderProps = {}

const useStyles = createStyles((theme) => ({
    calendar: {
        backgroundColor: theme.colors.gray[1],
        borderRadius: rem(8),
    },
    calendarHeaderLevel: {
        fontSize: rem(14),
        fontWeight: 700,
    },
    weekday: {
        fontSize: rem(12),
        fontWeight: 500,
        color: theme.colors.dark[5]
    },
    day: {
        color: theme.colors.gray[6],
        fontSize: rem(12),
        fontWeight: 500,

        '&[data-selected]': {
            backgroundColor: theme.colors.indigo[2],
            color: theme.colors.dark[4]
        },
        '&[data-in-range]': {
            backgroundColor: theme.colors.indigo[2],
            color: theme.colors.dark[4],
        },
        '&[data-in-range]:hover': {
            backgroundColor: theme.colors.indigo[4],
        },
        '&[data-first-in-range]': {
            borderTopLeftRadius: rem(30),
            borderBottomLeftRadius: rem(30),
        },
        '&[data-first-in-range]:hover': {
            backgroundColor: theme.colors.indigo[4],
        },
        '&[data-last-in-range]': {
            borderTopRightRadius: rem(30),
            borderBottomRightRadius: rem(30),
        },
        '&[data-last-in-range]:hover': {
            backgroundColor: theme.colors.indigo[4],
        }
    },
}));

export default function PlaceOrder() {
    const { classes } = useStyles();
    const pathname = usePathname();
    const router = useRouter();
    const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);

    return (
        <div>
            <CheckoutHeader icon={<IoIosCloseCircleOutline size={24} onClick={() => router.back()} />} title='Takvim' />
            <Group position="center">
                <DatePicker
                    classNames={{
                        calendar: classes.calendar,
                        calendarHeaderLevel: classes.calendarHeaderLevel,
                        weekday: classes.weekday,
                        day: classes.day,
                    }}
                    size='lg'
                    type="range"
                    allowSingleDateInRange
                    value={value}
                    onChange={setValue}
                    defaultDate={new Date(2021, 7)}
                />
            </Group>
            <Group position='center'>
                <AlertPaper alert={false} content={'Mevcut rezervasyonunuz, 15.08.2023 ve 24.08.2023 tarihleri arasındadır.'} />
            </Group>
            <Group position='center'>
                <AlertPaper alert={false} content={'Size sunulan avantaj paketinden faydalanabilmek için aşağıda mavi ile işaretlenmiş uygun tarihler için seçim yapabilirsiniz.'} />
            </Group>
            <CheckoutFooter cost={480} costType='gece' buttonRoute={pathname + '/checkout'} buttonText='Devam et' />
        </div>
    )
}
