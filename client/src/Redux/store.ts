import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import doctorReducer from "@/Redux/reducer/doctorReducer";

export const store = configureStore({
  reducer: {
    doctor: doctorReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
