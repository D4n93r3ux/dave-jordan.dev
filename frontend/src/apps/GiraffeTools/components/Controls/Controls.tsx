import { Box, Button } from '@mui/material';
// import { Flex, Button } from '@chakra-ui/react';

interface Props {
  view: string;
  cycleView: () => void;
  resetButtons: () => void;
}

const Controls = ({ view, cycleView, resetButtons }: Props) => {
  return (
    <Box
      display='flex'
      position='fixed'
      bottom='0px'
      left='50%'
      justifyContent='center'
      gap='10px'
      // transform='translateX(-50%)'
      border='2px solid'
      borderBottom='none'
      borderColor='control.dark'
      borderRadius='18px 18px 0px 0px'
      p='6px'
      bgcolor='control.light'
      sx={{
        transform: 'translateX(-50%)'
      }}
    >
      <Button variant='control' onClick={cycleView}>
        View: {view}
      </Button>
      <Button variant='control' onClick={resetButtons}>
        Reset
      </Button>
    </Box>
  );
};

export default Controls;
