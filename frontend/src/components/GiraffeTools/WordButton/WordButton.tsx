import { Button } from '@chakra-ui/react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  wordButtonAtomFamily,
  sectionAtomFamily,
  isButtonDisplayedSelector
} from '../GiraffeState';

interface Props {
  wordButtonId: string;
  sectionId: string;
}

const WordButton: React.FC<Props> = ({ wordButtonId, sectionId }) => {
  const [{ word, status }, setButtonState] = useRecoilState(
    wordButtonAtomFamily(wordButtonId)
  );
  const { modes } = useRecoilValue(sectionAtomFamily(sectionId));
  const isDisplayed = useRecoilValue(isButtonDisplayedSelector(wordButtonId));

  const onClick = () => {
    setButtonState({
      word,
      status: modes[(modes.indexOf(status) + 1) % modes.length]
    });
  };

  return isDisplayed ? (
    <Button variant={status} onClick={onClick}>
      {word}
    </Button>
  ) : (
    <></>
  );
};

export default WordButton;
