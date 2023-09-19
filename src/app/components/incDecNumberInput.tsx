import { useState, useRef } from "react";
import {
  NumberInput,
  Group,
  ActionIcon,
  NumberInputHandlers,
  createStyles,
  rem,
} from "@mantine/core";
import { AiOutlinePlusCircle } from "@react-icons/all-files/ai/AiOutlinePlusCircle";
import { AiOutlineMinusCircle } from "@react-icons/all-files/ai/AiOutlineMinusCircle";

const useStyles = createStyles((theme) => ({
  actionIcon: {
    borderColor: theme.colors.dark[5],
    borderWidth: rem(2),
  },
}));

type Props = {
    handler: Function
};

export default function IncDecNumberInput({handler}: Props) {
  const [value, setValue] = useState<number | "">(0);
  const handlers = useRef<NumberInputHandlers>();
  const { classes, theme } = useStyles();

  return (
    <div>
      <Group spacing={5}>
        <AiOutlineMinusCircle
          size={20}
          onClick={() => handlers.current.decrement()}
        />
        <NumberInput
          hideControls
          value={value}
          onChange={(val) => {setValue(val); handler(val)}}
          handlersRef={handlers}
          max={10}
          min={0}
          step={1}
          styles={{ input: { width: rem(48), background: 'none', fontSize: rem(20), fontWeight: 500 , border: 'none', textAlign: "center" } }}
        />
        <AiOutlinePlusCircle
          size={20}
          onClick={() => handlers.current.increment()}
        />
      </Group>
    </div>
  );
}
