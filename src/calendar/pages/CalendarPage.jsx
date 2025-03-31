import { Navbar } from "../components/Navbar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, Views } from "react-big-calendar";
import { addHours } from "date-fns";
import { localizer } from "../../helpers/localizer";
import { getMessages } from "../../helpers/getMessages";
import { useState } from "react";

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

const eventProp = ({ title, notes, user, isSelected }) => {
  console.log({ title, notes, user, isSelected });
};

export const CalendarPage = () => {
  const [currentView, setCurrentView] = useState(Views.MONTH);
  const [currentDate, setCurrentDate] = useState(new Date());

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
        views={["month", "week", "day", "agenda"]}
        eventPropGetter={eventProp}
        date={currentDate}
        view={currentView}
        onView={setCurrentView}
        onNavigate={setCurrentDate}
      />
    </>
  );
};
