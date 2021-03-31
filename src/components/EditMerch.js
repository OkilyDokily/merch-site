import React from 'react';
import ReusableForm from './ReusableForm';

function EditMerch(props)
{
  return (
    <div>
      <ReusableForm details={props.details} edit={true} reusableFormFunction={props.onEditMerch}/>
    </div>
  )
}

export default EditMerch;

