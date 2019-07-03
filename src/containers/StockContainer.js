import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    const stocks = this.props.allStocks.map(stock => {
      return <Stock stock={stock} clickStocks={this.props.buyStocks}/>
    })

    return (
      <div>
        <h2>Stocks</h2>
        {stocks}
      </div>
    );
  }

}

export default StockContainer;
