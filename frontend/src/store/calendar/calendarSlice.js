import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";

const tempEvent = {
  title: "Cumpleaños del jefe Redux",
  notes: "Comprar la torta Redux",
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: "#fafafa",
  user: {
    id: 123,
    name: "Ángel Redux",
  },
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    events: [tempEvent],
    activeEvent: null,
  },
  reducers: {
    setEvent: (state, action) => {
      state.activeEvent = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setEvent } = calendarSlice.actions;
