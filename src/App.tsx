import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";

const App = () => {
  return (
    <ChakraProvider>
      <Button colorScheme="blue">Button</Button>
    </ChakraProvider>
  );
};

export default App;
