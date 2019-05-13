import React from "react"
import ProductFilters from './ProductFilters.js'
import ProductsList from './ProductsList.js'

class ProductsTable extends React.Component 
{
    render () {
        return (
            <>
                <ProductFilters />
                <hr/>
                <ProductsList products={this.props.products} basketAdder={this.props.basketAdder} />
            </>
        )
    }
}

export default ProductsTable;