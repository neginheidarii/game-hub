import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="coral" h="100px">
        Nav
      </GridItem>
      {/*  Show component is used to show/hide components based on breakpoints */}
      <Show above="lg">
        <GridItem area="aside" bg="gold" h="100px">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue" h="100px">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
