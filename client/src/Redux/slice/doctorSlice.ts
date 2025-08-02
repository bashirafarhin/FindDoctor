import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface FetchDoctorsParams {
  query: string;
  location: string;
}

interface ErrorResponse {
  message: string;
}

export const fetchDoctors = createAsyncThunk(
  "doctors/fetchDoctors",
  async ({ query, location }: FetchDoctorsParams, thunkAPI) => {
    try {
      const res = await axios.get("http://localhost:8000/api/doctors/search", {
        params: { query, location },
      });
      return {
        doctors: res.data.doctors,
        totalResults: res.data.count,
      };
    } catch (error: unknown) {
      let message = "Failed to fetch";
      if (axios.isAxiosError(error)) {
        message = (error.response?.data as ErrorResponse)?.message || message;
      }

      return thunkAPI.rejectWithValue(message);
    }
  }
);
