import { ReactElement, createContext, useState, useEffect } from "react"

//Product type
export type ProductType = {
    sku: string,
    name: string,
    price: number,
}

//Initial State with data fetching (small project)
const initState: ProductType[] = []

//Initial State w/o data fetching
// const initState: ProductType[] = [
//     {
//         "sku": "item0001",
//         "name": "Air Jordan 4 Retro: Military Blue",
//         "price": 208.00
//     },
//     {
//         "sku": "item0002",
//         "name": "Air Jordan 4 Retro: Red Thunder",
//         "price": 417.00
//     },
//     {
//         "sku": "item0003",
//         "name": "Air Jordan 4 Retro: Bred Reimagined",
//         "price": 219.00
//     },
//     {
//         "sku": "item0004",
//         "name": "Air Jordan 4 Retro x Nike SB: Pine Green",
//         "price": 361
//     }
// ]

//Products Context type
export type UseProductContextType = {
    products: ProductType[],
}

//Initialize Products Context State 
const initContextState: UseProductContextType = {
    products: []
}

//Products Context
const ProductsContext = createContext<UseProductContextType>(initContextState);

type ChildrenType = {
    children?: ReactElement | ReactElement[]
}

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
    const [products, setProducts] = useState<ProductType[]>(initState);

    useEffect(() => {
        
    }, [])

    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsContext;