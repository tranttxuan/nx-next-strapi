import { AppProps } from 'next/app';
import './styles.css';
import 'tailwindcss/tailwind.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { AuthProvider } from '../context/AuthContext';


function CustomApp({ Component, pageProps }: AppProps) {
    return (
        <AuthProvider>
            <div className="container mx-auto my-16">
                <Header />
                <Component {...pageProps} />
                <Footer />
            </div>
        </AuthProvider>
    );
}

export default CustomApp;
