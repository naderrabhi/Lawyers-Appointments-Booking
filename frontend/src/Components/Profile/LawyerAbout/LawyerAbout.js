import React from "react";

const LawyerAbout = ({ profile }) => {
  return (
    <div
      className="tab-pane fade show active"
      id="home"
      role="tabpanel"
      aria-labelledby="home-tab"
    >
      <div className="row">
        <div className="col-md-6">
          <label>First Name</label>
        </div>
        <div className="col-md-6">
          <p>{profile && profile.userID && profile.userID.firstName}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <label>Last Name</label>
        </div>
        <div className="col-md-6">
          <p>{profile && profile.userID && profile.userID.lastName}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <label>Email</label>
        </div>
        <div className="col-md-6">
          <p>{profile && profile.userID && profile.userID.email}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <label>Phone</label>
        </div>
        <div className="col-md-6">
          <p>{profile && profile.phone && profile.phone}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <label>Twitter</label>
        </div>
        <div className="col-md-6">
          <p>{profile && profile.social && profile.social.twitter}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <label>Facebook</label>
        </div>
        <div className="col-md-6">
          <p>{profile && profile.social && profile.social.facebook}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <label>Linkedin</label>
        </div>
        <div className="col-md-6">
          <p>{profile && profile.social && profile.social.linkedin}</p>
        </div>
      </div>
    </div>
  );
};

export default LawyerAbout;
