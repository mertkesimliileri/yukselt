import { IconEye, IconMessageCircle } from '@tabler/icons-react';
import { Card, Text, Group, Center, createStyles, getStylesRef, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    height: rem(280),
    width: rem(300),
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    [theme.fn.smallerThan('sm')]: {
        height: rem(150),
        width: rem(170),
        flexShrink: 0
      },
  },

  image: {
    ...theme.fn.cover(),
    ref: getStylesRef('image'),
    backgroundSize: 'cover',
  },

  overlay: {
    position: 'absolute',
    top: '20%',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .85) 90%)',
  },

  content: {
    height: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    zIndex: 1,
  },

  title: {
    color: theme.white,
    marginBottom: rem(5),
  },

  bodyText: {
    color: theme.colors.dark[2],
    marginLeft: rem(7),
  },

  author: {
    color: theme.colors.dark[2],
  },
}));

interface EventCoverCardProps {
  link: string;
  image: string;
  title: string;
}

export function EventCoverCard({ image, title, link}: EventCoverCardProps) {
  const { classes, theme } = useStyles();

  return (
    <Card
      p="md"
      shadow="lg"
      className={classes.card}
      radius="md"
      component="a"
      href={link}
      target="_blank"
      mx={rem(16)}
    >
      <div className={classes.image} style={{ backgroundImage: `url(${image})` }} />
      <div className={classes.overlay} />

      <div className={classes.content}>
        <div>
          <Text size="lg" className={classes.title} weight={500}>
            {title}
          </Text>
          <Text size="sm" className={classes.title} weight={400}>
            Kesfet
          </Text>
        </div>
      </div>
    </Card>
  );
}