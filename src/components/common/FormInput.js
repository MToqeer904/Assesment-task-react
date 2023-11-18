import React from 'react'

const FormInput = (props) => {
  return (
    <section className='inputDiv'>
      <content className='labelDiv'>
        <label className='label' for={props.item.for} >{props.item.name}</label><span className='requireSpan'> {props.item.require ? "*" : ""}</span>
        </content>
        <input className='input' type={props.item.type} id={props.item.id} name={props.item.name} placeholder={props.item.placeholder}/>
    </section>
  )
}

export default FormInput