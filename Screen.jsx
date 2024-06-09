import React from "react";
import { ChatBubbleOutline } from "../../icons/ChatBubbleOutline";
import { Home } from "../../icons/Home";
import { PostAdd } from "../../icons/PostAdd";
import { StarBorder3 } from "../../icons/StarBorder3";
import { StyleOutlined } from "../../icons/StyleOutlined";
import { StyleOutlined2 } from "../../icons/StyleOutlined2";
import { StyleOutlined3 } from "../../icons/StyleOutlined3";
import { SwmIconsBrokenTrendingUp } from "../../icons/SwmIconsBrokenTrendingUp";
import "./style.css";

export const Screen = () => {
  return (
    <div className="screen">
      <div className="div">
        <div className="overlap">
          <img className="rectangle" alt="Rectangle"  />
          <img className="img" alt="Rectangle" />
          <img className="vector" alt="Vector" />
          <div className="nav">
            <div className="tab-bar-buttons">
              <div className="tab">
                <Home className="icon-instance-node" />
                <div className="label">Feed</div>
              </div>
              <div className="tab">
                <ChatBubbleOutline className="icon-instance-node" color="#A09CAB" />
                <div className="text-wrapper">Messages</div>
              </div>
              <div className="tab">
                <PostAdd className="icon-instance-node" color="#A09CAB" />
                <div className="label-2">Post</div>
              </div>
              <div className="tab">
                <StyleOutlined3 className="icon-instance-node" color="#A09CAB" />
                <div className="label-3">Profile</div>
              </div>
              <div className="tab">
                <StyleOutlined2 className="icon-instance-node" color="#A09CAB" />
                <div className="label-4">Menu</div>
              </div>
            </div>
          </div>
        </div>
        <div className="header">
          <div className="greet">
            <div className="text-wrapper-2">Stanford</div>
          </div>
        </div>
        <div className="greet-wrapper">
          <div className="div-wrapper">
            <div className="text-wrapper-3">Talko</div>
          </div>
        </div>
        <div className="search">
          <div className="frame">
            <div className="iconly-light-outline">
              <div className="overlap-group-wrapper">
                <div className="overlap-group">
                  <img className="group" alt="Group"  />
                  <img className="group-2" alt="Group" />
                </div>
              </div>
            </div>
            <input className="search-stanford" placeholder="Search Stanford Dining Halls" type="text" />
          </div>
        </div>
        <div className="group-3">
          <div className="text-wrapper-4">Popular - Lunch</div>
          <div className="text-wrapper-5">See all</div>
        </div>
        <div className="text-wrapper-6">Global Feed</div>
        <div className="recommended">
          <div className="frame-2">
            <div className="group-4">
              <div className="overlap-group-2">
                <img
                  className="rectangle-2"
                  alt="Rectangle"
                />
                <div className="frame-3">
                  <div className="text-wrapper-7">4.2/5</div>
                  <img className="shape" alt="Shape"  />
                </div>
              </div>
            </div>
            <div className="frame-4">
              <div className="frame-5">
                <div className="text-wrapper-8">Wilbur</div>
              </div>
              <div className="frame-6">
                <SwmIconsBrokenTrendingUp className="SWM-icons-broken" color="#F4400E" />
                <div className="text-wrapper-9">Trending</div>
              </div>
            </div>
            <div className="text-wrapper-10">(30 Reviews)</div>
          </div>
          <div className="frame-7">
            <div className="group-4">
              <div className="overlap-group-2">
                <img
                  className="rectangle-2"
                  alt="Rectangle"
                />
                <div className="frame-3">
                  <div className="text-wrapper-7">4/5</div>
                  <img className="shape" alt="Shape"  />
                </div>
              </div>
            </div>
            <div className="frame-4">
              <div className="frame-5">
                <div className="text-wrapper-11">Arillaga Dining</div>
              </div>
              <div className="frame-6">
                <SwmIconsBrokenTrendingUp className="SWM-icons-broken" color="#F4400E" />
                <div className="text-wrapper-9">Trending</div>
              </div>
            </div>
          </div>
        </div>
        <img className="rectangle-3" alt="Rectangle" />
        <p className="rock-cod-lakeside">
          <span className="span">
            Rock Cod
            <br />
          </span>
          <span className="text-wrapper-12">Lakeside</span>
        </p>
        <p className="p">
          The Rock Cod is the driest thing I have ever put in my mouth. Pairing it with olive oil made it tolerable
        </p>
        <div className="frame-8">
          <div className="frame-9">
            <img className="vector-2" alt="Vector" />
            <div className="text-wrapper-13">32</div>
          </div>
          <div className="frame-10">
            <img className="svg-path" alt="Svg path" />
            <div className="text-wrapper-14">8</div>
          </div>
          <div className="frame-11">
            <img className="svg-path-2" alt="Svg path"/>
            <div className="text-wrapper-15">Share</div>
          </div>
        </div>
        <div className="stars">
          <div className="overlap-2">
            <StarBorder3 className="star-border" color="black" />
            <StarBorder3 className="star-border-3" color="black" />
            <StarBorder3 className="star-border-2" color="black" />
            <StarBorder3 className="style-outlined-1" color="black" />
          </div>
          <StyleOutlined className="star" color="#F4400E" />
        </div>
        <img className="vector-3" alt="Vector" />
      </div>
    </div>
  );
};
