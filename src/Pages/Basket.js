import React from "react"

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
                <h3>Products added to basket</h3>

                {this.state.products.map((product) => (
                    <div key={product.id}>
                        Id {product.id} Name: {product.name} Price: {product.price}
                    </div>
                ))}
            </div>
        )
    }
}

export default Basket;