import React from "react";
import LawyersList from "../Components/LawyersList/LawyersList";

const Lawyers = () => {
  return (
    <div
      className="section__padding"
      style={{ background: "var(--color-black)" }}
    >
      <LawyersList />
    </div>
  );
};

export default Lawyers;
