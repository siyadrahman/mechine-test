import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    step1: {},
    step2: {},
    step3: {},
  },
  reducers: {
    setStep1: (state, action: PayloadAction<any>) => {
      state.step1 = { ...state.step1, ...action.payload };
    },
    setStep2: (state, action: PayloadAction<any>) => {
      state.step2 = { ...state.step2, ...action.payload };
    },
    setStep3: (state, action: PayloadAction<any>) => {
      state.step3 = { ...state.step3, ...action.payload };
    },
  },
});

export const { setStep1, setStep2, setStep3 } = userSlice.actions;
export default userSlice.reducer;
