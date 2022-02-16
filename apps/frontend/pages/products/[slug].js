import { fromImageToUrl, API_URL } from "apps/frontend/utils/url"

const Product = ({product}) => {
    return (
        <div className="flex flex-col pt-5xl my-5 space-y-5">
            <h3 className="prose prose-xl font-bold">{product.name}</h3>
            <img className="rounded-lg object-cover w-1/3 self-center" alt={prod.name} src={fromImageToUrl(product.image)} />
            <h4 className="prose prose-xl font-bold">{product.name}</h4>
            <p>$ {product.price}</p>
            <p>{product.content}</p>
        </div>
    )
}

export default Product;

export async function getStaticProps({ params: { slug } }) {
    const product_res = await fetch(`${API_URL}/products/?slug=${slug}`);
    const found = await product_res.json();

    //the API response for filters is an array => so find found[0]
    return {
        props: { product: found[0] }
    }
}

export async function getStaticPaths() {
    //Retrieve all the possible paths
    const products_res = await fetch(`${API_URL}/products/`);
    const products = await products_res.json();

    // Return them to NextJs context
    return {
        paths: products.map(prod => ({
            params: { slug: String(prod.slug) }
        })),
        fallback: false
    }
}