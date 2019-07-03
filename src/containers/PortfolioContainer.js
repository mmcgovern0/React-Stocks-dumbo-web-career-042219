import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {

    const stocks = this.props.myPortfolio.map(stock => {
      return <Stock stock={stock} clickStocks={this.props.sellStocks}/>
    })

    return (
      <div>
        <h2>My Portfolio</h2>
          {stocks}
      </div>
    );
  }

}

export default PortfolioContainer;
