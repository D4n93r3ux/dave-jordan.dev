import WordSection from '../WordSection';
import Controls from '../Controls';
import { Flex } from '@chakra-ui/react';
import testData from '../../testData';
import { useRecoilValue } from 'recoil';
import { useEffect } from 'react';
import { appAtom } from '../../state';
import { useHydrateState } from '../../hooks';

const WordTool = () => {
  const appState = useRecoilValue(appAtom);

  const hydrateState = useHydrateState(testData);

  useEffect(() => {
    hydrateState();
  }, []);

  return (
    <>
      <Flex flexDirection='column' marginBottom='30px'>
        {appState.sectionIds.map(id => (
          <WordSection sectionId={id} />
        ))}
      </Flex>
      <Controls />
    </>
  );
};

export default WordTool;
