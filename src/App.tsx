import { Grid, GridItem } from '@chakra-ui/react'
import NavBar from './components/NavBar';

function App() {
  
  return (
    <>
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`,
    }} >
      <GridItem area='nav' bg=''><NavBar/></GridItem>
      <GridItem area='aside' bg=''>Aside</GridItem>
      <GridItem area='main' bg=''>Main</GridItem>
    </Grid>
    </>
  );
}

export default App;
