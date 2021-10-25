import React, { useState } from 'react';
import { Navbar } from '../../components/NavBar/Navbar';
import { Banner } from '../../components/Banner/Banner';
import { Footer } from '../../components/Footer/Footer';
import { Slider } from '../../components/Shared/Slider/Slider';
import { Button } from '../../components/Shared/Button/Button';
import { Modal } from 'react-bootstrap';

export const HomePage = () =>{
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const sliderImages=[{
        title:'title1',
        image:'',
        altImage:''
    },
     {
        title:'title2',
        image:'',
        altImage:''

    },
    {
        title:'title3',
        image:'',
        altImage:''
    }];

    return ( 
        <React.Fragment>
            <Navbar></Navbar>
            <Banner 
             bannerTitle={'SHOULD YOU BE TALKING TO A DOCTOR ABOUT YOUR ASTHMA?'}
             bannerSubTitle={'Lorem. ipsum dolor sit amet, consetetur sadipscing elitr, sed diam invidunt ut labore'}
             buttonText={'Take the Test'}
             >
             </Banner>
            <Slider
                title={'Title'} 
                subTitle={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam invidunt ut labore'} 
                sliderImages={sliderImages}
                buttonText={'Read More'} 
                para={'Lorem ipsum dolor sit met, consetetur sadipscing elitr?'}
                backgroundColor={'white'}
             >
             </Slider>
             <Slider
                title={'Title'} 
                subTitle={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam invidunt ut labore'} 
                sliderImages={sliderImages}
                buttonText={'Read More'} 
                para={'Lorem ipsum dolor sit met, consetetur sadipscing elitr?'}
                backgroundColor={'#F7F7F7'}
             >
             </Slider>
             <Slider
                title={'Title'} 
                subTitle={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam invidunt ut labore'} 
                sliderImages={sliderImages}
                buttonText={'Read More'} 
                para={'Lorem ipsum dolor sit met, consetetur sadipscing elitr?'}
                backgroundColor={'white'}
             >
             </Slider>
         
            <Footer></Footer>
        </React.Fragment>
        )
}