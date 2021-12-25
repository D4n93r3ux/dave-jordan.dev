import { Flex, Button } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { controlStateAtom } from '../GiraffeState';

const Controls = () => {
  const [controlState, setControlState] = useRecoilState(controlStateAtom);

  const toggleHideUnselected = () => {
    setControlState({
      ...controlState,
      hideUnselected: !controlState.hideUnselected
    });
  };

  return (
    <Flex
      flex='1'
      position='sticky'
      bottom='0px'
      bg='magenta'
      justify='center'
      flexWrap='wrap'
    >
      <Button onClick={toggleHideUnselected}>Hide Unselected</Button>
      {/* <Button onClick={toggleShowFeelingsMetNeeds}>Feelings: Met Needs</Button>
      <Button onClick={toggleShowFeelingsUnmetNeeds}>
        Feelings: Unmet Needs
      </Button>
      <Button onClick={toggleShowNeeds}>Needs</Button> */}
    </Flex>
  );
};

export default Controls;
