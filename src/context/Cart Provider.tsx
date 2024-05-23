import { ReactElement, createContext, useMemo, useReducer } from "react"

//Cart type
export type CartType = {
    sku: string,
    name: string,
    price: number,
    qty: number,
}

//Cart State Type
type CartStateType = {
    cart: CartType[]
}

//Init state for Cart Context State
const initCartState: CartStateType = {
    cart: []
}

//Reducer Actions Object
const REDUCER_ACTION_TYPE = {
    ADD: "ADD",
    REMOVE: "REMOVE",
    QUANTITY: "QUANTITY",
    SUBMIT: "SUBMIT",
}

//Reducer Action type
export type ReducerActionType = typeof REDUCER_ACTION_TYPE;

//Reducer Action types
export type ReducerAction = {
    type: string,
    payload?: CartType,
}

//Reducer function for the cart state
const reducer = (state: CartStateType, action: ReducerAction): CartStateType => {
    switch(action.type){
        //ADD action type 
        case REDUCER_ACTION_TYPE.ADD: {
            //Safe guard incase we forget to add an action payload for ADD
            if(!action.payload) {
                throw new Error('action.payload is missing in ADD action');
            }
            //Destructure sku, name and price from payload. 
            const { sku, name, price } = action.payload;

            //filter out cart with items that are not the same as the item we are adding to the cart
            const filteredCart: CartType[] = state.cart.filter(item => item.sku !== sku);

            //check to see if item we are adding already exists in the cart
            const itemExists: CartType | undefined  = state.cart.find(item => item.sku === sku);

            //if item exists in the cart, add 1 to the total quantity, else first item of that sku so quantity is 1
            const qty: number = itemExists ? itemExists.qty + 1 : 1;

            //return cart state with added item
            return {...state, cart: [...filteredCart, {sku, name, price, qty}]}
        } 
        //REMOVE action type
        case REDUCER_ACTION_TYPE.REMOVE: {
            //Safe guard incase we forget to add an action payload for ADD
            if(!action.payload) {
                throw new Error('action.payload is missing in REMOVE action');
            }
            //Destructure sku from payload, as it is what we will be using to find the item that we want to remove from the cart 
            const { sku } = action.payload;

            //filter out cart with items that are not the same as the item we are removing from the cart
            const filteredCart: CartType[] = state.cart.filter(item => item.sku !== sku);

            //return cart with item removed
            return {...state, cart: [...filteredCart]}
        }
        //QUANTITY action type
        case REDUCER_ACTION_TYPE.QUANTITY: {
            //Safe guard incase we forget to add an action payload for ADD
            if(!action.payload) {
                throw new Error('action.payload is missing in QUANTITY action');
            }
            //Destructure sku, name and price from payload.
            const { sku, qty } = action.payload;

            //check to see if item we are adding already exists in the cart
            const itemExists: CartType | undefined  = state.cart.find(item => item.sku === sku);

            //if item does not exist throw an error because we can't update an item's quantity that is not in the cart
            if (!itemExists) {
                throw new Error('Item must exist in order to update quantity');
            }

            //updated item that we will return with updated quantity
            const updatedItem: CartType = {...itemExists, qty}

            //filter out cart with items that are not the same as the item we are adding to the cart
            const filteredCart: CartType[] = state.cart.filter(item => item.sku !== sku);

            //filter out cart with 
            return {...state, cart: [...filteredCart, updatedItem]}
        }
        //SUBMIT action type
        case REDUCER_ACTION_TYPE.SUBMIT: {
            return { ...state, cart: [] }
        }
        default:
            throw new Error('Unidentified reducer action type.');
    }
}

//UseCartContext Hook
const useCartContext = (initCartState: CartStateType) => {
    const [state, dispatch] = useReducer(reducer, initCartState);

    //Memoize REDUCER_ACTION_TYPE so that REDUCER_ACTION always has the same equality as the type when passing to other components
    const REDUCER_ACTIONS = useMemo(() => {
        return REDUCER_ACTION_TYPE;
    }, [])

    const totalItems = state.cart.reduce((previous, cartItem) => previous + cartItem.qty, 0);

    const totalPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
        .format(state.cart.reduce((previousValue, cartItem) => {
            return previousValue + (cartItem.qty * cartItem.price)
        }, 0))

    const cart = state.cart.sort((a,b) => {
        const itemA = Number(a.sku.slice(-4));
        const itemB = Number(b.sku.slice(-4));
        return itemA - itemB;
    })

    return { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart }
}

//Cart Context Type
export type UseCartContextType = ReturnType<typeof useCartContext>

//Initialize Cart Context State
const initCartContextState: UseCartContextType = {
    dispatch: () => {},
    REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
    totalItems: 0,
    totalPrice: '',
    cart: []  

}

//Cart Context 
export const CartContext = createContext<UseCartContextType>(initCartContextState);

//Children type
type ChildrenType = {
    children?: ReactElement | ReactElement[]
}

export const CartProvider = ({ children }: ChildrenType): ReactElement => {


    return(
        <CartContext.Provider value={useCartContext(initCartState)}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;