import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {

  state = {
    allStocks: [],
    myPortfolio: [],
    sortType: "",
    filterType: ""
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
      .then(resp => resp.json())
      .then(stockData => {
        this.setState({allStocks: stockData})
      })
  }

  buyStocks = (stock) => {
    if(this.state.myPortfolio.includes(stock)){
      alert("BEEN COPPED")
      return;
    }
    this.setState({myPortfolio: [...this.state.myPortfolio, stock]})
  }

  sellStocks = (selectedStock) => {
    console.log(selectedStock)
    let updatedPortfolio = this.state.myPortfolio.filter(stock => {
      return selectedStock !== stock
    }) 
    this.setState({myPortfolio: updatedPortfolio})
  }

  sortStocks = (type) => {
    console.log(type)
    this.setState({
      sortType: type 
    })
  }

  filter = (filtered) => {
    console.log(filtered)
    this.setState({filterType: filtered})
  }

  render() {

    let stocks = [...this.state.allStocks]

    if(this.state.sortType === "alpha"){
      stocks.sort(function(a,b){
        return a.name.localeCompare(b.name)
      })
    }

    if(this.state.sortType === "num"){
      stocks.sort((a,b)=> b.price - a.price)
    }

    if(this.state.filterType){
      stocks = stocks.filter(stock => {
        return stock.type === this.state.filterType
      })
    }



    return (
      <div>
        <Header/>
        <MainContainer allStocks={stocks} buyStocks={this.buyStocks} sellStocks={this.sellStocks} myPortfolio={this.state.myPortfolio} sortStocks={this.sortStocks} filter={this.filter}/>
      </div>
    );
  }
}

export default App;
