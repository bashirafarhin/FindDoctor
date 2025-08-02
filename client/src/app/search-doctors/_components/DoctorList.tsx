import React from "react";
import DoctorCard from "./DoctorCard";
import { Doctor } from "@/lib/types/Doctor";

interface DoctorListProps {
  doctors: Doctor[];
}

const DoctorList: React.FC<DoctorListProps> = ({ doctors }) => {
  return (
    <div className="w-full mt-5">
      {doctors.map((doctor, index) => (
        <DoctorCard
          key={index}
          name={doctor.name}
          specialty={doctor.specialty}
          experience={doctor.experience}
          location={doctor.location}
          consultationFee={doctor.consultationFee}
          rating={doctor.rating}
          reviews={doctor.reviews}
          image={doctor.image}
          bookingFee={doctor.bookingFee}
          contact={doctor.contact}
          isAvailable={doctor.isAvailable}
          isFromProcto={doctor.isFromProcto}
        />
      ))}
    </div>
  );
};

export default DoctorList;
