import { Button, HStack, useColorMode } from "@chakra-ui/react";
import { FiSun } from "react-icons/fi";
import { MdDarkMode } from "react-icons/md";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Button onClick={toggleColorMode}>
        {colorMode === "light" ? <MdDarkMode /> : <FiSun />}
      </Button>
    </HStack>
  );
};

export default ColorModeSwitch;
