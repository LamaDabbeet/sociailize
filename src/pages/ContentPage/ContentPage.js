import React from "react";
import { Navbar } from "../../components/NavBar/Navbar";
import { Banner } from "../../components/Banner/Banner";
import { Footer } from "../../components/Footer/Footer";
import { Slider } from "../../components/Shared/Slider/Slider";

export const ContentPage = () => {
  const sliderImages = [
    {
      title: "title1",
      image: "",
      altImage: "",
    },
    {
      title: "title2",
      image: "",
      altImage: "",
    },
    {
      title: "title3",
      image: "",
      altImage: "",
    },
  ];
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Banner
        buttonText={"Button"}
        bannerTitle={"LOREM IPSUM DOLOR SIT AMET,CONSETETUR"}
        bannerSubTitle={
          "Lorem. ipsum dolor sit amet, consetetur sadipscing elitr, sed diam invidunt ut labore"
        }
      ></Banner>
      <Slider
        title={"Title"}
        subTitle={
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam invidunt ut labore"
        }
        sliderImages={sliderImages}
        buttonText={"Read More"}
        para={"Lorem ipsum dolor sit met, consetetur sadipscing elitr?"}
        backgroundColor={"white"}
      ></Slider>
      <Slider
        title={"Title"}
        subTitle={
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam invidunt ut labore"
        }
        sliderImages={sliderImages}
        buttonText={"Read More"}
        para={"Lorem ipsum dolor sit met, consetetur sadipscing elitr?"}
        backgroundColor={"#F7F7F7"}
      ></Slider>
      <Slider
        title={"Title"}
        subTitle={
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam invidunt ut labore"
        }
        sliderImages={sliderImages}
        buttonText={"Read More"}
        para={"Lorem ipsum dolor sit met, consetetur sadipscing elitr?"}
        backgroundColor={"white"}
      ></Slider>
      <Footer></Footer>
    </React.Fragment>
  );
};
