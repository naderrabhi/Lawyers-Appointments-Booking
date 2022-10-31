import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import ProfileClient from "../Components/Profile/ProfileClient";
import ProfileLawyer from "../Components/Profile/ProfileLawyer";
import { getProfile } from "../JS/actions/actionsProfile";

const Profile = ({ user }) => {
  const dispatch = useDispatch();
  const profileArr = useSelector((state) => state.reducersProfile.Profile);
  const profile = { ...profileArr[0] };

  useEffect(() => {
    dispatch(getProfile());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>

      {profile && user.role === "lawyer" ? (
        <ProfileLawyer profile={profile} />
      ) : !profile && user.role === "lawyer" ? (
        Navigate("/")
      ) : user.role === "client" ? (
        <ProfileClient user={user} />
      ) : (
        Navigate("/")
      )}
    </>
  );
};

export default Profile;
