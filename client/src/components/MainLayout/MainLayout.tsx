import React from "react";
import SearchBar from "./SearchBar";
import FamousSearches from "./FamousSearches";
import Footer from "../Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <div className="bg-blue-700 w-full flex flex-col items-center justify-center p-6 min-h-100">
        <h1 className="text-center text-white text-6xl font-semibold">
          Your home for health
        </h1>
        <h2 className="text-center text-white text-3xl font-bold mt-10">
          Find and book
        </h2>
        <SearchBar />
        <FamousSearches />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
