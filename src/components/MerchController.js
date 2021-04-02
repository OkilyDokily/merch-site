import React from 'react';
import MerchList from './MerchList';
import AddMerchForm from './AddMerchForm'
import MerchDetails from './MerchDetails';
import EditMerch from './EditMerch';
import Cart from './Cart';

class MerchController extends React.Component {
  constructor() {
    super();
    this.state = {
      currentComponent: "MerchList",
      merchList: [],
      details: null,
      cartList: []
    }
  }

  handleChangeComponent = (component) => {
    this.setState({ currentComponent: component });
  };

  handleMerchAddToCart = (item) => {

        const cartArr = this.state.cartList;
        console.log('CartArr', cartArr);
        let cartItem = cartArr.find(x => x.id === item.id);

        if (cartItem && (cartItem.quantity <= item.quantity)) {
          cartItem.quantity = cartItem.quantity + 1;
          //props.onIncreaseItemsInCart();
          // console.log('Item quantity: ', item.quantity, 'Cart Item: ', cartItem);
          console.log('Cartlist: ', cartArr)
          console.log('State', this.state.cartList);
          this.setState({ cartList: cartArr });
        }
        else if (item.quantity !== 0) {
          //props.onIncreaseItemsInCart();
          cartArr.push({ id: item.id, quantity: 1 })
          this.setState({ cartList: cartArr });
        }
  }

  handleMerchRestock = (item) => {

  }

  handleAddMerch = (item) => {
    const arr = this.state.merchList;
    arr.push(item);
    this.setState({ merchList: arr, currentComponent: "MerchList" });
  }

  handleEditMerch = (item) => {
    const arr = this.state.merchList;
    const index = this.state.merchList.findIndex(x => x.id === item.id);
    arr[index] = item;
    this.setState({ merchList: arr, currentComponent: "MerchList" });
  }

  handleDeleteMerch = (item) => {
    const arr = this.state.merchList;
    const index = this.state.merchList.findIndex(x => x.id === item.id);
    const newArr = arr.splice(index, arr)
    this.setState({ merchList: newArr, currentComponent: "MerchList" });
  }

  handleShowDetails = (item) => {
    this.setState({ currentComponent: "MerchDetails", details: item });
  }


  componentDidMount(){
    console.log("merchController","this.state",this.state);
  }

  render() {
    switch (this.state.currentComponent) {
      case "MerchList":
        return (
          <div>
            <MerchList merchList={this.state.merchList} onMerchBuy={this.handleMerchBuy} onShowDetails={this.handleShowDetails} />
            <button onClick={this.handleChangeComponent.bind(null, "AddMerchForm")}>Add a new item</button>
          </div>
        );
      case "AddMerchForm":
        return (
          <div>
            <AddMerchForm onAddMerch={this.handleAddMerch} />
            <hr />
            <button onClick={this.handleChangeComponent.bind(null, "MerchList")}>Return to List</button>
          </div>
        );
      case "MerchDetails":
        return (
          <div>
            <MerchDetails details={this.state.details} cartList={this.state.cartList} onMerchAddToCart={this.handleMerchAddToCart} />
            <button onClick={this.handleChangeComponent.bind(null, "EditMerch")}>Edit this item</button>
            <button onClick={this.handleDeleteMerch.bind(this.state.details)}>Delete this item</button>
            <hr />
            <button onClick={this.handleChangeComponent.bind(null, "MerchList")}>Return to List</button>

          </div>
        );
      case "EditMerch":
        return (
          <div>
            <EditMerch details={this.state.details} onEditMerch={this.handleEditMerch} />
            <hr />
            <button onClick={this.handleChangeComponent.bind(null, "MerchList")}>Return to List</button>
          </div>
        );
      case "Cart":
        return (
          <div>
            <Cart />
          </div>
        )
      default:
      // code block
    }
  };
}

export default MerchController;
