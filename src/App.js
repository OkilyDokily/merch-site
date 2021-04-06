import React from "react";
import MerchController from "./components/MerchController";
import Header from "./components/Header"

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      items: 0
    }
  }

  handleIncreaseItemsInCart = () => {
    let num = this.state.items;
    num++;
    this.setState({items:num})
  }

  handleDecreaseItemsInCart = (num) => {
    let amount = this.state.items;
    amount = amount - num;
    if (!(amount < 0))
    {
      this.setState({ items: amount })
    } 
  }
  
  render()
  {
    return (
      <div id="App" >
        <Header count={this.state.items}/>
        <MerchController onIncreaseItemsInCart={this.handleIncreaseItemsInCart} onDecreaseItemsInCart={this.handleDecreaseItemsInCart} />
      </div>
    );
  }
 
}

export default App;
