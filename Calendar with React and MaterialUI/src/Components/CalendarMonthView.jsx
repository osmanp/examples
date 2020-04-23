import { Grid } from "@material-ui/core";
import moment from "moment";
import React from "react";
import CalendarWeekView from "./CalendarWeekView";
import AddEventDialog from "./AddEvent";

const CalendarMonthView = ({ month, events,eventHandlers }) => {
  let firstDayOfMonth = moment().month(month).startOf("month");
  let weekDay = firstDayOfMonth.isoWeekday();
  let startOfCalendar = moment(firstDayOfMonth).add("day", weekDay - 7);
  const [open, setOpen] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState(firstDayOfMonth);
  const [selectedEvent, setSelectedEvent] = React.useState(null);
  const handleClick = (date, event) => {
    setSelectedDate(date);
    setSelectedEvent(event);
    console.log('handle click')
    setOpen(true);
  };
  return (
    <>
      <AddEventDialog
        state={open}
        setOpen={setOpen}
        date={selectedDate.format("YYYY-MM-DD")}
        dateAvailable={false}
        event={selectedEvent}
        eventHandlers={eventHandlers}
      ></AddEventDialog>
      <Grid container alignContent="stretch" justify="flex-start" alignItems>
        {Array.from(Array(5).keys()).map((element, index) => {
          return (
            <CalendarWeekView
              date={moment(startOfCalendar).add("week", element)}
              firstWeek={!element}
              events={events}
              onHandleDayClick={handleClick}
             
            ></CalendarWeekView>
          );
        })}
      </Grid>
    </>
  );
};

export default CalendarMonthView;
