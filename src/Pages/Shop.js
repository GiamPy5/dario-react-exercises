import React from 'react'
import ProductsList from '../Components/ProductsList.js'

class Shop extends React.Component
{
    state = {
        products: [
            { id: 1, name: "Mela", price: "1.00 €" },
            { id: 2, name: "Pomodoro", price: "0.60 €" },
            { id: 3, name: "Patata", price: "0.30 €" },
        ]
    }

    constructor (props) {
        super(props)

        console.log(this.state);
    }
    
    render () {
        return (
            <div>
                <h1>Prodotti</h1>

                <ProductsList products={this.state.products} />
            </div>
        )
    }
}

export default Shop;