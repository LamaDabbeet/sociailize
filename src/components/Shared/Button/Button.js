import React from 'react';
import './Button.scss';

export const Button=(props)=> {
  const{buttonText,onClick}=props;
  
    return (
       <button type="button" onClick={onClick} >{buttonText}</button>
    )
 };