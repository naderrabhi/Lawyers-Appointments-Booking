import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProfiles } from "../../JS/actions/profile";
import LawyerCard from "../LawyerCard/LawyerCard";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

import "./lawyerslist.css";

const Specialty = [
  "bankruptcy",
  "business",
  "civil Rights",
  "criminal Law",
  "immigration",
  "family",
];

const LawyersList = () => {
  const [input, setInput] = useState("");
  const Profiles = useSelector((state) => state.profile.Profiles);
  const Loading = useSelector((state) => state.profile.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProfiles("all", ""));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSpecialty = (e) => {
    dispatch(getAllProfiles(e.target.value, ""));
  };
  return (
    <div className="lawyer--page">
      <div className="filter--lawyers">
        <form className="lawyer--form" onSubmit={(e) => e.preventDefault()}>
          <select
            className="form-select form-select-lg"
            onChange={handleSpecialty}
            name="select-lawyer"
            id="select-lawyer"
          >
            <option defaultValue>all</option>
            {Specialty.map((s, i) => (
              <option key={i} value={s}>
                {s}
              </option>
            ))}
          </select>
          <div className="form--search">
            <input
              value={input}
              placeholder="Search by name..."
              onChange={(e) => {
                setInput(e.target.value);
              }}
              type="text"
              className="form-control form-control-lg"
            />
            <button
              onClick={() => {
                dispatch(getAllProfiles("all", input));
                setInput("");
              }}
              className="btn btn-search btn-sm btn-primary"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="lawyers--list">
        {Loading ? (
          <LoadingSpinner />
        ) : (
          Profiles &&
          Profiles.map((profile) => (
            <LawyerCard key={profile._id} profile={profile} />
          ))
        )}
      </div>
    </div>
  );
};

export default LawyersList;
