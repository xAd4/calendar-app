import { Navbar } from "../components/Navbar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, Views } from "react-big-calendar";
import { addHours } from "date-fns";
import { localizer } from "../../helpers/localizer";
import { getMessages } from "../../helpers/getMessages";
import { useState } from "react";
import { CalendarEvent } from "../components/CalendarEvent";
import { CalendarModal } from "../components/CalendarModal";
import { useUiSlice } from "../../hooks/useUiSlice";

const myEventsList = [
  {
    title: "Cumpleaños del jefe",
    notes: "Comprar la torta",
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: "#fafafa",
    user: {
      id: 123,
      name: "Ángel Estarita",
    },
  },
];

export const CalendarPage = () => {
  // Lógica necesaria para cambiar de vista (Month, Week, Day, Agenda)
  const { onOpenModal } = useUiSlice();
  const [currentView, setCurrentView] = useState(Views.MONTH);
  const [currentDate, setCurrentDate] = useState(new Date());

  const onDoubleClick = (event) => {
    onOpenModal();
    console.log({ onDoubleClick: event });
  };

  return (
    <>
      <Navbar />
      <br />
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc(100vh - 80px)" }}
        messages={getMessages()}
        date={currentDate}
        view={currentView}
        onView={setCurrentView}
        onNavigate={setCurrentDate}
        components={{
          event: CalendarEvent,
        }}
        onDoubleClickEvent={onDoubleClick}
      />
      <CalendarModal />
    </>
  );
};
