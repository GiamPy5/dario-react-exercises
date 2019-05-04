import React from "react"

class Product extends React.Component
{
    state = {
        checked: false
    }

    constructor(props) {
        super(props)
        
        this.onSelect = this.onSelect.bind(this)
    }

    onSelect(e) {
        const that = this;

        if (! this.state.checked) {
            this.setState({ checked: true }, function () {
                that.props.onCheckboxClick(that.props.id, this.state.checked)
            })
        } else {
            this.setState({ checked: false }, function () {
                that.props.onCheckboxClick(that.props.id, this.state.checked)
            })
        }
    }

    render () {
        return (
            <>
                <input type="checkbox" onChange={this.onSelect} checked={this.state.checked} /> 
                (ID: {this.props.id}) 
                {this.props.name}
            </>
        )
    }
}

export default Product;