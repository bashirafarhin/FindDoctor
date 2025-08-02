"use client";

import React, { useEffect, useState } from "react";
import { MapPin, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/Redux/store";
import { fetchDoctors } from "@/Redux/slice/doctorSlice";
import useDebounce from "@/hooks/useDebounce";
import { setParams } from "@/Redux/reducer/doctorReducer";
import Dropdown from "@/components/ui/Dropdown";

const locationOptions = [
  "Bangalore",
  "Koramangala",
  "Indiranagar",
  "Whitefield",
  "Jayanagar",
  "HSR Layout",
  "Marathahalli",
  "Hebbal",
  "Malleshwaram",
  "BTM Layout",
];

const doctorSpecialties = [
  "Cardiologist",
  "Dermatologist",
  "Dentist",
  "ENT",
  "General Physician",
  "Orthopedic",
  "Pediatrician",
  "Psychiatrist",
  "Gynecologist",
  "Neurologist",
];

const SearchBar = () => {
  const [location, setLocation] = useState("Bangalore");
  const [specialty, setSpecialty] = useState("");
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 900);
  const debouncedLocation = useDebounce(location, 900);
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    if (debouncedQuery.trim() && debouncedLocation.trim()) {
      dispatch(setParams({ location, query }));
      dispatch(
        fetchDoctors({ location: debouncedLocation, query: debouncedQuery })
      );
      router.push("/search-doctors");
    }
  }, [debouncedQuery, debouncedLocation, dispatch, router]);

  return (
    <div className="flex flex-col sm:flex-row sm:items-center">
      {/* Location Dropdown */}
      <Dropdown
        label={
          <span className="flex items-center gap-2">
            <MapPin size={16} />
            {location}
          </span>
        }
        onSelect={(selected) => {
          if (typeof selected === "string") setLocation(selected);
        }}
        buttonClassName="w-full"
        items={locationOptions}
      />

      {/* Specialty Dropdown */}
      <Dropdown
        label={
          <span className="flex items-center gap-2">
            <Search size={16} />
            {specialty || "Search Doctors, clinics, hospitals etc."}
          </span>
        }
        onSelect={(selected) => {
          if (typeof selected === "string") {
            setSpecialty(selected);
            setQuery(selected);
          }
        }}
        buttonClassName="w-full"
        items={doctorSpecialties}
      />
    </div>
  );
};

export default SearchBar;
