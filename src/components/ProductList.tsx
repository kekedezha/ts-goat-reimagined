import useCart from "../hooks/useCart";
import useProducts from "../hooks/useProducts";
import Product from "./Product";
import { ReactElement } from "react";
import SideBar from "./SideBar";

const ProductList = () => {
    const { dispatch, REDUCER_ACTIONS, cart } = useCart();
    const { products } = useProducts();

    let pageContent: ReactElement | ReactElement[] = <p>Loading...</p>;
    
    if (products?.length) {
        pageContent = products.map(product => {
            const inCart: boolean = cart.some(item => item.sku === product.sku)

            return (
                <Product 
                    key={product.sku}
                    product={product}
                    dispatch={dispatch}
                    REDUCER_ACTIONS={REDUCER_ACTIONS}
                    inCart={inCart}
                />
            )
        })
    }

    const content = (
        <main className="main">
            <div className="side--bar">
                <SideBar/>
            </div>
            <div className="products">
                {pageContent}
            </div>
        </main>
    )
    return content;
}
export default ProductList;