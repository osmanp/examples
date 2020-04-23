import React from "react";
import {
  Grid,
  Container,
  Button,
  Typography,
  Paper,
  Divider,
} from "@material-ui/core";
import CalendarMonthView from "./CalendarMonthView";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

const Cover = ({ events }) => {
  const [date, setDate] = React.useState(moment().toISOString());
  const [month, setMonth] = React.useState(moment().month());
  const [eventList, setEventList] = React.useState(events);
  const onSaveEvent = (event) => {
    event.id = uuidv4();
    eventList.push(event);
    setEventList(eventList);
  };
  const onUpdateEvent = (event) => {
    let eventIndex = eventList.findIndex((e) => e.id == event.id);
    eventList[eventIndex] = event;
    setEventList(eventList);
  };
  const onDeleteEvent = (event) => {
    let eventIndex = eventList.findIndex((e) => e.id == event.id);
    eventList.splice(eventIndex, 1);
    setEventList(eventList);
  };
  const eventHandler = {
    save: onSaveEvent,
    update: onUpdateEvent,
    delete: onDeleteEvent,
  };
  const handlePrev = () => {
    setMonth(month - 1);
    setDate(moment(date).add(-1, "month"));
  };
  const handleNext = () => {
    setMonth(month + 1);
    setDate(moment(date).add(1, "month"));
  };
  return (
    <Container maxWidth="lg">
      <Grid
        item
        container
        alignItems="baseline"
        direction="column"
        justify="flex-start"
      >
        <Grid
          item
          xs
          container
          alignItems="baseline"
          direction="row"
          alignContent="space-between"
          style={{ border: "1px solid #dadce0", marginBottom: "10px" }}
          spacing={1}
        >
          <Grid item xs={1}>
            <Button color="primary" variant="contained" onClick={handlePrev}>
              {" "}
              {"< prev"}{" "}
            </Button>{" "}
          </Grid>

          <Grid item xs={1}>
            <Button color="primary" variant="contained" onClick={handleNext}>
              {" "}
              {"next >"}{" "}
            </Button>{" "}
          </Grid>

          <Grid item xs={4} style={{ marginLeft: "20px" }}>
            <Typography>{moment(date).format("MMMM,       YYYY")}</Typography>
          </Grid>
        </Grid>
        <Grid item xs>
          <CalendarMonthView
            month={month}
            events={eventList}
            eventHandlers={eventHandler}
          ></CalendarMonthView>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cover;
