import React from 'react'

export default function Alert(props) {
    const capitalize=(word)=>{
        let result=word.toLowerCase();
        return result.charAt(0).toUpperCase()+result.slice(1);
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong> {props.alert.msg}
    </div>
  )
}
