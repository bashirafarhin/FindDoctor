import React from "react";
import { CalendarCheck2 } from "lucide-react";
import { Phone } from "lucide-react";
import { ThumbsUp } from "lucide-react";

interface DoctorCardProps {
  name: string;
  specialty: string;
  experience: string;
  location: string;
  consultationFee: string;
  rating: string;
  reviews: string;
  image: string;
  bookingFee?: number;
  contact?: number;
  isAvailable?: boolean;
  isFromProcto?: boolean;
}

const DoctorCard: React.FC<DoctorCardProps> = ({
  name,
  specialty,
  experience,
  location,
  consultationFee,
  rating,
  reviews,
  image,
  bookingFee,
  contact,
  isAvailable,
  isFromProcto,
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-4 border border-gray-200 rounded-xl p-5 shadow-sm bg-white hover:shadow-md transition">
      {/* Left: Image */}
      <div className="flex gap-4 relative">
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="w-30 h-30 rounded-full object-cover border"
          />
          {isFromProcto && (
            <div className="border border-black absolute top-18 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white text-xs p-1 rounded text-center whitespace-nowrap">
              {/* logo */}
              <div className="flex items-center justify-center gap-1">
                <div className="rounded-full bg-sky-600 h-1 w-1"></div>
                <h1 className="text-blue-800">practo</h1>
                <div className="rounded-full bg-sky-600 h-1 w-1"></div>
              </div>
              <span className="text-blue-500">Skin and hair</span>
            </div>
          )}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-blue-700">{name}</h3>
          <p className="text-sm text-gray-600">{specialty}</p>
          <p className="text-sm text-gray-500">{experience}</p>
          <p className="text-sm text-gray-500">{location}</p>
          <p className="text-sm text-gray-700 font-medium mt-1">
            ₹{consultationFee} Consultation Fee
          </p>
          <div className="mt-1 text-sm flex items-center gap-2">
            <span className="bg-green-500 text-white px-2 py-0.5 rounded-full text-xs flex gap-1">
              <ThumbsUp className="w-4 h-4" /> {rating}%
            </span>
            <span className="text-blue-600 underline cursor-pointer">
              {reviews} Patient Stories
            </span>
          </div>
        </div>
      </div>

      {/* Right: Buttons */}
      <div className="flex flex-col gap-2 justify-end items-start md:items-end">
        {isAvailable && (
          <div className="flex items-center text-green-600 text-sm gap-1 font-semibold">
            <CalendarCheck2 />
            Available Today
          </div>
        )}
        <button className="bg-blue-500 text-white flex flex-col px-2 py-1 text-sm rounded-md hover:bg-blue-600 transition">
          Book Clinic Visit
          {bookingFee && <span className="text-[0.7rem]">No Booking Fee</span>}
        </button>
        {contact && (
          <button className="border text-blue-600 border-blue-200 px-2 py-1 text-sm rounded-md hover:bg-blue-50 transition flex gap-1">
            <Phone />
            Contact Clinic
          </button>
        )}
      </div>
    </div>
  );
};

export default DoctorCard;
