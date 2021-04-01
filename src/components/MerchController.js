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
      cartList:[]
    }
  }

  handleChangeComponent = (component) => {
    this.setState({ currentComponent: component });
  };

  handleMerchBuy = (item) => {
    const arr = this.state.merchList;
    const index = arr.findIndex(x => x.id === item.id);
    console.log(index)
    const quantity = arr[index].quantity;
    
    const cartItem = this.getCartDetails(item);
    const cartIndex = this.state.cartList.findIndex(x => cartItem.id === x.id)
    const cartArray = this.state.cartList;
    
    
    if (cartItem.quantity <= quantity) {
      ++cartItem.quantity;
      cartArray[cartIndex] = cartItem;
      this.setState({ merchList: cartArray });
      this.props.onIncreaseItemsInCart();
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

  getCartDetails = (item) => {
    const cartArr = this.state.cartList;
    const indexOfCart = cartArr.findIndex(x => x.id === item.id);
    return (indexOfCart === -1) ? { id: item.id, quantity: 0 } : cartArr[indexOfCart];
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
        let cartDetail = this.getCartDetails(this.state.details);
        console.log(cartDetail.id)
        return (
          <div>
            <MerchDetails details={this.state.details} cartDetails={cartDetail}  onMerchBuy={this.handleMerchBuy.bind(null, this.state.details)} />
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
