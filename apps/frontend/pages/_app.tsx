import { AppProps } from 'next/app';
import './styles.css';
import 'tailwindcss/tailwind.css';
import Footer from '../components/Footer';
import Header from '../components/Header';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container m-auto my-20">
        <Header />
        <Component {...pageProps} />
        <Footer />
    </div>
  );
}

export default CustomApp;
