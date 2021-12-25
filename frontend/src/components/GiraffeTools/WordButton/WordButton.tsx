import { Button } from '@chakra-ui/react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  controlStateAtom,
  buttonAtomFamily,
  sectionAtomFamily
} from '../GiraffeState';

interface Props {
  buttonId: string;
  sectionId: string;
}

const WordButton: React.FC<Props> = ({ buttonId, sectionId }) => {
  const [{ word, status }, setButtonState] = useRecoilState(
    buttonAtomFamily(buttonId)
  );

  const { hideUnselected } = useRecoilValue(controlStateAtom);

  const { modes } = useRecoilValue(sectionAtomFamily(sectionId));

  const onClick = () => {
    setButtonState({
      word,
      status: modes[(modes.indexOf(status) + 1) % modes.length]
    });
  };

  return !(hideUnselected && status === 'unselected') ? (
    <Button variant={status} onClick={onClick}>
      {word}
    </Button>
  ) : (
    <></>
  );
};

export default WordButton;
