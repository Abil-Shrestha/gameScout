import { IoIosStar } from "react-icons/io";
import { HStack, Icon } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Rating = ({ rating }: Props) => {
  if (rating < 3) return null;

  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= rating; i++) {
      stars.push(
        <Icon
          as={IoIosStar}
          color="yellow.400"
          boxSize="14px"
          marginTop="1px"
        />
      );
    }
    return stars;
  };

  return <HStack>{renderStars()}</HStack>;
};

export default Rating;
