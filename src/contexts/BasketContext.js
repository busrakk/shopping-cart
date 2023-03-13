import { useState, useContext, createContext, useEffect } from "react";

const BasketContext = createContext(); // context oluşturma

const defaultBasket = JSON.parse(localStorage.getItem('basket')) || []

const BasketProvider = ({ children }) => {
    const [items, setItems] = useState(defaultBasket) // sepete eklenecek eleman

    useEffect(() => {
        localStorage.setItem("basket", JSON.stringify(items))
    }, [items])

    const addToBasket = (data, findBasketItem) => {
        if(!findBasketItem){
            return setItems((items) => [data, ...items])
        } // sepete ilk defa ekleme

        // eklendikten sonra sepetten kaldırma
        const filtered = items.filter((item) => item.id !== findBasketItem.id)

        //setItems((prev) => [...prev, data])
        setItems(filtered)
    } // sepete ekleme işlemleri için

    const removeFromBasket = (item_id) => {
        const filtered = items.filter((item) => item.id !== item_id)
        setItems(filtered)
    }

    const values = {
        items,
        setItems,
        addToBasket,
        removeFromBasket,
    };

    return(
        <BasketContext.Provider value={values}>
            {children}
        </BasketContext.Provider>
    )
}

const useBasket = () => useContext(BasketContext)

export { BasketProvider, useBasket }