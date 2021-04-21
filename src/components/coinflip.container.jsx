import React, { Component } from 'react';
import { choice } from './helpers.file.js';
import Coin from './coin.component';


class CoinFlip extends Component {

    static defaultProps = {
        coins: [
            {side: 'heads', imgsrc: "https://www.ssaurel.com/blog/wp-content/uploads/2017/01/heads.png"},
            {side: 'tails' ,imgsrc: "https://upload.wikimedia.org/wikipedia/commons/9/92/2001_NY_Proof.png"}  
        ]
       
    }
    constructor(props) {
        super(props)
        
        this.state = {
            currentCoin: null,
            nFlips: 0,
            nHead: 0,
            nTails: 0
        }

        this.handleClick = this.handleClick.bind(this);
      
    }
    flipCoin(){
        const newCoin = choice(this.props.coins);
        this.setState(st => {
            let newState = {
                ...st,
                currentCoin: newCoin,
                nFlips: st.nFlips + 1
            }
            if (newCoin.side === "heads") {
                newState.nHead += 1;
            } else {
                newState.nTails += 1;
            }
            return newState;
            
        } )
    }
     handleClick(e){
         this.flipCoin();
     }
    render() {
        return (
           <div className="coin-container">
                <h2>Lets flip a coin!</h2>
                { this.state.currentCoin  &&  <Coin data={this.state.currentCoin} /> }
                <button onClick={this.handleClick}>Flip Coin</button>
                <p>out of {this.state.nFlips} flips, there have been {this.state.nHead} heads and { this.state.nTails} tails.</p>
           </div>
        )
    }
}

export default CoinFlip;