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

  handleDecreaseItemsInCart = () => {
    let num = this.state.items;
    if (num !== 0)
    {
      num--;
      this.setState({ items: num })
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
