import { Request, Response } from "express";
import { doctors } from "../data/doctors";

export const getDoctors = (req: Request, res: Response) => {
  const { location = "", query = "" } = req.query;
  const lowerLocation = (location as string).toLowerCase();
  const lowerQuery = (query as string).toLowerCase();
  const result = doctors.filter((doc) => {
    const docLocation = doc.location.toLowerCase();
    const docSpecialty = doc.specialty.toLowerCase();
    const specialtyMatch = docSpecialty.includes(lowerQuery);
    const locationMatch =
      lowerLocation === "bangalore" || docLocation.includes(lowerLocation);
    return specialtyMatch && locationMatch;
  });

  res.json({ count: result.length, doctors: result });
};
