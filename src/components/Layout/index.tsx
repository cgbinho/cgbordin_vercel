import Header from '../Header';
import NavBar from '../NavBar';
import Footer from '../Footer';

import { Container, Content } from './styles';

const Layout = (props) => {
  return (
    <>
      <NavBar />
      <Container>
        <Content>{props.children}</Content>
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
