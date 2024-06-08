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
            <p className="mb-4">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(product.price)}{itemInCart}</p>
            <div className="flex justify-evenly">
                <button className="btn btn-primary w-1/4" onClick={onAddToCart}>Add To Cart</button>
                <div className="dropdown dropdown-top">
                    <div tabIndex={0} role="button" className="btn btn-primary mx-1">Sizes</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li className="disabled"><a>7</a></li>
                        <li className="disabled"><a>7.5</a></li>
                        <li className="disabled"><a>8</a></li>
                        <li className="disabled"><a>8.5</a></li>
                        <li><a>9</a></li>
                        <li className="disabled"><a>9.5</a></li>
                        <li className="disabled"><a>10</a></li>
                        <li className="disabled"><a>10.5</a></li>
                        <li className="disabled"><a>11</a></li>
                        <li className="disabled"><a>11.5</a></li>
                        <li className="disabled"><a>12</a></li>
                        <li className="disabled"><a>13</a></li>
                        <li className="disabled"><a>14</a></li>
                    </ul>
                </div>
            </div>
        
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