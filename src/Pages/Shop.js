import React from 'react'
import ProductsTable from '../Components/ProductsTable.js'
import { Link } from "react-router-dom";

const PRODUCT_TYPE_FRUIT = "fruit"
const PRODUCT_TYPE_VEGETABLE = "vegetable"

class Shop extends React.Component
{
    state = {
        products: [
            { id: 1, name: "Mela", price: "1.00 €", type: PRODUCT_TYPE_FRUIT },
            { id: 2, name: "Pomodoro", price: "0.60 €", type: PRODUCT_TYPE_VEGETABLE },
            { id: 3, name: "Patata", price: "0.30 €", type: PRODUCT_TYPE_VEGETABLE },
            { id: 4, name: "Pesca", price: "0.60 €", type: PRODUCT_TYPE_FRUIT },
        ],
    
        basket: []
    }

    addToBasket(ids) {
        let basketItems = []

        this.state.products.forEach((product) => {
            ids.forEach((basketProductId) => {
                if (product.id === basketProductId) {
                    basketItems.push(product);
                }
            })
        })

        localStorage.setItem("ShopBasket", JSON.stringify(basketItems));

        this.setState({ basket: basketItems })
    }

    render () {
        return (
            <div>
                <h1>Prodotti</h1>

                <ProductsTable products={this.state.products} basketAdder={(ids) => this.addToBasket(ids)} />
            
                <h5><Link to="/basket">Vai al carrello</Link></h5>
            </div>
        )
    }
}

export const PRODUCT_TYPES = {
    PRODUCT_TYPE_FRUIT,
    PRODUCT_TYPE_VEGETABLE
}

export default Shop;