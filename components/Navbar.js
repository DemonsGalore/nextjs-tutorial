import Link from 'next/link';
import styled from 'styled-components';

const NavMain = styled.nav`
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  position: fixed;
  background: rgba(17, 17, 17, 0.9);
  box-shadow: 0 1px 5px rgba(104, 104, 104, 0.8);
  padding: 0 6rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  height: 3rem;
  grid-template-columns: repeat(2, 6rem);
`;

const ListElement = styled.li`
  display: grid;
  cursor: pointer;
`;

const LinkTag = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  color: white;
  text-align: center;
  display: block;
  margin: auto 0;
`;

const Navbar = () => (
  <NavMain>
    <List>
      <ListElement><Link href="/"><LinkTag><i className="fab fa-bitcoin"></i></LinkTag></Link></ListElement>
      <ListElement><Link href="/about"><LinkTag>About</LinkTag></Link></ListElement>
    </List>
  </NavMain>
);

export default Navbar;
