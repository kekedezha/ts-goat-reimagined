import { ProductType } from "../context/ProductsProvider";
import { ReducerAction, ReducerActionType } from "../context/CartProvider";
import { ReactElement, memo } from "react";

type PropsType = {
    product: ProductType,
    dispatch: React.Dispatch<ReducerAction>,
    REDUCER_ACTIONS: ReducerActionType,
    inCart: boolean,
}

const Product = ({ product, dispatch, REDUCER_ACTIONS, inCart }: PropsType): ReactElement => {
    const img: string = new URL(`../images/${product.sku}.png`, import.meta.url).href

    const onAddToCart = () => dispatch({ type: REDUCER_ACTIONS.ADD, payload: {...product, qty: 1 }})

    const itemInCart = inCart ? 
        '→ Item in Cart: ✔' 
        :
        null;
    const content = (
        <article className="product">
            <h3>{product.name}</h3>
            <img src={img} alt={product.name} className="product__img" />
            <p>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(product.price)}{itemInCart}</p>
            <button className="btn btn-primary w-1/4 mx-auto" onClick={onAddToCart}>Add To Cart</button>
        </article>
    )
    
    return content;
}

    function areProductsEqual({ product: prevProduct, inCart: prevCart }: PropsType, { product: nextProduct, inCart: nextCart }: PropsType) {
        return Object.keys(prevProduct).every(key => {
            return prevProduct[key as keyof ProductType] === nextProduct[key as keyof ProductType]
        }) && prevCart === nextCart;
    }

    const MemoizedProduct = memo<typeof Product>(Product, areProductsEqual);

export default MemoizedProduct;