import { Flex, Button } from '@chakra-ui/react';

interface Props {
  view: string;
  cycleView: () => void;
  resetButtons: () => void;
}

const Controls = ({ view, cycleView, resetButtons }: Props) => {
  return (
    <Flex
      position='fixed'
      bottom='0px'
      left='50%'
      justifyContent='center'
      gap='10px'
      transform='translateX(-50%)'
      border='2px solid'
      borderBottom='none'
      borderColor='yellow.300'
      borderRadius='18px 18px 0px 0px'
      p='6px'
      bg='yellow.100'
    >
      <Button variant='control' size='xs' onClick={cycleView}>
        View: {view}
      </Button>
      <Button variant='control' size='xs' onClick={resetButtons}>
        Reset
      </Button>
    </Flex>
  );
};

export default Controls;
