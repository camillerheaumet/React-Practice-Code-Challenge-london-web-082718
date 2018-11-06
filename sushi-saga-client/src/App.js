import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    eatenSushis: [],
    currentFour: 0,
    budget: 100
  }

  fetchSushis = () => {
    fetch(API)
      .then(resp => resp.json())
      .then(resp => this.setState({sushis: resp}))
  }

  componentDidMount(){
    this.fetchSushis()
  }

  eatSushi = (sushi) => {
    if(this.state.budget >= sushi.price && !this.state.eatenSushis.includes(sushi)){
      this.setState({
        eatenSushis: [...this.state.eatenSushis, sushi],
        budget: this.state.budget - sushi.price
      })
    }
  }
  
  filterSushis = () =>{
    let susu = this.state.sushis.filter(sushi => !this.state.eatenSushis.includes(sushi))
    return susu
  }

  showMoreSushi = () => {
    if(this.state.currentFour > this.state.sushis.length-5){
      this.setState({
        currentFour : 0
      })
    } else {
    this.setState({
      currentFour : this.state.currentFour + 4
    })}
  }

  render() {
    const { sushis, eatenSushis, currentFour, budget} = this.state
    return (
      <div className="app">
      
        <SushiContainer showMoreSushi={this.showMoreSushi} currentFour={currentFour} eatenSushis={eatenSushis} filterSushis={this.filterSushis} eatSushi={this.eatSushi} sushis={sushis}/>
        <Table eatenSushis={eatenSushis} budget={budget} key={"tableKey"}/>
      </div>
    );
  }
}

export default App;