export type Doctor = {
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
};
