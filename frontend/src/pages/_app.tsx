import GlobalStyle from '../styles/global';
import Navbar from '../components/Navbar/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <main>
        <Navbar />
        <Component {...pageProps} />
      </main>
      
    </>
  );
}

export default MyApp