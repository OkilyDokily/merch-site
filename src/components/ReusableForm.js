import React from 'react'

function ReusableForm(props){
  function Submit(e)
  {
    e.preventDefault();
    const submit = document.getElementById("submit").value;
    props.reusableFormFunction(submit);
  }
  return(
    <div>
        <input id="submit" type="text" />
        <input type="submit" onClick={Submit} value="submit"/>
    </div>
  )
}

export default ReusableForm;