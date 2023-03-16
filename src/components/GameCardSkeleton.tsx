import { Skeleton, CardBody, Card, SkeletonText } from "@chakra-ui/react";

const GameCarsSkeleton = () => {
  return (
    <Card>
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCarsSkeleton;
