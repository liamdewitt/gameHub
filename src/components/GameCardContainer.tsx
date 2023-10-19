import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    //when box renders, it returns a div
    <Box width="300px" borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
