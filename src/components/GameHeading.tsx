import { Heading } from "@chakra-ui/react";
import useGameQueryStore from "../store";
import useGenres from "./../hooks/useGenres";
const GameHeading = () => {
  const genreId = useGameQueryStore(s => s.gameQuery.genreId)
  const genre = useGenres(genreId);
  
  const platformId= useGameQueryStore(s => s.gameQuery.platformId)
  
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  }`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
