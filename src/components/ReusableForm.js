import React from 'react'
import {v4} from 'uuid'

function ReusableForm(props){
  function Submit(e)
  {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const quantity = parseInt(document.getElementById("quantity").value);
    const obj = {name, description, quantity}
    const obj2 = props.edit ? {id:props.details.id, ...obj } : {id:v4(), ...obj};
    props.reusableFormFunction(obj2);
  }
  return(
    <div>
        <label>Name:</label>
        <input id="name" type="text" defaultValue={props.edit ? props.details.name : ""} />
        <br/>
        <label>Description:</label>
        <input id="description" type="text" defaultValue={props.edit ? props.details.description : ""} />
        <br />
        <label>Quantity:</label>
        <input id="quantity" type="number" defaultValue={props.edit ? props.details.quantity : ""} />
        <br />
        <input type="submit" onClick={Submit} value={props.edit ? "edit" : "submit"}/>
    </div>
  )
}

export default ReusableForm;