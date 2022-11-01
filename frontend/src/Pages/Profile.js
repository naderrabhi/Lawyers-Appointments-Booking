import React, { useEffect } from "react";
import { useDispatch} from "react-redux";
import { Navigate } from "react-router-dom";
import ProfileClient from "../Components/Profile/ProfileClient";
import ProfileLawyer from "../Components/Profile/ProfileLawyer";
import {getMyProfile} from "../JS/actions/profile"

const Profile = ({ user }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyProfile());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>

      {/* {profile && user.role === "lawyer" ? (
        <ProfileLawyer profile={profile} />
      ) : !profile && user.role === "lawyer" ? (
        Navigate("/")
      ) : user.role === "client" ? (
        <ProfileClient user={user} />
      ) : (
        Navigate("/")
      )} */}
    </>
  );
};

export default Profile;
