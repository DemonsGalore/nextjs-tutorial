import Head from 'next/head';
import Navbar from './Navbar';
import styled from 'styled-components';

const Main = styled.main`
  margin-top: 4rem;
  padding: 0 6rem;
`;

const Layout = (props) => (
  <div>
    <Head>
      <title>BitZpriZe</title>
      <script defer src="https://use.fontawesome.com/releases/v5.8.1/js/all.js" integrity="sha384-g5uSoOSBd7KkhAMlnQILrecXvzst9TdC09/VM+pjDTCM+1il8RHz5fKANTFFb+gQ" crossorigin="anonymous"></script>
    </Head>
    <Navbar />
    <Main>
      {props.children}
    </Main>
  </div>
);

export default Layout;
