import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchDoctors } from "../slice/doctorSlice";
import { Doctor } from "@/lib/types/Doctor";

interface DoctorState {
  data: Doctor[];
  loading: boolean;
  error: string | null;
  query: string;
  location: string;
  totalResults: number;
}

interface SearchParams {
  query: string;
  location: string;
}

const initialState: DoctorState = {
  data: [],
  loading: false,
  error: null,
  query: "",
  location: "",
  totalResults: 0,
};

const doctorSlice = createSlice({
  name: "doctors",
  initialState,
  reducers: {
    setParams: (state, action: PayloadAction<SearchParams>) => {
      state.query = action.payload.query;
      state.location = action.payload.location;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDoctors.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDoctors.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.doctors;
        state.totalResults = action.payload.totalResults;
      })
      .addCase(fetchDoctors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setParams } = doctorSlice.actions;
export default doctorSlice.reducer;
