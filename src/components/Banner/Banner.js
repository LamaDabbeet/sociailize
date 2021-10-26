import React from "react";
import { CustomModal } from "../Shared/CustomModal/CustomModal";
import "./Banner.scss";

export const Banner = (props) => {
  const { buttonText, bannerTitle, bannerSubTitle } = props;

  return (
    <div className="banner text-center">
      <h1>{bannerTitle}</h1>
      {bannerSubTitle === "" ? <p>{bannerSubTitle}</p> : ""}
      <CustomModal
        triggerButtonText={buttonText}
        modalButtonText={"Read More"}
        modalText={
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam invidunt ut labore"
        }
      ></CustomModal>
    </div>
  );
};
