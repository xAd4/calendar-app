import { Navbar } from "../components/Navbar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, Views } from "react-big-calendar";
import { localizer } from "../../helpers/localizer";
import { getMessages } from "../../helpers/getMessages";
import { useState } from "react";
import { CalendarEvent } from "../components/CalendarEvent";
import { CalendarModal } from "../components/CalendarModal";
import { useUiSlice } from "../../hooks/useUiSlice";
import { useCalendarSlice } from "../../hooks/useCalendarSlice";
import { FabAddNew } from "../components/FabAddNew";

export const CalendarPage = () => {
  // Lógica necesaria para cambiar de vista (Month, Week, Day, Agenda)
  const { onOpenModal } = useUiSlice();
  const { events, setActiveEvent } = useCalendarSlice();
  const [currentView, setCurrentView] = useState(Views.MONTH);
  const [currentDate, setCurrentDate] = useState(new Date());

  const onDoubleClick = (event) => {
    onOpenModal();
    console.log({ onDoubleClick: event });
  };

  const onSelect = (event) => {
    setActiveEvent(event);
  };

  return (
    <>
      <Navbar />
      <br />
      <Calendar
        localizer={localizer}
        events={events}
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
        onSelectEvent={onSelect}
      />
      <CalendarModal />
      <FabAddNew />
    </>
  );
};
