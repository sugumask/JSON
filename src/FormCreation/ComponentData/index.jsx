import React, { Component } from 'react';

class ComponentData extends Component {

    render() {
        const { item: { Firstname, Lastname, Age, College } } = this.props;
        
        return (
            <div>
                <div onClick={() => this.props.click(this.props.item)}>{Firstname}</div>
                {Lastname}
                {Age}
                {College}
            </div>
        )
    }
}
export default ComponentData;