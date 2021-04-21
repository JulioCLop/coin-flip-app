
import React, { Component } from 'react';
import './coin.css';


class Coin extends Component{

    render(){
        return (
            <div className="coin">
            <img src={this.props.data.imgsrc} alt={this.props.data.side} />
            </div>
           
        )
    }
}


export default Coin;