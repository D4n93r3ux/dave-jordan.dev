import { useState, useEffect, memo } from 'react';
import { Button } from '@chakra-ui/react';
import { SetButtonStatusFunction } from '../../types';

interface Props {
  sectionIndex?: number;
  cardIndex?: number;
  wordButtonIndex?: number;
  word: string;
  status: string;
  view?: string;
  modes: string[];
  setButtonStatus: SetButtonStatusFunction | null;
}

const WordButton: React.FC<Props> = ({
  sectionIndex = 0,
  cardIndex = 0,
  wordButtonIndex = 0,
  word,
  status,
  view = 'all',
  modes,
  setButtonStatus
}) => {
  const [mode, setMode] = useState(status);

  useEffect(() => setMode(status), [status]);

  const onClick = () => {
    const newStatus =
      view !== 'all'
        ? 'unselected'
        : modes[(modes.indexOf(mode) + 1) % modes.length];

    // For testing interactivity in Storybook, this button can fall back
    // to internal state if it has not been passed a callback to set
    // parent state. This is slightly annoying and if a better way presents
    // itself, this will be eagerly updated.
    if (setButtonStatus) {
      setButtonStatus({ sectionIndex, cardIndex, wordButtonIndex, newStatus });
    } else {
      setMode(newStatus);
    }
  };

  const isButtonVisible =
    view === 'all' ||
    (view === 'selected' && status !== 'unselected') ||
    status === view;

  return isButtonVisible ? (
    <Button variant={mode} onClick={onClick}>
      {word}
    </Button>
  ) : null;
};

export default memo(WordButton);
