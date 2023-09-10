import {
  Button,
  Heading, HStack,
  Image, List,
  ListItem, Spinner
} from "@chakra-ui/react";
import useGameQueryStore from "../store";
import useGenres from "./../hooks/useGenres";
import getCroppedImageUrl from "./../services/image-url";


const GenreList = () => {
  const {data, isLoading, error } = useGenres();
  const selectedGenreId =useGameQueryStore(s => s.gameQeuery.genreId)
  const setSelectedGenreId =useGameQueryStore(s => s.setGenreId)
  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="4xl" marginTop="10px" marginBottom={8}>
        Genres
      </Heading>
      <List>
        {data?.result.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace={"normal"}
                textAlign={"left"}
                fontWeight={genre.id === selectedGenreId?.id ? "bold" : "normal"}
                onClick={() => setSelectedGenreId(genre.id)}
                fontSize="lg"
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
