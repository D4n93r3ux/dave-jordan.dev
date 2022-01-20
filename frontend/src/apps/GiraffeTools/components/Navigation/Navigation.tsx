import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

interface Props {}

const Navigation = (props: Props) => {
  return (
    <Box display='flex' gap='10px' p='10px'>
      <Link to='/'>Home</Link>
      <Link to=''>About</Link>
      <Link to='word-tool'>See the Tool</Link>
    </Box>
  );
};

export default Navigation;
