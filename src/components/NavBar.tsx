import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";

const navbar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize={"60px"} />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default navbar;
