import Head from 'next/head';
import Link from 'next/link';
import { fromImageToUrl, API_URL } from '../utils/url';

export function Home({products}) {
    return (
        <div>
            <Head>
                <title>Strapi-Shop!</title>
            </Head>
            <div className="w-1/2 flex flex-col my-10 mx-auto space-y-10">
                {products.map(prod => (
                    <div key={prod.name} className="flex justify-between">
                        <Link href={`/products/${prod.slug}`}>
                            <a>
                            <div className="rounded-lg object-cover w-1/3"><img src={fromImageToUrl(prod.image)} /> </div>
                            <div className="font-bold">{prod.name} - {prod.price}</div>
                            </a>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;

export async function getStaticProps(){
    //fetch all products
    const product_rest = await fetch(`${API_URL}/products`);
    const products = await product_rest.json();
    return{
        props:{products}
    }
}