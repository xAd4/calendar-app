import { useDispatch, useSelector } from "react-redux";
import { setEvent } from "../store/calendar/calendarSlice";

export const useCalendarSlice = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);

  const setActiveEvent = (calendarEvent) => {
    dispatch(setEvent(calendarEvent));
  };

  return {
    events,
    activeEvent,
    setActiveEvent,
  };
};
