import React from "react";
import { ChakraProvider, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import theme from "./theme";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`, // 1024px
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
};

export default App;
