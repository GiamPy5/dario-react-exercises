import React from "react"
import { Link } from "react-router-dom";

class Basket extends React.Component
{
    state = {
        products: []
    }

    componentDidMount() {
        let products = []

        products = JSON.parse(localStorage.getItem("ShopBasket"))

        this.setState({ products: products })
    }
    
    render () {
        return (
            <div>
                <h5><Link to="/">Vai al negozio</Link></h5>                

                <h3>Products added to basket</h3>

                {(this.state.products && this.state.products.map((product) => (
                    <div key={product.id}>
                        Id {product.id} Name: {product.name} Price: {product.price}
                    </div>
                ))) || "No products selected" }
            </div>
        )
    }
}

export default Basket;