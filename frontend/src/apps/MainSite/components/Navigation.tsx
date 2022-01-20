import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAuthContext } from 'context/AuthContext';

const NavBar = styled.div`
  li {
    display: inline;
    margin: 0 20px;
  }
`;

interface Props {}

const Navigation = (props: Props) => {
  const { signOut } = useAuthContext();

  return (
    <NavBar>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/register'>Register</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
        <li>
          <Link to='/giraffe-tools'>Giraffe Tools</Link>
        </li>
        <li>
          <a href='#!' onClick={signOut}>
            Logout
          </a>
        </li>
      </ul>
    </NavBar>
  );
};

export default Navigation;
