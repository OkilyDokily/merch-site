import ReusableForm from './ReusableForm';





function AddMerchForm(props){
  return(
    <div>
      <ReusableForm reusableFormFunction={props.onAddMerch}/>
    </div>
  )
}

export default AddMerchForm;