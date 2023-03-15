import { Skeleton,CardBody, Card, SkeletonText } from '@chakra-ui/react'

const GameCarsSkeleton = () => {
  return (
    <Card width='300px' borderRadius={10} overflow={"hidden"}>
        <Skeleton height='200px'/>
            <CardBody>
                <SkeletonText/>
            </CardBody>
    </Card>
  )
}

export default GameCarsSkeleton