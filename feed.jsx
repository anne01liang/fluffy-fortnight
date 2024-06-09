import React from "react";
import { Home } from "../../icons/Home";
import { UserInterfaceChat1 } from "../../icons/UserInterfaceChat1";
import { UserInterfaceChevronRight7 } from "../../icons/UserInterfaceChevronRight7";
import { UserInterfaceInfo1 } from "../../icons/UserInterfaceInfo1";
import { UserInterfaceInfo5 } from "../../icons/UserInterfaceInfo5";
import { UserInterfaceNote11 } from "../../icons/UserInterfaceNote11";
import { UserInterfaceUser1 } from "../../icons/UserInterfaceUser1";
import "./style.css";

export const IphoneProMax = () => {
  return (
    <div className="iphone-pro-max">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">Specials</div>
          <div className="text-wrapper-2">Everywhere</div>
          <div className="text-wrapper-3">Chicken Tinga</div>
          <UserInterfaceInfo5 className="user-interface-info" />
          <div className="text-wrapper-4">Tempura Shrimp</div>
          <UserInterfaceInfo1 className="user-interface-info-1" />
          <div className="text-wrapper-5">3.2/5</div>
          <div className="overlap-group">
            <img className="shape" alt="Shape" />
            <UserInterfaceChevronRight7 className="user-interface" />
          </div>
          <div className="text-wrapper-6">4.2/5</div>
          <div className="overlap-2">
            <img className="shape" alt="Shape" />
            <UserInterfaceChevronRight7 className="user-interface" />
          </div>
          <div className="text-wrapper-7">Brown Rice Pilaf</div>
          <UserInterfaceInfo5 className="user-interface-info-5" />
          <div className="text-wrapper-8">3.5/5</div>
          <div className="overlap-3">
            <img className="shape" alt="Shape" />
            <UserInterfaceChevronRight7 className="user-interface" />
          </div>
          <img className="rectangle" alt="Rectangle" />
          <img className="img" alt="Rectangle" />
          <img className="rectangle-2" alt="Rectangle"  />
          <div className="text-wrapper-9">Chick’n Tofu</div>
          <UserInterfaceInfo5 className="user-interface-info-5-instance" />
          <div className="text-wrapper-10">2.9/5</div>
          <div className="overlap-4">
            <img className="shape" alt="Shape" />
            <UserInterfaceChevronRight7 className="user-interface" />
          </div>
          <img className="rectangle-3" alt="Rectangle"  />
          <div className="text-wrapper-11">Chicken Soup</div>
          <UserInterfaceInfo5 className="icon-instance-node" />
          <div className="text-wrapper-12">4.8/5</div>
          <div className="overlap-5">
            <img className="shape" alt="Shape" />
            <UserInterfaceChevronRight7 className="user-interface" />
          </div>
          <img className="rectangle-4" alt="Rectangle"  />
          <div className="text-wrapper-13">Taco Bar</div>
          <UserInterfaceInfo5 className="user-interface-info-2" />
          <div className="text-wrapper-14">4.9/5</div>
          <div className="overlap-6">
            <img className="shape" alt="Shape"  />
            <UserInterfaceChevronRight7 className="user-interface" />
          </div>
          <img className="rectangle-5" alt="Rectangle" />
        </div>
        <div className="overlap-7">
          <div className="header">
            <div className="greet">
              <div className="text-wrapper-15">Stanford</div>
            </div>
          </div>
          <div className="greet-wrapper">
            <div className="div-wrapper">
              <div className="text-wrapper-16">Talko</div>
            </div>
          </div>
        </div>
        <div className="overlap-8">
          <div className="nav">
            <UserInterfaceNote11 className="user-interface-note" />
            <Home className="home-instance" />
            <div className="tab">
              <UserInterfaceChat1 className="user-interface-chat" />
            </div>
            <div className="user-interface-user-wrapper">
              <UserInterfaceUser1 className="user-interface-user" />
            </div>
            <div className="text-wrapper-17">Home</div>
            <div className="text-wrapper-18">Menu</div>
            <div className="text-wrapper-19">Messages</div>
            <div className="text-wrapper-20">Profile</div>
          </div>
          <div className="add-new-image">
            <div className="plus-icon">
              <img
                className="combined-shape"
                alt="Combined shape"
              />
            </div>
          </div>
        </div>
        <div className="group">
          <div className="text-wrapper-21">Menu -</div>
        </div>
        <div className="group-2">
          <div className="text-wrapper-21">Dining Hall -</div>
        </div>
        <div className="group-3">
          <div className="text-wrapper-21">My Restrictions -</div>
        </div>
        <div className="drop-down">
          <div className="select-item">Lunch</div>
          <img className="icon" alt="Icon" />
        </div>
        <div className="drop-down-2">
          <div className="select-item">All</div>
          <img className="icon" alt="Icon" />
        </div>
        <div className="drop-down-3">
          <div className="select-item">Casper</div>
          <img className="icon" alt="Icon"/>
        </div>
        <div className="text-wrapper-22">Edit</div>
        <div className="search">
          <div className="frame">
            <div className="iconly-light-outline">
              <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                  <img className="group-4" alt="Group"/>
                  <img className="group-5" alt="Group"  />
                </div>
              </div>
            </div>
            <input className="search-dining-hall" placeholder="Search Dining Hall Food" type="text" />
          </div>
        </div>
      </div>
    </div>
  );
};
