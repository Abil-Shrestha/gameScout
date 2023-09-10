import { Grid, GridItem, Flex, Box, Show } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import GameGrid from "../components/GameGrid";
import GenreList from "../components/GenreList";
import { useState } from "react";
import { Genre } from "../hooks/useGenres";
import PlatformSelector from "../components/PlatformSelector";
import { Platform } from "../hooks/useGames";
import SortSelector from "../components/SortSelector";
import GameHeading from "../components/GameHeading";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import  {ReactQueryDevtools } from '@tanstack/react-query-devtools'

const HomePage = () => {
  return (
    <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "250px 1fr",
        }}
      >
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingLeft={2}>
            <GameHeading />
            <Flex marginBottom={5}>
              <Box marginRight={5}>
                <PlatformSelector
                  selectedPlatform={gameQuery.platform}
                  onSelectPlatform={(platform) =>
                    setGameQuery({ ...gameQuery, platform })
                  }
                />
              </Box>
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              />
            </Flex>
          </Box>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
  )
}

export default HomePage