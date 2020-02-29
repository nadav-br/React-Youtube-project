import React from "react";
import {SideVideoBox,
        SideVideoTitle,
        SideVideoImg,
        SideVideoviews,
        DescriptionBox,
      } from "../../../Styled Components/SideVideoStyle.js";

const SideVideo = (props) => {
  
    return(
    <SideVideoBox className="SideVideo">
      <DescriptionBox>
        <SideVideoTitle>{props.snippet.title}</SideVideoTitle>
        <SideVideoviews>{props.statistics.viewCount} <span> - צפיות</span> </SideVideoviews>
      </DescriptionBox>
      <SideVideoImg src={props.snippet.thumbnails.medium.url} alt="" />
    </SideVideoBox>
    )
}

export default SideVideo

