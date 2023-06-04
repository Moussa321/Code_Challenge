import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const appSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    setCustomersState(state, action) {
      state.splice(0, state.length);
      action.payload.forEach((customer) => {
        state.push(customer);
      });
    },
    deleteCustomerState(state, action) {
      for (let i = 0; i < state.length; i++) {
        if (state[i]._id === action.payload) {
          state.splice(i, 1);
          break;
        }
      }
    },
  },
});

export const { setCustomersState, deleteCustomerState } = appSlice.actions;
export default appSlice.reducer;
