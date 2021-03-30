import React from 'react';
import MerchList from './MerchList';
import AddMerchForm from './AddMerchForm'
import MerchDetails from './MerchDetails';
import EditMerch from './EditMarch';

class MerchController extends React.Component {
  constructor() {
    super();
    this.state = {
      currentComponent: "MerchList",
      merchList: ["derp", "chirp","burp","glurp"]
    }
  }

  handleChangeComponent = (component) => { 
    this.setState({currentComponent:component});
  };

  handleAddMerch = (item) => {
    const arr = this.state.merchList;
    arr.push(item);
    this.setState({ merchList: arr ,currentComponent:"MerchList"});
  }

  render() {
    const components = {
      MerchList: <MerchList merchList={this.state.merchList} onShowDetails={this.handleShowDetails} />,
      AddMerchForm: <AddMerchForm onAddMerch={this.handleAddMerch}/>,
      MerchDetail: <MerchDetails  />,
      EditMerch: <EditMerch />
    }
    let currentComponent = components[this.state.currentComponent];
    
    switch (this.state.currentComponent) {
      case "MerchList":
        return (
          <div>
            {currentComponent}
            <button onClick={this.handleChangeComponent.bind(null,"AddMerchForm")}>Add a new item</button>
          </div>
        );
      case "AddMerchForm":
        return (
          <div>
            {currentComponent}
            <button onClick={this.handleChangeComponent.bind(null, "MerchList")}>Return to List</button>
          </div>
        );
      case "MerchDetail":
        return (
          <div>
            {currentComponent}
          </div>
        );
      case "EditMerch":
        return (
          <div>
            {currentComponent}
          </div>
        );
      default:
      // code block
    }
    
   

   
  };
}

export default MerchController;
