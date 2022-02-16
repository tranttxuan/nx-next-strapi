import Head from 'next/head';
import Link from 'next/link';
import { fromImageToUrl, API_URL } from '../utils/url';

export function Home({ products }) {
    return (
        <div>
            <Head>
                <title>Strapi-Shop!</title>
            </Head>
            <div className="w-1/2 flex flex-col my-10 mx-auto space-y-10">
                {products.map(prod => (
                    <div key={prod.name} className="flex justify-start items-center">
                        <Link href={`/products/${prod.slug}`}>
                            <a className="rounded-lg object-cover w-1/5">
                                <img alt={prod.name} src={fromImageToUrl(prod.image)} />
                            </a>
                        </Link>
                        <Link href={`/products/${prod.slug}`}>
                            <a className="font-bold ml-5">
                                {prod.name} - {prod.price}
                            </a>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;

export async function getStaticProps() {
    //fetch all products
    const product_rest = await fetch(`${API_URL}/products`);
    const products = await product_rest.json();
    return {
        props: { products }
    }
}