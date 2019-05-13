import React from "react"
import { PRODUCT_TYPES } from '../Pages/Shop.js'

class ProductFilters extends React.Component
{
    state = {
        filters: {
            type: []
        }
    }

    filter (filterType, filterValue) {
        let tmp = this.state.filters; // { type: [] }

        if (tmp[filterType].includes(filterValue)) {
            tmp[filterType] = tmp[filterType].filter((filter) => filter !== filterValue)
        } else {
            tmp[filterType].push(filterValue)
        }

        this.setState({ filters: tmp })
    }

    isFilteredBy(filterType, filterValue) {
        return this.state.filters[filterType].includes(filterValue);
    }

    render () {
        return (
            <div>
                <h4>Product Filters</h4>

                <input 
                    type="checkbox" 
                    value={PRODUCT_TYPES.PRODUCT_TYPE_FRUIT} 
                    onChange={(e) => this.filter('type', PRODUCT_TYPES.PRODUCT_TYPE_FRUIT)}
                    checked={this.isFilteredBy('type', PRODUCT_TYPES.PRODUCT_TYPE_FRUIT)}
                /> {PRODUCT_TYPES.PRODUCT_TYPE_FRUIT} <br />
                <input 
                    type="checkbox" 
                    value={PRODUCT_TYPES.PRODUCT_TYPE_VEGETABLE}
                    onChange={(e) => this.filter('type', PRODUCT_TYPES.PRODUCT_TYPE_VEGETABLE)}
                    checked={this.isFilteredBy('type', PRODUCT_TYPES.PRODUCT_TYPE_VEGETABLE)}
                /> {PRODUCT_TYPES.PRODUCT_TYPE_VEGETABLE}
            </div>
        )
    }
}

export default ProductFilters;