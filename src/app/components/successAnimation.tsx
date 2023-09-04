import { Transition, Box, Container, createStyles, rem } from "@mantine/core";
import { HiCheck } from "@react-icons/all-files/hi/HiCheck";
import { useState, useEffect } from "react";

const useStyles = createStyles((theme) => ({
  box: {
    position: "absolute",
    width: rem(80),
    height: rem(80),
    borderRadius: "100%",
    margin: "0 auto",
    left: 0,
    right: 0,
  },
  container: {
    position: "relative",
    width: "100%",
    marginTop: rem(56),
    height: rem(160)
  },
  icon: {
    position: "absolute",
    left: 0,
    right: 0,
    color: "white",
    margin: "auto",
    top: 0,
    bottom: 0,
  },
}));

const scale = {
  in: { transform: "scale(1.50)" },
  out: { transform: "scale(1)" },
  common: { transformOrigin: "center" },
  transitionProperty: "transform",
};

const scaleOuter = {
    in: { transform: "scale(2)" },
    out: { transform: "scale(1)" },
    common: { transformOrigin: "center" },
    transitionProperty: "transform",
  };

export function SuccessAnimation() {
  const { classes, theme } = useStyles();
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    setRendered(true);
  }, []);

  return (
    <Container mx={"auto"} className={classes.container}>
      <Transition
        mounted={rendered}
        transition={scaleOuter}
        duration={1000}
        timingFunction="ease"
      >
        {(styles) => (
          <Box style={{ ...styles }} bg={theme.colors.blue[2]} className={classes.box}></Box>
        )}
      </Transition>
      <Transition
        mounted={rendered}
        transition={scale}
        duration={1000}
        timingFunction="ease"
      >
        {(styles) => (
          <Box
            style={{ ...styles }}
            bg={theme.colors.blue[3]}
            className={classes.box}
          ></Box>
        )}
      </Transition>
      <Box bg={theme.colors.blue[6]} className={classes.box}>
        <HiCheck size={42} className={classes.icon} />
      </Box>
    </Container>
  );
}
