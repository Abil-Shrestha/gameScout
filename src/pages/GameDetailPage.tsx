import {
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CriticScore from '../components/CriticScore';
import DefinitionItem from '../components/DefinitionItem';
import ExpandableText from '../components/ExpandableText';
import GameAttributes from '../components/GameAttributes';
import GameScreenshots from '../components/GameScreenshots';
import GameTrailer from '../components/GameTrailer';
import useGame from '../hooks/useGame';
import { Suspense } from 'react';

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
      <Suspense fallback={<Spinner />}>
        <GameTrailer gameId={game.id} />
        <GameScreenshots gameId={game.id} />
      </Suspense>
       
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
