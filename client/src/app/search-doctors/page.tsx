import React from "react";
import FiltersBars from "./_components/FilterBars";
import DoctorContainer from "./_components/DoctorContainer";

const Home = () => {
  return (
    <>
      <FiltersBars />
      <div className="w-[80vw] mx-auto mt-5">
        <DoctorContainer />
      </div>
    </>
  );
};

export default Home;
