import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";
import ProfileClient from "../Components/Profile/ProfileClient";
import ProfileLawyer from "../Components/Profile/ProfileLawyer";
import { getMyProfile } from "../JS/actions/profile";

const Profile = () => {
  const dispatch = useDispatch();
  const Profile = useSelector((state) => state.profile.Profile);
  const User = useSelector((state) => state.auth.User);
  const Loading = useSelector((state) => state.profile.loading);
  
  useEffect(() => {
    if (User.role === 'lawyer') {dispatch(getMyProfile())}
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
    return (
      <>
        {Loading ? <LoadingSpinner /> : User.role === "lawyer" && Profile ? (
          <ProfileLawyer profile={Profile} />
        ) : (
          <ProfileClient user={User} />
        )}
      </>
    );
  }

export default Profile;
