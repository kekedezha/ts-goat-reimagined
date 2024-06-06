import Nav from "./Nav";
import useCart from "../hooks/useCart";

type PropsType = {
    viewCart: boolean,
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>,
};

const Header = ({viewCart, setViewCart}: PropsType) => {
    const { totalItems, totalPrice } = useCart();

    const content = (
        <header className="header">
            <div className="header__title-bar">
                <h1 className="header__title-name">GOAT 'REIMAGINED'</h1>
                <div className="header__price-box">
                    <div className="price-box">
                        <p>Total Items: {totalItems}</p>
                        <p>Total Price: {totalPrice}</p>
                    </div>
                    {viewCart ? 
                        <button className="btn btn-neutral" title="View Products" onClick={() => setViewCart(false)}>View Products</button>
                    :
                        <button className="btn btn-ghost" title="View Cart" onClick={() => setViewCart(true)}>🛒</button>
                    }
                </div>
            </div>
            <Nav />
        </header>
    )

    return content;
}
export default Header;