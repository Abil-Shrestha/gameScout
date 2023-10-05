import {
  Card,
  CardBody,
  Heading,
  HStack,
  Image
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Game from '../entities/Game';
import getCroppedImageUrl from '../services/image-url';
import CriticScore from './CriticScore';
import Emoji from './Emoji';
import PlatformIconList from './PlatformIconList';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Heading fontSize="2xl" padding="20px" height="100px" text-align="center">
          <Link to={'/games/' + game.slug}>{game.name}</Link>
        </Heading>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" >
          <PlatformIconList
            platforms={game.parent_platforms?.map(
              (p) => p.platform
            )}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
