import React from 'react';
import './Button.scss';

export const Button=(props)=> {
  const{buttonText}=props;

  const handleCallback = (childData) =>{
        this.setState({name: childData})
    }
  
    return (
       <button type="button" showModal = {handleCallback}>{buttonText}</button>
    )
   };