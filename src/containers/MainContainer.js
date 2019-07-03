import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {



  render() {
    return (
      <div>
        <SearchBar sortStocks={this.props.sortStocks} filter={this.props.filter}/>

          <div className="row">
            <div className="col-8">

              <StockContainer allStocks={this.props.allStocks} buyStocks={this.props.buyStocks}/>

            </div>
            <div className="col-4">

              <PortfolioContainer myPortfolio={this.props.myPortfolio} sellStocks={this.props.sellStocks}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;

