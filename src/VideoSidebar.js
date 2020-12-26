import React, { useState } from "react";
import "./videoSidebar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";

const VideoSidebar = () => {
  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        <FavoriteIcon fontSize="large" />
      </div>
      <div className="videoSidebar__button">
        <MessageIcon fontSize="large" />
        <p>200</p>
      </div>
      <div className="videoSidebar__button">
        <ShareIcon fontSize="large" />
        <p>200</p>
      </div>
    </div>
  );
 };

export default VideoSidebar;