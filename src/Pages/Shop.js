import React from 'react'
import ProductsList from '../Components/ProductsList.js'
import { Link } from "react-router-dom";

class Shop extends React.Component
{
    state = {
        products: [
            { id: 1, name: "Mela", price: "1.00 €" },
            { id: 2, name: "Pomodoro", price: "0.60 €" },
            { id: 3, name: "Patata", price: "0.30 €" },
        ],
    
        basket: []
    }

    constructor (props) {
        super(props)
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

                <ProductsList basketAdder={(ids) => this.addToBasket(ids)} products={this.state.products} />
            
                <h5><Link to="/basket">Vai al carrello</Link></h5>
            </div>
        )
    }
}

export default Shop;