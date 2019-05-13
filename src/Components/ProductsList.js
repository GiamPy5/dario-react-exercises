import React from 'react'
import Product from "./Product"

class ProductsList extends React.Component
{
    state = {
        selectedProducts: []
    }

    updateSelectedProduct(id, selected) {
        let selectedProducts = this.state.selectedProducts;

        if (selected) {
            selectedProducts.push(id);
            selectedProducts = Array.from(new Set(selectedProducts))
        } else {
            selectedProducts = selectedProducts.filter((productId) => productId !== id);
        }

        this.setState({ selectedProducts: selectedProducts })
    }

    render () {
        const products = this.props.products;

        return (
            <div>
                {products.map((product) => (
                    <div key={product.id}>
                        <Product 
                            onCheckboxClick={(id, selected) => this.updateSelectedProduct(id, selected)} 
                            id={product.id} 
                            name={product.name}  
                        /> 
                    </div>
                ))}

                <button 
                    type="button" 
                    onClick={() => this.props.basketAdder(this.state.selectedProducts)}
                >Add To Basket</button>
            </div>
        )
    }
}

export default ProductsList;