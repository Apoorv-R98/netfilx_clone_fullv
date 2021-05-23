import React, { useEffect, useState } from "react";
import "./ProfileScreen.css";
import Nav from "../Nav";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";

function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="profileScreen_details">
            <h2>{user.email}</h2>
            <div className="profileScreen_plans">
              <h3>Plans </h3>
              <div className="plansScreen_plan">
                <div className="plansScreen_info">
                  <h5>Basic Plan</h5>
                  <h6>720p</h6>
                </div>
                <button className="btn_active">Subscribe</button>
              </div>
              <div className="plansScreen_plan">
                <div className="plansScreen_info">
                  <h5>Standard Plan</h5>
                  <h6>1080p</h6>
                </div>
                <button className="btn_active">Subscribe</button>
              </div>
              <div className="plansScreen_plan">
                <div className="plansScreen_info">
                  <h5>Premium Plan</h5>
                  <h6>4K + HDR</h6>
                </div>
                <button className="btn_disabled">Current Package</button>
              </div>

              <button
                onClick={() => auth.signOut()}
                className="profileScreen_signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
