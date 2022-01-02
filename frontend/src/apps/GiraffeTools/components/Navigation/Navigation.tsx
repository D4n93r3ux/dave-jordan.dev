import { Flex, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

interface Props {}

const Navigation = (props: Props) => {
  return (
    <Flex gap='10px' p='10px'>
      <Link as={RouterLink} to='/'>
        Home
      </Link>
      <Link as={RouterLink} to=''>
        About
      </Link>
      <Link as={RouterLink} to='word-tool'>
        See the Tool
      </Link>
    </Flex>
  );
};

export default Navigation;
