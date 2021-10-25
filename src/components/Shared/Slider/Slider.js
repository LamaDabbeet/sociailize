import React from 'react';
import './Slider.scss';
import {Carousel} from 'react-bootstrap';
import {Button} from '../Button/Button';

export const Slider=(props)=> {
 const {sliderImages,title,subTitle,para,buttonText,backgroundColor} = props;
    return (
    <div className="slider" style={{backgroundColor:backgroundColor}}>
      <h2 className="text-center">{title}</h2>
      <p className="text-center">{subTitle}</p>
      <Carousel>
        {sliderImages.map((slide,index)=>(  
        <Carousel.Item key={index} >
         {/*    <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
            /> */}
            <div className="rounded-image"></div>
            <h2 className="text-center">{slide.title}</h2>
        </Carousel.Item>) 
        )}
    </Carousel>
    <div className="button-wrapper d-flex flex-column align-items-center">
        <p className="text-center">{para}</p>
        <Button buttonText={buttonText}></Button>
    </div>
  </div>
)};