import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileClient from "../Components/Profile/ProfileClient";
import ProfileLawyer from "../Components/Profile/ProfileLawyer";
import { getMyProfile } from "../JS/actions/profile";

const Profile = ({ user }) => {
  const dispatch = useDispatch();
  const Profile = useSelector((state) => state.profile.Profile);
  const User = useSelector((state) => state.auth.User);
  const loading = useSelector((state) => state.profile.loading);
  
  

  useEffect(() => {
    if (User.role == 'lawyer') {dispatch(getMyProfile())}
  }, [])
  
    
  if (!loading) {
    return (
      <>
        {User.role === "lawyer" && Profile ? (
          <ProfileLawyer profile={Profile} />
        ) : (
          <ProfileClient user={User} />
        )}
      </>
    );
  }
};

export default Profile;
