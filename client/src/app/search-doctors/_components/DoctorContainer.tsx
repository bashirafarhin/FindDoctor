"use client";

import React from "react";
import DoctorList from "./DoctorList";
import { CircleCheck } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";

const DoctorContainer = () => {
  const { data, loading, error, query, location, totalResults } = useSelector(
    (state: RootState) => state.doctor
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="flex flex-col">
      <h1 className="text-4xl">
        {totalResults} {query} available in{" "}
        {location === "Bangalore" ? location : `${location}, Bangalore`}
      </h1>

      <div className="flex gap-1 mt-3">
        <CircleCheck />
        <h2 className="text-xl">
          Book appointments with min wait-time & verified doctors details
        </h2>
      </div>
      {data && <DoctorList doctors={data} />}
    </div>
  );
};

export default DoctorContainer;
